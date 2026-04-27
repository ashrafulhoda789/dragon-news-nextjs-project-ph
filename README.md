This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

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

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


<!-- 
    Step: 
    1. setUp daisyUI
    2. Create route: login page, register page, news->[id]->newsDetailPage
    3. create routing group:
          -> (auth) > login, > register, layout.jsx
          -> (main) > news, page.js, layout.jsx 
    4. Design Header and install date fns package
    5. Design Not found page: not-found.jsx
    6. set google fonts in layout : 
        const poppins = Poppins({
            variable: "--font-poppins",
            subsets: ['latin'],
            weight: ['400', '500', '600', '700'],
        })
     and use it in body as dynamic value className={`${poppins.className}`}
    7. install react marquee for breaking news section and design it with dummy data
    8. Navbar designed and about us and career page
    9. Create a client NavLink component to apply active style nav link and use this instead of Link in Navbar
    10. All categories data fetch in homepage. and designed grid layout
    11. Create components for all grid of homepage
    
    
 -->