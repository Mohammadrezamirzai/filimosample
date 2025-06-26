# Filimo Persian Streaming Service (React/Vite)

فیلیمو (Filimo) is a modern, RTL-friendly Persian streaming service web app built with React, Vite, and Tailwind CSS. It features a beautiful, responsive UI, animated backgrounds, and a clean, maintainable codebase. The project is designed for a premium user experience, with RTL support, Persian text, and modern design patterns throughout.

## Features

- **Modern RTL UI**: Fully right-to-left layout, Persian text, and custom Vazirmatn font.
- **Responsive Design**: Mobile-first, with a hamburger menu, responsive buttons, and adaptive layouts.
- **Animated Hero Section**: Smooth background transitions, animated gradients, and engaging CTAs.
- **Authentication**: Signup and Login forms with robust validation and clean UX.
- **Subscription Panel**: Interactive, modern subscription plan selector with summary and highlight for popular plans.
- **Info Sections**: Glassmorphism, SVG icons, and device compatibility highlights.
- **Cinema & Kids Sections**: Modern, playful layouts for cinema and kids content.
- **FAQ Accordion**: Modern, animated accordion for common questions.
- **Comment Carousel**: Swiper-based, animated user feedback section.
- **Footer**: Dark, informative, and social-media-rich footer.
- **SVG & Asset Organization**: All SVGs and images are organized for clean imports and easy maintenance.
- **Code Cleanliness**: Validation and data logic are extracted to `src/utils/validation` and `src/data` for maintainability.

## Tech Stack

- **React 19**
- **Vite**
- **Tailwind CSS 4**
- **Swiper.js** (for carousels)
- **Vazirmatn** (Persian font)
- **ESLint** (with React hooks and refresh plugins)

## Folder Structure

```
filimosample/
├── public/
│   └── svg/           # All SVG icons for cleaner imports
├── src/
│   ├── assets/
│   │   └── img/       # All image assets (backgrounds, logos, etc.)
│   ├── component/     # All React components (Navbar, Footer, Info, etc.)
│   ├── data/          # Static data (e.g., subscription plans)
│   ├── utils/
│   │   └── validation/ # Form validation logic
│   ├── index.css      # Tailwind and custom styles
│   └── main.jsx       # App entry point
├── index.html         # Main HTML file
├── package.json       # Project metadata and dependencies
└── README.md          # This file
```

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone <repo-url>
   cd filimosample
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   ```
4. **Open in your browser:**
   Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

## Customization & Development

- **RTL & Persian Support:** All layouts, text, and components are RTL and Persian-friendly by default.
- **SVGs:** Place new SVGs in `public/svg` and reference them with `<img src="/svg/your-icon.svg" />`.
- **Images:** Place new images in `src/assets/img` and import as needed.
- **Validation:** Add or update validation logic in `src/utils/validation`.
- **Data:** Add or update static data in `src/data`.

## Credits

- UI/UX, code, and Persian content by Mohammadreza Mirzai
- [Vazirmatn Font](https://github.com/rastikerdar/vazirmatn)
- [Swiper.js](https://swiperjs.com/)
- [Tailwind CSS](https://tailwindcss.com/)

---

For any questions or contributions, feel free to open an issue or pull request!
