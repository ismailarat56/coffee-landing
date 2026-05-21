# BeeBuCoffee - Artisan Coffee Landing Page

BeeBuCoffee is a modern, responsive coffee brand and commerce prototype built around an artisan "farm to cup" experience.

---

## About the Project

This project creates a polished digital presence for a boutique coffee brand. Visitors can explore the product catalog, browse the cafe menu, read coffee culture articles, discover branches on a map, follow campaigns and events, and move through detail pages for products, posts, and event registrations.

## Tech Stack

The project is built with modern web technologies and libraries:

*   **Prerequisites:** Node.js
*   **Frontend:** React 19 + TypeScript
*   **Build Tool:** Vite
*   **Styling:** Tailwind CSS 4
*   **Routing:** React Router DOM 7
*   **Animations:** Motion
*   **Icons:** Lucide React
*   **Utilities:** clsx + tailwind-merge
*   **Maps:** Google Maps iframe embed

## Installation

Follow these steps to run the project locally:

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/ismailarat56/coffee-landing.git
    cd coffee-landing
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

## Running the Project

Start the development server:

```bash
npm run dev
```

The application runs at `http://localhost:3000` by default.

Create a production build:

```bash
npm run build
```

Run the TypeScript check:

```bash
npm run lint
```

## Key Features

*   **Responsive Brand Experience:** A premium landing page experience for desktop and mobile visitors.
*   **Product Catalog:** Coffee, bakery, thermos, and accessory products with pricing, category filters, best-seller badges, and detail routes.
*   **Digital Menu:** A dedicated menu surface for cafe drinks and bakery items.
*   **Blog Platform:** Coffee culture articles with SEO-friendly slug detail pages.
*   **Branch Discovery:** Branch locations supported by Google Maps iframe embeds.
*   **Campaigns and Events:** Campaign listings, event cards, event detail pages, and registration flow.
*   **Contact Flow:** Contact information, branch guidance, and social channel entry points.

## Pages and Modules

*   **Home (`/`):** Introduces the BeeBuCoffee brand, hero message, best sellers, story, and primary calls to action.
*   **Shop (`/shop`):** Lists products with search and category filtering.
*   **Product Detail (`/product/:id`):** Shows product-specific details for catalog items.
*   **Menu (`/menu`):** Presents the cafe menu for drinks and food items.
*   **Blog (`/blog`):** Lists editorial coffee articles.
*   **Blog Detail (`/blog/:slug`):** Displays the selected article content.
*   **Explore (`/explore`):** Presents branch discovery and location content.
*   **Campaigns (`/campaigns`):** Shows active promotional campaigns.
*   **Events (`/events`):** Lists workshops, concerts, and coffee education events.
*   **Event Detail (`/event/:id`):** Shows event information and registration context.
*   **Contact (`/contact`):** Provides communication channels and contact details.
*   **Register (`/register`):** Represents the user registration flow.

## Screenshots

| Home | Shop | Blog |
| :--- | :--- | :--- |
| ![Home](./public/screenshots/home.png) | ![Shop](./public/screenshots/shop.png) | ![Blog](./public/screenshots/blog.png) |

## Vercel Deployment

*   **Live Demo:** Vercel link will be added

## GitHub Repository

*   **Repo URL:** [https://github.com/ismailarat56/coffee-landing](https://github.com/ismailarat56/coffee-landing)
*   **License:** Apache-2.0

## Developer Notes

*   The project uses **Tailwind CSS 4** for the brand palette, spacing, and reusable utility styling.
*   Routing is handled with **React Router DOM 7** and includes list/detail flows for products, posts, and events.
*   Product, branch, blog, campaign, and event content is served from local TypeScript data files.
*   Screenshot assets are stored in `public/screenshots` so GitHub can render them directly in this README.

---

*BeeBuCoffee - An artisan coffee experience in every cup.*
