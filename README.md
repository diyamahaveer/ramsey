![image](https://github.com/user-attachments/assets/b805eba3-ef4d-455c-a4b9-3ca99fa5a5d4)
![image](https://github.com/user-attachments/assets/e5848a2c-953e-4804-9380-a5dc017201c5)
![image](https://github.com/user-attachments/assets/5306a00c-5f07-47cc-a6b0-a80d8da34a79)


<h2>Inspiration</h2>
For many college students, university life often means living alone and cooking for themselves for the first time. We've all experienced those chaotic moments in the kitchen—burnt meals, missed steps, or fumbling with our phones to follow a recipe video. The learning curve is real, and the frustration is common.

That's why we created Ramsay, an AI cooking assistant designed to make cooking easier and more enjoyable. With Ramsay, users can play, pause, or navigate YouTube cooking videos using voice commands, eliminating the need to rush back and forth between the kitchen and their devices. This hands-free experience allows users to cook along seamlessly with the video, making it feel as if they're working with a real assistant who’s there to guide them.

Additionally, Ramsay intelligently analyzes each video’s cooking time, ingredients, and calorie count, helping students make informed decisions on which recipe fits their needs, whether it’s for a quick meal or a more balanced option. By streamlining the cooking process and offering personalized insights, Ramsay takes the stress out of cooking, allowing students to enjoy the experience with confidence.



<h2>What it does</h2>

**Voice-Controlled Video Navigation**: Ramsay allows users to control YouTube cooking videos with simple voice commands. You can play, pause, rewind, or skip forward in a recipe video without having to touch your phone or computer—perfect for when your hands are busy or messy in the kitchen.


**Smart Recipe Analysis**: Ramsay analyzes each recipe video for important details like cooking time, ingredient lists, and calorie counts. This helps users quickly find meals that suit their time constraints, dietary preferences, and nutritional needs.


**Personalized Cooking Assistance**: By combining voice control with real-time video navigation, Ramsay creates an interactive and personalized cooking experience. It feels like having a real assistant by your side, guiding you through every step of the recipe, so you never miss an important instruction.



<h2>How we built it</h2>

**Frontend**

Our journey with the frontend began with designing in Figma, where we explored various design resources from Dribbble and Figma to better understand industry standards and our target audience. We carefully selected our color palettes and decided on our tech stack, opting for Node.js and TypeScript. This choice enabled us to customize, animate, and structure our application effectively, ensuring a cohesive and readable design.

Key features of our frontend include:

Opinionated Recipe Retriever: Delivers the most delicious recipes tailored to user preferences. Ramsay: Our voice-activated assistant that controls media features and interacts directly with users during their cooking sessions. Situation-Dependent Timers: Allows users to control the pacing of their cooking session, providing precise timing for optimal culinary results. We prioritized accessibility, aiming to create a website that is inclusive and easy to use for everyone, regardless of their situation or location.


**Backend**

We developed three primary endpoints to support our frontend:

GET api/search/?query=query: Handles searching, analyzing, and presenting YouTube videos based on user queries. This endpoint uses external APIs to retrieve related search results, fetch transcript objects with timestamps, and leverage Groq’s API to engineer and analyze transcripts, extracting key details like ingredients, cooking time, and calorie count.

GET api/video?url=url: Retrieves detailed information about a YouTube video through its URL. This endpoint analyzes the video’s content to suggest when to set a timer, and communicates this information to the frontend to prompt users to set timers at specific points in the video.

POST api/audio/: Accepts audio byte streams and converts them into .wav files. Groq is then used to transcribe the audio into text, followed by another Groq request to intelligently select the best recipe option for the user.

These backend services work seamlessly with the frontend to provide a smooth, interactive cooking experience.


**Check out more at:**
https://devpost.com/software/ramsey
