# SpotifyV2

<!-- Add screenshots of the application here -->
<img src="https://imgur.com/oulPGq5.png" alt="Desktop Screenshot" width="500"> <img src="https://imgur.com/ogwKVYP.png" alt="Mobile Screenshot" width="300">


## TECH STACK

The frontend of this application was built using NEXT.js, a powerful framework that provides server-side rendering, resulting in improved performance and search engine optimization.

Tailwind CSS was chosen as the CSS framework for this project because of its utility-first approach, which makes it easy to rapidly prototype and iterate on designs without writing custom CSS. With Tailwind, we were able to create a consistent and responsive design system by simply composing pre-defined CSS classes together, saving us a lot of time and effort in the development process. Additionally, Tailwind's flexibility allowed us to easily customize our styles to match the specific needs of the project, making it a great fit for our requirements.

To manage the application's state in a scalable and efficient manner, RecoilJS, a lightweight and user-friendly state management library that seamlessly integrates with React components, was employed.

Please note that the player might not work if you're using a free account, spotify terms of use prohibits the use of player of free users.

## Getting Started

To get started with the application, follow these steps:

1. Clone the repository:
git clone https://github.com/your-username/spotifyv2.git


2. Install the dependencies:
cd spotifyv2
npm install


3. Go to the Spotify Developers website: https://developer.spotify.com/

4. Click on the "Dashboard" button in the top right corner of the page.

If you don't already have a Spotify account, create one by clicking on the "Sign Up" button and following the instructions.

5. Once you have logged in, click on the "Create a Client ID" button.

6. Fill in the required information, such as the name of your app and its description.

7. Choose the type of application you are building. For example, if you are building a web application, choose "Web".

8. Add the website URL where your application will be hosted. This is usually http://localhost:3000 for development purposes.

9.Click on the "Create" button.

10.You will now see your client ID and client secret. Copy them and paste them into your .env.local file, which you created in the previous step.

11. Save the .env.local file and start the development server by running the command npm run dev.

## Contributing

Contributions are welcome to the project!

## License

This project is licensed under the MIT License.
