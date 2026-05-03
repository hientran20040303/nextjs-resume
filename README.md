# Modern Professional Resume | Built with Next.js & Tailwind CSS

## 📌 Project Overview
A high-performance, responsive resume web application built using the **Next.js App Router** framework. This project involved migrating a traditional HTML/CSS resume into a modern React-based environment, leveraging **Tailwind CSS** for a utility-first styling approach. The goal was to create a clean, accessible, and professional digital presence.

## 🚀 Technologies Used
*   **Framework:** Next.js 14/15 (App Router)
*   **Library:** React (JSX)
*   **Styling:** Tailwind CSS (Utility-first framework)
*   **Deployment:** Vercel / GitHub Pages
*   **Icons/Fonts:** Standard semantic HTML typography

## ✨ Key Features Implemented
- [x] **Semantic HTML:** Utilized `<header>`, `<main>`, `<section>`, and `<footer>` for SEO and screen-reader accessibility.
- [x] **Responsive Design:** Optimized for desktop and mobile viewing using Tailwind's layout utilities.
- [x] **Modern Component Logic:** Structured content within a React functional component for better maintainability.
- [x] **Zero Custom CSS:** 100% of the styling is handled via Tailwind utility classes, ensuring a lightweight and consistent design system.

## 🏃 How to Run Locally
To get this project running on your local machine:

**Clone the repository:**
```bash
git clone https://github.com/hientran20040303/nextjs-portfolio

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

## Features implemented

### Resume Content in src/app/page.js

- [x] All resume sections are written as JSX inside src/app/page.js.
- [x] Content must be your real information — no Lorem Ipsum or placeholder text.
- [x] Use semantic HTML elements (`<header>`, `<main>`, `<section>`, `<footer>`, etc.).

### Styling with Tailwind CSS

- [x] All styling must be done with Tailwind CSS utility classes applied via className.
- [x] Do not write custom CSS rules in globals.css — use Tailwind classes instead.
- [x] The page must be visually styled — plain unstyled HTML is not acceptable.
- [x] Layout should be clean and readable at a standard desktop viewport.

### No Errors

- [x] The dev server starts with npm run dev and the page loads without errors.
- [x] No errors in the browser console.

## Limitations

 Image must be manually updated

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
