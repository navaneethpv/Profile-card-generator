# Profile Card Generator


This is a simple web application built with React and Tailwind CSS that allows you to generate a profile card dynamically. You can enter your details, upload a profile picture, and see the card update in real-time.

## Features

-   **Dynamic Card Generation**: Instantly see your profile card updated as you type.
-   **Live Data Input**: A clean form to input your name, role, and title.
-   **Image Upload**: Upload and preview your profile picture directly on the card.
-   **Modern UI**: Styled with Tailwind CSS for a clean and responsive layout.

## Tech Stack

-   **Framework**: [React](https://reactjs.org/)
-   **Build Tool**: [Vite](https://vitejs.dev/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Icons**: [React Icons](https://react-icons.github.io/react-icons/)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need to have Node.js and npm installed on your machine.
-   [Node.js](https://nodejs.org/en/download/)

### Installation

1.  Clone the repository:
    ```sh
    git clone https://github.com/navaneethpv/profile-card-generator.git
    ```
2.  Navigate to the project directory:
    ```sh
    cd profile-card-generator
    ```
3.  Install NPM packages:
    ```sh
    npm install
    ```
4.  Run the development server:
    ```sh
    npm run dev
    ```
    The application will be available at `http://localhost:5173` (or the next available port).

## Available Scripts

In the project directory, you can run the following commands:

-   `npm run dev`: Runs the app in development mode with hot-reloading.
-   `npm run build`: Builds the app for production to the `dist` folder.
-   `npm run lint`: Lints the project files using ESLint.
-   `npm run preview`: Serves the production build locally to preview it.

## Project Structure

The main logic is split into several components:

-   `src/App.jsx`: The main component that manages the application's state and renders the form and card components.
-   `src/components/Forms.jsx`: Contains the form for user input. It handles state changes for form fields and the image upload.
-   `src/components/Cards.jsx`: The component responsible for displaying the generated profile card with the user's data.