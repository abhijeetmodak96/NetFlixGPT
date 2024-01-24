# Netflix Clone - Social Networking Site

# Tech Stack:

* Create React App
* Tailwind CSS
* Firebase
* Redux Store with userSlice and movieSlice
* Integration with TMDB API
* Responsive Design with Tailwind CSS

# Project Phases:

1. Setup and Configuration:

- Created React App with Tailwind CSS.
- Implemented routing and configured the header.
- Developed login and signup forms with form validation using the useRef hook.
- Setup Firebase for user authentication.
- Deployed the app to production.

2. User Account and Authentication:

- Implemented signup functionality and user account creation.
- Integrated Sign In API for user authentication.
- Created a Redux Store with userSlice for state management.
- Implemented Sign Out and Update Profile features.
- Resolved bugs related to user signup data and profile picture updates.
- Implemented redirects based on user authentication status.

3. Movies and TMDB Integration:

- Registered TMDB API, obtained an access token, and fetched data from the Now Playing movies list API.
- Created custom hooks for fetching movie data and trailers.
- Developed the main container and secondary components for movie browsing.
- Embedded YouTube videos with autoplay and mute functionality.
- Utilized Tailwind CSS to enhance the visual appeal of the main container.
- Built movie lists, cards, and added TMDB image CDN URL for images.

4. Advanced Features for Optimal Performance:

- Leveraged Redux for efficient data caching, optimizing data management within the application.
- Implemented memoization techniques to minimize API calls, reducing latency and improving overall performance.
- Incorporated a Simmer effect for a smoother user experience, enhancing the user interface and interaction.
  
5. Responsive Design:

- Made the site responsive using Tailwind CSS to ensure a seamless experience across devices.

# Key Features:

- Login and Sign Up functionality with form validation.
- Browse page with header, main movie, trailer background, title, and description.
- Movie suggestions and lists.
- Advanced features for optimal performance, including Redux data caching and memoization.
- Responsive design for a seamless user experience.

# On-hold Plan:
- GPT integration