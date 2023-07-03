# Next.js WordPress Clone

This is a Next.js project that serves as a clone of WordPress. The website is about longevity and it's in Spanish language.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Pages

The website consists of the following pages:

- Home (`pages/index.js`)
- About (`pages/about.js`)
- Blog (`pages/blog/index.js`)
- Blog Post (`pages/blog/[slug].js`)
- Contact (`pages/contact.js`)

## Components

The website uses the following components:

- Header (`components/Header.js`)
- Footer (`components/Footer.js`)
- PostCard (`components/PostCard.js`)
- PostList (`components/PostList.js`)
- Layout (`components/Layout.js`)

## API

The website provides the following API endpoints:

- Posts (`api/posts.js`)
- Contact (`api/contact.js`)

## Internationalization

The website supports Spanish language. The translation files are located in `public/static/locales/es`.

## Styles

The website uses CSS Modules for styling. The style files are located in `styles`.

## Configuration

The configuration for the Next.js application is located in `next.config.js`.

## Dependencies

The project dependencies are listed in `package.json`.

## License

MIT