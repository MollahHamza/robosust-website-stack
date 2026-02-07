# RoboSUST Website

A full-stack website for RoboSUST - the robotics club of Shahjalal University of Science and Technology.

## Tech Stack

- **Frontend**: React 18 + Vite + React Router
- **Backend**: Flask + SQLAlchemy + SQLite
- **Styling**: Custom CSS (based on original RoboSUST design)

## Features

- **Home Page**: Hero banner, achievements, ongoing initiatives, workshops, alumni network
- **AGP Page**: Auto Grand Prix (placeholder for future content)
- **Projects**: Showcase of current and completed projects
- **Blog**: Blog posts with create/read functionality
- **Forum**: Community discussions with categories and replies
- **Admin Dashboard**: Full CRUD for all content types

## Setup Instructions

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Create a virtual environment:
   ```bash
   python -m venv venv
   ```

3. Activate the virtual environment:
   - Windows: `venv\Scripts\activate`
   - Linux/Mac: `source venv/bin/activate`

4. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

5. Run the Flask server:
   ```bash
   python app.py
   ```

The backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The frontend will run on `http://localhost:5173`

## Admin Access

- URL: `/admin`
- Default credentials:
  - Username: `admin`
  - Password: `robosust2024`

After logging in, click "Seed Sample Data" to populate the database with sample content.

## Project Structure

```
robosust-website/
├── backend/
│   ├── app.py           # Flask application with all routes
│   ├── models.py        # SQLAlchemy models
│   ├── config.py        # Configuration
│   └── requirements.txt # Python dependencies
│
├── frontend/
│   ├── src/
│   │   ├── components/  # Navbar, Footer, Preloader
│   │   ├── pages/       # All page components
│   │   │   └── admin/   # Admin dashboard pages
│   │   ├── api.js       # API client
│   │   ├── App.jsx      # Main app with routing
│   │   └── index.css    # All styles
│   └── public/
│       └── assets/      # Images and static files
│
└── README.md
```

## API Endpoints

### Authentication
- `POST /api/auth/login` - Admin login
- `POST /api/auth/logout` - Admin logout
- `GET /api/auth/check` - Check authentication status

### Content (all support GET, POST, PUT, DELETE)
- `/api/achievements`
- `/api/initiatives`
- `/api/workshops`
- `/api/alumni`
- `/api/projects`
- `/api/blog`
- `/api/forum/categories`
- `/api/forum/posts`

### Seed Data
- `POST /api/seed` - Populate database with sample data (requires auth)

## Color Scheme

Based on the original RoboSUST website:
- Primary Dark: `#161820`
- Accent: `#f9a826` (Gold/Orange)
- Grays: `#161616` to `#fafafa`

## License

This project is for RoboSUST, Shahjalal University of Science and Technology.
