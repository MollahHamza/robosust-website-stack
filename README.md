# RoboSUST Website - React Version

A modern React conversion of the RoboSUST static website, built with Vite and React Router.

## 🚀 Quick Start

### Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/       # Reusable components
│   ├── Navbar.jsx   # Navigation bar
│   ├── Footer.jsx   # Footer section
│   └── Preloader.jsx # Loading animation
├── pages/           # Page components
│   ├── Home.jsx     # Homepage
│   ├── Projects.jsx # Projects showcase
│   ├── About.jsx    # About page
│   ├── Agp.jsx      # AGP competition
│   └── Contact.jsx  # Contact page
├── App.jsx          # Main app with routing
├── main.jsx         # Entry point
└── index.css        # Global styles
```

## 🔗 Routes

- `/` - Home
- `/agp` - Auto Grand Prix
- `/projects` - Projects
- `/about` - About RoboSUST
- `/contact` - Contact Us

## 🛠️ Technologies

- **React 18** - UI library
- **Vite** - Build tool
- **React Router 6** - Client-side routing
- **Bootstrap 5** - CSS framework
- **jQuery** - For legacy plugins
- **Flexslider** - Image slider
- **GSAP** - Animations

## 📦 Dependencies

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.20.0"
}
```

## 🎨 Design

This React version preserves the exact visual design of the original static website. All 262 asset files (images, CSS, JavaScript libraries) have been migrated to maintain visual consistency.

## 📝 Notes

- This is a **frontend-only** application
- Backend integration (Node.js + Express + MongoDB) can be added later
- Contact forms are non-functional until backend is connected
- All navigation uses React Router for seamless client-side routing

## 🔮 Future Enhancements

- Backend API integration
- MongoDB database connection
- User authentication for admin panel
- Functional contact form
- Content management system

## 📄 License

MIT

## 👥 About RoboSUST

RoboSUST is a robotics-based organization of Shahjalal University of Science and Technology (SUST) aimed at creating an open platform for students from all departments who wish to engage with robotics.

---

**Development Server**: `npm run dev` → http://localhost:5173
