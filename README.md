# InstruGo App Frontend

## Technologies

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/api-reference/create-next-app) using [Yarn](https://yarnpkg.com/) package manager.

## Install dependencies

```bash
$ yarn
```

## Run the app

```bash
# development mode
$ yarn dev

# production mode
$ yarn build
$ yarn start
```

IMPORTANT: If you're running the app in production mode, make sure to change the `publicRuntimeConfig.apiUrl` variable from `https://api.instrugo.frle.net/api` to `http://localhost:8000/api` in `next.config.js` file. Otherwise you will be sending requests to our deployed production backend which will be no good (it won't work for you). :)

## Type checking and formatting

This project uses [TypeScript](https://www.typescriptlang.org/), [Prettier](https://prettier.io/docs/en/index.html) formatter and [ESLint](https://eslint.org/docs/user-guide/getting-started) for best developing experience.

Combination of Husky and `lint-staged` is used for precommit insurance.

## Deployment

This app is currently deployed via [Vercel Platform](https://vercel.com/).
