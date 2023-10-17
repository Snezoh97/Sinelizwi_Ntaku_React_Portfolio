# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

To run a React project using Vite in the command prompt (cmd), follow these steps:

Clone the Project: If you haven't already, clone the project repository from the source, using Git or by downloading the project ZIP file and extracting it to a directory of your choice.

Install Node.js: Ensure that you have Node.js and npm (Node Package Manager) installed on your system. You can download them from the official website: Node.js.

Navigate to the Project Directory: Open your command prompt (cmd) and navigate to the directory where you've cloned or extracted the project. You can use the cd command to change directories. For example:
- cd path/to/your/project-directory
Install Dependencies: In the project directory, use npm to install the project dependencies. This step is essential to download and install all the required packages for the project. Run the following command:
- npm install
Start the Development Server: Once the dependencies are installed, you can start the Vite development server. You can choose between using @vitejs/plugin-react with Babel or @vitejs/plugin-react-swc with SWC. To start with Babel, use the following command:
- npm run dev
  
Access Your App: Open a web browser and navigate to the local development URL provided by the Vite development server (e.g., http://localhost:5173). You should see your React application running. Any changes you make to your code will be automatically reflected with Hot Module Replacement (HMR).

Stop the Development Server: To stop the development server, you can usually press Ctrl + C in the command prompt where the server is running. Confirm the termination when prompted.
