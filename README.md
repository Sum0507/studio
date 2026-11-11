# Sumaiya portfolio — Sanity Studio

The content manager for [Jannatun Nur Sumaiya's portfolio](https://portfolio2-gamma-henna.vercel.app) (website code: [Sum0507/portfolio2](https://github.com/Sum0507/portfolio2)).

Sanity project `lyb8bzsd`, dataset `production`.

## What you can edit

| In the Studio | On the site |
| --- | --- |
| Site Config | Name, bio, rotating hero words, hero photo, location, links, CV, "currently" chip, skills |
| Photography | Photo strip and gallery (caption, image, order) |
| Artbook | Art strip and gallery (caption, image, order) |
| Projects | Project cards (title, year, stack, description, links, preview GIF or image) |
| Research | Research cards (title, status, venue, co-authors, tags, year) |

Published changes show on the site within about a minute.

## Run and deploy

```bash
npm install
npm run dev      # local Studio at http://localhost:3333
npm run deploy   # update the online Studio after changing anything in schemaTypes/
```

Changing a file in `schemaTypes/` only changes the online Studio after `npm run deploy`.
