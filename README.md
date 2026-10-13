# For My Darloo — Thrisha's Birthday Surprise

A cinematic, mobile-first React/Vite birthday experience built for Thrisha by Vibu.

## Run

```bash
npm install
npm run dev
```

Build for production with `npm run build`.

## Replace the photos

All gallery photos live in `public/photos/` and are referenced only from `src/data/birthday.js`:

- `photo1.jpg` through `photo8.jpg`

Swap those files with your real photos while keeping the filenames, and the UI does not need to change.

## Edit the personal content

Open `src/data/birthday.js`. Names, birthday date, story, reasons, letter, wish, Spotify link, captions, and image paths are kept there so the UI components stay reusable.
