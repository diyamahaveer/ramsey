from urllib.parse import parse_qs, urlparse
import yt_dlp
from youtube_transcript_api import YouTubeTranscriptApi
import json
from analyze import analyze


def get_video_id(youtube_url):
    """Extract video ID from the YouTube URL."""
    parsed_url = urlparse(youtube_url)
    query_params = parse_qs(parsed_url.query)
    return query_params.get("v", [None])[0]


def obtain_transcript_with_timestamps(video_id):
    try:
        transcript = YouTubeTranscriptApi.get_transcript(video_id)
        combined_text = ""
        for entry in transcript:
            text = entry["text"]
            combined_text += f"{text} "

        analyzed_data = analyze(combined_text)

        # convert the Groq output (which is a JSON string) to a Python dictionary
        recipe_data = json.loads(analyzed_data)

        # extract
        ingredients = recipe_data.get("ingredients", [])
        duration = recipe_data.get("time", "")
        calories = recipe_data.get("calories", "")

        return ingredients, duration, calories

    except Exception as e:
        print(f"An error occurred: {e}")
        return [], "", ""


def get_youtube_search_results(query, max_results=2):
    response_data = []

    ydl_opts = {
        "quiet": True,
        "extract_flat": False,
        "skip_download": True,
    }

    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        search_results = ydl.extract_info(
            f"ytsearch{max_results}:{query}", download=False
        )["entries"]

    for entry in search_results:
        video_url = f"https://www.youtube.com/watch?v={entry['id']}"
        video_title = entry["title"]
        thumbnail_url = entry["thumbnail"]

        # get transcript and extract ingredients, duration, and calories for each video
        video_id = get_video_id(video_url)
        if video_id:
            ingredients, duration, calories = obtain_transcript_with_timestamps(
                video_id
            )
        else:
            print("Invalid YouTube URL.")
            continue

        video_data = {
            "title": video_title,
            "thumbnail": thumbnail_url,
            "ingredients": ingredients,
            "duration": duration,
            "calories": calories,
        }

        response_data.append(video_data)

    # combine the final json
    response_json = {"response": response_data}

    # print for debugging 
    print(json.dumps(response_json, indent=4))
    return response_json

def endpoint_one(query:str):
    get_youtube_search_results(query)

if __name__ == "__main__":
    keywords = input("Enter keywords to search: ")
    endpoint_one(keywords)
