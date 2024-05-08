# Contact Management App with Charts and Maps

This project is a web application that allows users to manage contacts and view COVID-19 data using charts and maps. The application uses modern technologies such as ReactJS, TypeScript, TailwindCSS, React Router v6, and React Query for a smooth and responsive user experience.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [APIs](#apis)
- [License](#license)
- [Contact](#contact)

## Overview

The app consists of two main components:

1. **Contacts Management:** 
    - A form to add new contacts.
    - A list of all added contacts, with options to view, edit, and delete individual contacts.
    - Uses Redux to manage the contact data.

2. **Charts and Maps Dashboard:**
    - A line graph showing the fluctuations in COVID-19 cases.
    - A map with markers indicating country-specific COVID-19 data (active, recovered cases, and deaths).

The app is built to be responsive and works seamlessly across various devices.

## Features

- **Contact Management:**
    - Add, view, edit, and delete contacts.
    - Stored data using Redux.

- **Charts and Maps:**
    - Line graph showing COVID-19 case fluctuations.
    - Interactive map displaying COVID-19 data per country.

- **Technology Stack:**
    - ReactJS, TypeScript, TailwindCSS.
    - React Router v6 for routing.
    - React Query (Tanstack Query) for API handling.
    - Redux for state management.

## Installation

To run the app locally, follow these instructions:

1. **Clone the repository:**
    ```shell
    git clone [(https://github.com/Vajja-Premsai/React_Contact_Management_App)]
    ```

2. **Navigate to the project directory:**
    ```shell
    cd your-repo
    ```

3. **Install dependencies:**
    ```shell
    npm install
    ```

4. **Start the app:**
    ```shell
    npm start
    ```

The app will be available at `http://localhost:3000`.

## Usage

- **Contacts Page:**
    - Use the form to add new contacts.
    - View the list of contacts, edit, or delete them.

- **Charts and Maps Page:**
    - View the line graph for COVID-19 case fluctuations.
    - Explore the map for country-specific data.

## APIs

- World Wide Data of Cases: [https://disease.sh/v3/covid-19/all](https://disease.sh/v3/covid-19/all)
- Country-Specific Data of Cases: [https://disease.sh/v3/covid-19/countries](https://disease.sh/v3/covid-19/countries)
- Graph Data for Cases with Date: [https://disease.sh/v3/covid-19/historical/all?lastdays=all](https://disease.sh/v3/covid-19/historical/all?lastdays=all)

## License

Specify the license under which the project is available (e.g., MIT, GPL, etc.).

## Contact

For any questions or feedback, you can reach out to the project maintainers:

- Email: [your-email@example.com](mailto:your-email@example.com)
- GitHub: [your-username](https://github.com/your-username)

Thank you for checking out the project! Let us know if you have any issues or questions.

