# SpaceX Missions — COMP3133 Lab Test 2

An Angular web application that displays SpaceX launch mission data using the [SpaceX REST API (v3)](https://api.spacexdata.com/v3/launches). Users can browse all missions, filter by launch year or success status, and view detailed information for each mission including rocket details, launch site, video embeds, and image galleries.

## Features Implemented

- **Mission List** — Displays all SpaceX launches in a responsive card grid with mission patch thumbnails, mission name, launch year, rocket name, and a color-coded launch status badge (Success / Failed / Upcoming).
- **Filtering** — Filter missions by launch year (dropdown populated dynamically) and by launch status (Success / Failed / All). Filters can be cleared with a single button.
- **Mission Details** — Detailed view for each mission showing:
  - Large mission patch image
  - Launch info (date, site, flight number, status)
  - Rocket details (name and type)
  - Mission description
  - Launch failure details (when applicable)
  - External links (Article, Wikipedia, Video, Press Kit)
  - Embedded YouTube video of the launch
  - Flickr image gallery
- **Navigation** — Angular Material toolbar with app branding and a Missions nav button. Client-side routing between list and detail views.
- **Loading & Error States** — Loading spinners during API calls and user-friendly error messages on failure.
- **Responsive Design** — Card grid adapts to different screen sizes using CSS Grid.

## Screenshots

### Mission List
![Mission List](screenshots/mission-list.png)
*Home page showing all SpaceX missions in a card grid with mission patches, names, and status badges.*

### Filtered Results
![Filtered Results](screenshots/filtered-results.png)
*Missions filtered by launch year and/or success status using the dropdown filters.*

### Mission Details
![Mission Details](screenshots/mission-details.png)
*Detailed view of a single mission showing rocket info, description, links, YouTube embed, and image gallery.*

## Tech Stack

- **Angular 18** (Standalone components, Angular CLI v18.2.21)
- **Angular Material** (Indigo-Pink theme, Material cards, toolbar, select, buttons, progress spinner)
- **TypeScript**
- **SCSS**
- **RxJS** for reactive data flow
- **SpaceX REST API v3** (`https://api.spacexdata.com/v3/launches`)

## Instructions to Run the Project

### Prerequisites
- Node.js v18+ (tested with v20.15.1)
- npm v9+

### Setup & Run
```bash
# Clone the repository
git clone https://github.com/imlakshayd/Lab_Test_2a_COMP3133.git
cd Lab_Test_2a_COMP3133/spacex-missions

# Install dependencies
npm install

# Start the development server
npx ng serve
```

Open [http://localhost:4200/](http://localhost:4200/) in your browser.

### Production Build
```bash
npx ng build
```
The build output will be in `dist/browser/`.

## Project Structure

```
spacex-missions/
├── src/app/
│   ├── components/
│   │   ├── mission-list/       # Main list view with card grid
│   │   ├── mission-filter/     # Year and success filter controls
│   │   └── mission-details/    # Detailed single mission view
│   ├── models/
│   │   └── spacex-launch.model.ts  # TypeScript interfaces
│   ├── pipes/
│   │   └── safe-url.pipe.ts    # Sanitizer pipe for YouTube embeds
│   ├── services/
│   │   └── spacex-api.service.ts   # SpaceX API HTTP service
│   ├── app.component.*         # Root component with toolbar
│   ├── app.config.ts           # App configuration & providers
│   └── app.routes.ts           # Route definitions
└── vercel.json                 # SPA rewrite rules for deployment
```
