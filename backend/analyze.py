import os
from dotenv import load_dotenv
from groq import Groq

load_dotenv()

client = Groq()


def analyze(transcript):
    return get_summarization(transcript)


def chat_with_groq(prompt, model, response_format):
    completion = client.chat.completions.create(
        model=model,
        messages=[{"role": "user", "content": prompt}],
        response_format=response_format,
    )
    return completion.choices[0].message.content


def get_summarization(transcript):
    prompt = """
      Given this video transcript, figure out the ingredients, approximate time to make the recipe, and the approximate calories.
    
      The format of the answer should be in a JSON object with the following structure:
        
        ingredients: list of strings (no more than 10 strings),
        time: in minutes as string 
        calories: kcal as string
        
        Make sure to include units for time and calories
        Here is the actual transcript:

        {transcript}

        Do not output anything else as this will be parsed as JSON.
    """.format(
        transcript=transcript
    )

    return chat_with_groq(prompt, "llama3-70b-8192", None)
