Tyson Martin  
COM-391  
Prof. Estey  
Activity 2  
03/16/2025

Research Questions and Write-Up  
Folder Purposes

* node\_modules: Contains all third-party packages installed via npm.

* src: The source directory where all the main application code lives.

* src/app: Contains Angular components, services, and application logic.

* src/assets: Holds static files like images, icons, and fonts.

* src/environments: Stores environment-specific configuration files for development and production.

File Purposes

* angular.json: Angular CLI configuration file that defines how the project is built, including settings for file paths, styles, and scripts.

* package.json: Lists the project's metadata, dependencies, and scripts. This file is used by npm to manage project packages.

* tsconfig.json: Defines TypeScript compiler options, including file paths, strictness, and output settings.

Angular Page Generation Explanation  
The Angular application begins execution in main.ts, which bootstraps the root module AppModule. This module declares AppComponent as the root component. The app.component.ts file contains the logic and data used in the application, such as the title and message variables.  
The template file app.component.html defines how this data is displayed using Angular’s interpolation syntax (e.g., {{ title }} and {{ message }}). The app.component.css file applies component-specific styles. Angular renders this component inside the \<app-root\> tag defined in index.html. Together, these files dynamically generate the visible single-page application.  
