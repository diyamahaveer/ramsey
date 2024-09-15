from dotenv import load_dotenv
from groq import Groq
from uuid import uuid4
load_dotenv()


# Initialize the Groq client
client = Groq()

def convertVoiceToTextAndInterpretCommand():
    print("HELLO")
    buffer = request.get_data()
    # write this to a file called audio.webm
    filename = f"audio{uuid4()}.webm"
    with open(filename, "wb") as f:
        f.write(buffer)
    
        # Open the audio file
    with open(filename, "rb") as file:
        # Create a transcription of the audio file
        transcription = client.audio.transcriptions.create(
        file=(filename, file.read()), # Required audio file
        model="distil-whisper-large-v3-en", # Required model to use for transcription
        response_format="json",  # Optional
        language="en",  # Optional
        )
        # Print the transcription text
        audioText = transcription.text
        print("Whisper:", audioText)

        answer = get_summarization( audioText)
        print("Answer: ", answer)
        
        # return answer as json
        return jsonify({'status': 'ok', 'response': answer})

def chat_with_groq(prompt, model, response_format):
  completion = client.chat.completions.create(
  model=model,
  messages=[
      {
          "role": "user",
          "content": prompt
      }
  ],
  response_format=response_format
  )

  return completion.choices[0].message.content

def get_summarization(user_question):
    prompt = '''
      Given this user's request, classify it as either PAUSE or PLAY or REWIND (seconds) or FORWARD (seconds) or NEITHER
    
      The format of the answer should be in a JSON object with the following structure:
        
        action: string,
        seconds: int (0 if not applicable)
        
        Here is the actual user text:

        {user_question}

        Do not output anything else as this will be parsed as JSON.

  '''.format(user_question = user_question)

    # Response format is set to 'None'
    return chat_with_groq(prompt,"llama3-70b-8192",None)