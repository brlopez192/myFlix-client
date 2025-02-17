import React from 'react'; // Ensure React is imported for JSX
import { createRoot } from 'react-dom/client'; // Import ReactDOM for rendering
import { MainView } from './Components/MainView/main-view'; // Import your main view
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import './index.scss'; // Import the SCSS styles

// Main component (will eventually use all the others)
const MyFlixApplication = () => {
  return (
    <MainView />
  );
};

// Finds the root of your app
const container = document.querySelector("#root"); // Ensure this element exists in your HTML
const root = createRoot(container); // Create root to use in rendering

// Tells React to render your app in the root DOM element
root.render(<MyFlixApplication />);
