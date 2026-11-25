**English** · [Türkçe](README.tr.md)

<div align="center">

# BeeBuCoffee

**A marketing and catalog site for a fictional coffee brand, written with React and TypeScript.**

![React](https://img.shields.io/badge/React-19-222?logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-2ea44f)

[Highlights](#highlights) · [Screenshots](#screenshots) · [Setup](#setup-and-running) · [Pages](#pages) · [Folder structure](#folder-structure)

![BeeBuCoffee home page](public/screenshots/home.png)

</div>

BeeBuCoffee is a single-page front end application that presents the website of a boutique coffee brand. A visitor can browse the product catalog, the cafe menu, blog posts, branches, campaigns and events. It is written with React 19, TypeScript, Vite 6 and Tailwind CSS 4. The content comes from local TypeScript data files, and there is no back end.

The user interface is in Turkish.

BeeBuCoffee is a fictional brand. The products, prices, branches and contact details are sample data.

Live version: https://coffee-landing-ss46.vercel.app/

## Highlights

- **Home page:** a hero section, statistics counters that count up when they become visible, the brand history and the best-loved products.
- **Shop:** a catalog of 8 products, with search by name and description and filters for coffee, thermoses and accessories.
- **Product detail:** a page with the price and description for each product, with a list of four suggested products below it.
- **Menu:** products are listed under the headings hot coffees, cold coffees and bakery items.
- **Blog:** three posts. Each post opens at its own address (`/blog/:slug`), and the other posts are suggested at the end.
- **Branches:** a list of branches in 7 cities. The selected branch is shown on a map with a Google Maps iframe embed.
- **Campaigns and events:** three campaign cards, and a list and a detail page for three events (date, place, capacity, fee).
- **Contact:** phone, email and social media cards, and a map of the head office.
- **Navigation:** a fixed top menu whose background changes on scroll, the "Keşfet" (Explore) dropdown menu and a mobile menu for narrow screens.
- **Animation:** page entry, scroll and filter transition animations with Motion.
- **Theme:** indigo, gold and cream colors defined in the Tailwind CSS 4 `@theme` block, and the Outfit and Playfair Display fonts.

## Screenshots

<table>
  <tr>
    <td width="50%"><img src="public/screenshots/shop.png" alt="Shop page"></td>
    <td width="50%"><img src="public/screenshots/blog.png" alt="Blog page"></td>
  </tr>
  <tr>
    <td align="center">Shop: search box, category filters and product cards</td>
    <td align="center">Blog: post cards</td>
  </tr>
</table>

The large image at the top: the hero section of the home page.

## Requirements

- Node.js 20.19 or later, or 22.12 or later, together with npm (according to the `engines` field of the `@vitejs/plugin-react` package in `package-lock.json`).
- An internet connection: product images are loaded from Unsplash, fonts from Google Fonts and the map from Google Maps.

No `.env` file is needed. The code under `src/` does not read any environment variable.

## Setup and running

```bash
git clone https://github.com/ismailarat56/coffee-landing.git
cd coffee-landing
npm install
npm run dev
```

The development server opens at `http://localhost:3000`.

Other commands:

| Command | What it does |
|---|---|
| `npm run build` | writes the production build to the `dist/` folder |
| `npm run preview` | serves the built version locally |
| `npm run lint` | runs the TypeScript type check (`tsc --noEmit`) |
| `npm run clean` | deletes the `dist` folder and the `server.js` file if it exists (uses `rm -rf`) |

## Pages

The routes are defined in `src/App.tsx` with React Router DOM 7.

| Address | Page |
|---|---|
| `/` | Home page |
| `/shop` | Shop: search and category filter |
| `/product/:id` | Product detail |
| `/menu` | Cafe menu |
| `/blog` | Blog posts |
| `/blog/:slug` | Blog post |
| `/explore` | Branches and map |
| `/campaigns` | Campaigns |
| `/events` | Events |
| `/event/:id` | Event detail |
| `/contact` | Contact |
| `/register` | Customer registration form |

## Content data

The content on the site is read from arrays embedded in the code:

- `src/data/mockData.ts`: products (`PRODUCTS`), branches (`BRANCHES`) and events (`EVENTS`).
- `src/data/blogData.ts`: blog posts (`BLOG_POSTS`).
- `src/pages/CampaignsPage.tsx`: campaigns, inside the page file.

To add a new product or branch, it is enough to add an item to the related array. The product and branch types are in `src/types.ts`.

## Folder structure

```
index.html               Vite entry page
vite.config.ts           Vite settings (React and Tailwind plugins)
public/screenshots/      the screenshots in this README
src/
  main.tsx               entry point of the application
  App.tsx                route definitions
  index.css              Tailwind theme: colors and fonts
  types.ts               Product and Branch types
  lib/utils.ts           cn() class merging helper
  data/                  product, branch, event and blog data
  components/layout/     Header and Footer
  components/maps/       BranchGoogleMap (branch map)
  components/ui/         ProductCard
  pages/                 12 page components
```

## Known gaps

- There is no cart, payment or order flow. The shop works only as a catalog.
- The registration form (`/register`) does not send data anywhere. The newsletter form on the campaigns page has no input field.
- The social media, privacy policy and KVKK (the Turkish personal data protection law) links are placeholders (`href="#"`).
- The variables in the `.env.example` file and the `@google/genai`, `express` and `dotenv` dependencies are not used in the code under `src/`.
- There are no automated tests. The only check is the type check run with `npm run lint`.

## License

The code is released under the [MIT license](LICENSE).

The file `src/App.tsx` comes from the AI Studio template and carries the Apache-2.0 notice in its own header.
