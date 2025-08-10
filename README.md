# Nuxt and Bolts

> an opinionated starter kit for Nuxt 4

## Stack

- Auth: better-auth
- UI: shadn-vue
- ORM: drizzle-kit
- Mail: nodemailer
- Validator: Zod

## Using this kit

Clone / Fork / Dowload the zip file

Here's a degit command for your (and my) convenience

```bash
npx degit matfire/nuxt-and-bolts my-app
```

- copy .env.example to .env
- pnpm i
- pnpm generate:ba-secret
- copy output and replace the value for BETTER_AUTH_SECRET in .env
- pnpm generate:ba-migrations

Once you have your db running:

- pnpm db:push
