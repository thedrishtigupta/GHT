# Gayatri Home Tutors

A full-stack tutor discovery and booking platform for Delhi NCR, connecting students with qualified home tutors.

> Migrated from a vanilla HTML/CSS/JS implementation. Original repo: [[Gayatri-Home-Tutor-Vanilla](https://github.com/thedrishtigupta/Gayatri-Home-Tutor)]

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, Vite, React Router v6 |
| Styling | CSS3 with custom responsive breakpoints |
| Backend | Node.js, Express.js |
| Database | MySQL |

---

## Project Structure

```
gayatri-home-tutors/
│
├── frontend/                        # React frontend (Vite)
│   ├── public/
│   │   └── assets/
│   │       └── images/              # ← place all images here
│   │
│   ├── src/
│   │   ├── App.jsx                  # Router setup — all 6 routes
│   │   ├── main.jsx                 # React entry point
│   │   ├── index.css                # Imports style.css + responsive.css
│   │   ├── style.css                # Main stylesheet (CSS variables, components)
│   │   ├── responsive.css           # Responsive breakpoints (mobile / tablet / desktop)
│   │   │
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   │   ├── Header.jsx       # Navbar with hamburger menu
│   │   │   │   ├── Footer.jsx       # Site footer
│   │   │   │   ├── PagesHero.jsx    # Reusable page hero banner
│   │   │   │   └── ScrollToTop.jsx  # Resets scroll on route change
│   │   │   │
│   │   │   ├── sections/
│   │   │   │   ├── HeroSection.jsx       # Home hero with image slider
│   │   │   │   ├── AboutSections.jsx     # Mission, values, testimonials
│   │   │   │   ├── ServicesSections.jsx  # Subjects, areas, how it works
│   │   │   │   ├── ContactSections.jsx   # Contact info grid
│   │   │   │   └── OurTutorsSection.jsx  # Tutors grid
│   │   │   │
│   │   │   └── forms/
│   │   │       ├── BookDemoForm.jsx      # Controlled demo booking form
│   │   │       └── BecomeTutorForm.jsx   # Controlled tutor registration form
│   │   │
│   │   └── pages/
│   │       ├── Home.jsx             # Landing page
│   │       ├── About.jsx            # About us page
│   │       ├── Services.jsx         # Services page
│   │       ├── Contact.jsx          # Contact page
│   │       ├── BecomeTutor.jsx      # Tutor registration page
│   │       └── Terms.jsx            # Terms & conditions (accordion)
│   │
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
├── backend/                         # Express.js API
│   ├── config/
│   │   └── db.js                    # MySQL connection (mysql2)
│   │
│   ├── controllers/
│   │   ├── demoController.js        # Book demo form logic
│   │   └── tutorController.js       # Tutor registration logic
│   │
│   ├── routes/
│   │   ├── demoRoutes.js            # POST /api/demo
│   │   └── tutorRoutes.js           # POST /api/tutors
│   │
│   ├── models/                      # Query functions / DB models
│   │   ├── Demo.js
│   │   └── Tutor.js
│   │
│   ├── middleware/
│   │   └── errorHandler.js          # Global error handler
│   │
│   ├── .env                         # DB credentials — never commit this
│   ├── app.js                       # Express app setup
│   └── server.js                    # Entry point
│
└── database/
    ├── schema.sql                   # Table definitions
    └── seeds.sql                    # Sample data (optional)
```

---

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Runs on `http://localhost:5173` by default.

---

## Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in `/backend`:

```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=gayatri_home_tutors
```

Set up the database:

```bash
mysql -u root -p < database/schema.sql
```

Start the server:

```bash
node server.js
# or with auto-reload:
npx nodemon server.js
```

Runs on `http://localhost:5000` by default.

---

## API Endpoints (Planned)

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/demo` | Submit book-a-demo request |
| `POST` | `/api/tutors` | Submit tutor registration |
| `GET` | `/api/tutors` | Fetch all tutors (admin) |
| `GET` | `/api/tutors/:id` | Fetch single tutor |
| `DELETE` | `/api/tutors/:id` | Remove tutor (admin) |

---

## Connecting Forms to the Backend

Both forms have a `// TODO: wire up to backend API` comment in their `handleSubmit`. Replace it with:

```js
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await fetch("http://localhost:5000/api/demo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) alert("Submitted successfully!");
  } catch (err) {
    console.error("Submission error:", err);
  }
};
```

---

## Git Setup

This repo excludes `node_modules/`, `dist/`, and `.env` via `.gitignore`.

```bash
# First time setup
git init
git add .
git commit -m "initial commit"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

After cloning on a new machine:

```bash
cd frontend && npm install
cd ../backend && npm install
```

---

## Responsive Breakpoints

| Breakpoint | Width | Changes |
|---|---|---|
| Mobile | `< 640px` | Hamburger menu, stacked layouts, scaled fonts |
| Tablet | `640px – 1024px` | 2-column grids, condensed navbar |
| Large desktop | `> 1280px` | Content capped at 1200px max-width |

---

## Status

- [x] Frontend — complete, fully responsive
- [ ] Backend — in progress
- [ ] Database integration — planned
- [ ] Admin panel — planned