VocabBuilder Project README
General Information
Welcome to the VocabBuilder project! This application is designed to help users enhance their vocabulary. Below, you'll find an overview of the project structure, components, and key features.

Frontend Requirements
Responsive Design: Utilizing adaptive and flexible layouts for different devices.
Semantic HTML5: Adhering to HTML5 standards for semantic markup.
Font Integration: Using font-face to include custom fonts.
Optimized Graphics: Ensuring optimal sizes for vector and raster graphics.
Icon Usage: Implementing icon sprites for consistent visuals.
Favicon: Displaying the favicon for a polished user experience.

Backend Integration
Authentication: Handling user registration, login, and token management.
Private Routes: Redirecting authenticated users to a private Dictionary page.
Dictionary Page ("/dictionary"): A feature-rich page for managing and learning words.
Recommend Page ("/recommend"): Providing recommendations and allowing users to add words.

Components
Universal Components
WordsTable:

Utilizing React Table or similar libraries for efficient table implementation.
Displaying user-added words with progress details.
ActionsBtn: Opens a popup with options to edit or delete the word.

ProgressBar:

Visualizing learning progress with React Progress from MUI.

WordsPagination:

Implementing server-side pagination for efficient data handling.

Dashboard:
A universal component with search, filters, and statistics for word control.
Modal Components

AddWordModal:
Allows users to add a new word to their dictionary.

EditWordModal:
Enables users to edit existing words.

WellDoneModal:
Displays results and congratulates users after completing training.

Pages

Dictionary Page ("/dictionary"):
Incorporates the universal components mentioned above.
Allows users to manage and learn their vocabulary.

Recommend Page ("/recommend"):
Consists of the Dashboard, WordsTable, and WordsPagination components.
Provides recommendations for new words and displays words added by other users.

Training Page ("/training"):
Contains the ProgressBar and TrainingRoom components.
Guides users through word translation exercises.

Getting Started
Clone the repository.
Install dependencies: npm install or yarn install.
Start the development server: npm start or yarn start.

Additional Notes
Ensure the backend is set up according to the provided documentation.
Continuous integration and deployment strategies can be implemented based on project requirements.
Feel free to reach out for any further assistance or clarification. Happy coding!
