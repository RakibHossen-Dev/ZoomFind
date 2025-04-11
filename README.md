# Car Finder Web App || ZoomFind

Live:https://zoomfind.vercel.app/

A responsive Car Finder web application built with **React**, **TailwindCSS**, and **Context API**. The app allows users to search, filter, and view car details while managing their wishlist using **LocalStorage**.

## Features

- **Car Search:** Users can search cars by brand, price range, fuel type, and seating capacity.
- **Car Details:** Users can click on a car to view detailed information like images, specifications, and more.
- **Wishlist:** Users can add/remove cars from their wishlist, stored in LocalStorage for persistence across sessions.
- **Responsive Design:** Fully responsive and optimized for mobile and desktop.
- **Pagination:** Displays cars in a paginated list, showing 10 cars per page.
- **Dark Mode:** Toggle between light and dark modes for better user experience.
- **Sorting:** Cars can be sorted by price (low to high or high to low).
- **Live Search & Filter Updates:** Real-time filtering and search updates based on user input.

## Tech Stack

- **Frontend:** React, TailwindCSS
- **State Management:** Context API (for managing global state such as the wishlist)
- **Storage:** LocalStorage (for persisting wishlist items)
- **API Handling:** Custom mock API (or your chosen API for car data)
- **CSS Framework:** TailwindCSS
- **Other Libraries:** Axios (for API requests), React Router (for routing)

## Installation

### Prerequisites

Before starting, ensure that you have **Node.js** and **npm** installed on your system.

### Steps to Get Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/car-finder-app.git
   cd car-finder-app
   Install dependencies:
   ```

npm install

Run the development server:

npm start

Now, open your browser and go to http://localhost:3000 to view the app.
