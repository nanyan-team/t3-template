# repo name here (t3-template)

Create new project with t3-template

`npx degit nanyan-team/t3-template <my-project>`

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

## What this app is made with?

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [tRPC](https://trpc.io)

## Local Setup

- `npm i`
- `cp .env.example .env` **important:** make sure your `DATABASE_URL` env is not pointing to production while in `development`.
- `npx prisma db push`
- `npm run dev`

## Scripts

- `./scripts/commit`
  - You can run this script to do `git add .` and commit with `commitizen`.
- `./scripts/sync_prisma`
  - This script will remove existing `prisma` folder, clone the prisma repo and clean up git infos.

## Learn More

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

You can check out the [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app) — your feedback and contributions are welcome!

## How do I deploy this?

Follow our deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.
