# AI Safety Incident Dashboard

## Project Description

The **AI Safety Incident Dashboard** is a web application designed to manage and track AI safety incidents. Users can report new incidents, browse existing incidents, view analytics, and manage data efficiently.  
It is built using **React.js** for the frontend and styled with **Tailwind CSS**.

---

## Technology Stack

- **Frontend**: React.js
- **Styling**: Tailwind CSS
- **Routing**: React Router
- **Icons**: Lucide React
- **Charts**: Recharts
- **Search**: Fuse.js (for fuzzy search functionality)

---

## Installation and Setup Instructions

Follow these steps to set up the project on your local machine:

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/ai-safety-dashboard.git

```

### 2. Navigate to the Project Directory

```bash
 cd incident-dashboard  

```

### 3. Install the Dependencies


```bash
npm install
```

### 4. Run the Development Server


```bash
npm start 

```

The app will run locally at:

http://localhost:3000
Any changes you make will automatically reload in the browser.

Key Features
Incident Reporting: Easily report AI safety incidents with details.

Incident Dashboard: View, filter, and manage incidents.

Dark Mode: Toggle between light and dark themes.

Dynamic Navigation: Sidebar navigation updates based on the page.

Fuzzy Search: Quickly search incidents with typo-tolerance.

Custom Tags & Filtering: Organize incidents using custom tags.

Analytics: Visualize incident data using charts and graphs.


Design Decisions and Challenges
Design Simplicity: Chose Tailwind CSS for rapid prototyping and maintaining a clean, minimal UI.

Dynamic Routing: Used React Router to enable page-based navigation (Dashboard vs Add Incident).

Search Optimization: Integrated Fuse.js to allow fuzzy search for a better user experience without requiring exact matches.

State Management: Managed local state with React's built-in hooks to keep the project lightweight (avoided Redux unless scaling is needed).

Responsive Layout: Designed mobile-friendly layouts using Tailwind’s responsive utilities.

Challenge: Integrating real-time search highlighting and advanced tag-based filtering required careful optimization to avoid UI lag with larger datasets.