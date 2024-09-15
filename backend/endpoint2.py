from urllib.parse import parse_qs, urlparse
import yt_dlp
from youtube_transcript_api import YouTubeTranscriptApi
import json
from analyze import get_time_suggestions
from endpoint1 import get_video_id

def get_time(url):
    video_id = get_video_id(url)
    if video_id:
        chunks = YouTubeTranscriptApi.get_transcript(video_id)
        suggestions = get_time_suggestions(chunks)
        print(suggestions)

def endpoint_two(url: str):
    get_time(url)


if __name__ == "__main__":
    url = input("Enter the url to analyze: ")
    endpoint_two(url)
