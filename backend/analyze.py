import os
from dotenv import load_dotenv
from groq import Groq

load_dotenv()

client = Groq()

def chat_with_groq(prompt, model, response_format):
    completion = client.chat.completions.create(
        model=model,
        messages=[{"role": "user", "content": prompt}],
        response_format=response_format,
    )
    return completion.choices[0].message.content

def get_time_suggestions(video_chunks):
    prompt = """
      You are given video_chunks, a json object of an array of entries, where each entry has two fields "start" and "text",
      which is the timestamp and the corresponding transcript of that chunk of video. Suggest the best time to prompt the user to set a timer for [x] minutes.
      For example, when the transcript states "let the dough sit for 30 minutes", that corresponding timestamp ("start"), should be suggested.
        
      The format of the answer should be in a JSON object with the following structure:
        an array of objects, where each object has the following fields:
        timestamp: float (in seconds),
        timer_duration: string
        
        So basically, it should return an array of objects, where each object contains the timestamp where they should prompt the user, and a string indicating how long the timer_duration should be set for.
        Please include units for the timer_duration string      
        Here is the video_chunks array object:
    
        {video_chunks}
    
        Do not output anything else as this will be parsed as JSON.
    """.format(
        video_chunks=video_chunks,
        minutes=0
    )

    return chat_with_groq(prompt, "llama3-70b-8192", None)

def get_summarization(transcript):
    prompt = """
      Given this video transcript, figure out the ingredients, approximate time to make the recipe, and the approximate calories.
    
      The format of the answer should be in a JSON object with the following structure:
        
        ingredients: list of strings (no more than 10 strings),
        time: in minutes as string 
        calories: kcal as string
        
        Make sure to include units for time and calories, and do not include any other information or words such as "approximately" or "about".
        Here is the actual transcript:

        {transcript}

        Do not output anything else as this will be parsed as JSON.
    """.format(
        transcript=transcript
    )

    return chat_with_groq(prompt, "llama3-70b-8192", None)