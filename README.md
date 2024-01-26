# Getting Started

```
npm install - install dependencies
```

---

## Run in dev mode

```
npm run start:dev или npm run start:dev:vite - start server + frontend of the project in dev mode
```

---

If we run it separately, we run server first:

```
npm run start:json-server
```

then run frontend:

```
npm start
```

Open [http://localhost:3028](http://localhost:3028) to view it in the browser.

or for faster assembly use Vite:

```
npm run start:vite
```

Runs the app in the development mode.

---

## Scripts

- `npm run start` - Running a frontend project on webpack dev server
- `npm run start:vite` - Running a frontend project on vite
- `npm run start:dev` - Running a frontend project on webpack dev server + backend
- `npm run start:dev:vite` - Running a frontend project on vite + backend
- `npm run start:json-server` - Running a backend server
- `npm run build:prod` - Build in prod mode
- `npm run build:dev` - Build in dev mode (not minimized)
- `npm run lint:ts` - Checking ts files with linter
- `npm run lint:ts:fix` - Fixing ts files with linter
- `npm run lint:scss` - Checking style scss files with a linter
- `npm run lint:scss:fix` - Fixing style scss files with a linter
- `npm run format` - Formatting code style with a prettier
- `npm run test:unit` - Running unit tests with jest
- `npm run storybook` - Running Storybook
- `npm run build-storybook` - Assembling a storybook build
- `npm run prepare` - Pre commit hooks
- `npm run generate:slice` - Script for generating FSD slices

---

## Storybook

The project describes story cases for each component.
Requests to the server are mocked using storybook-addon-mock.

A file with story cases is created next to the component with the extension `.stories.tsx`

You can start the storybook with the command:

- `npm run storybook`

Runs the storybook client.\
Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

More about [Storybook](/docs/storybook.md)

---

## Bundle analyzer

The bundle analyzer is starting automatically with `- npm start` command.\
Open [http://localhost:8888](http://localhost:8888) to view it in the browser.

---

## Testing

### `npm run lint:ts` - linter testing

### `npm run lint:scss` - stylelint testing

### `npm run test:unit` - unit testing

CI tests starting automatically when use `push`/`pool request`.
They also include screenshot tests with using `Chromatic`.

More about [Testing](/docs/tests.md)

---

## Building project

use

### `npm run build:prod`

or

### `npm run build:dev`

to build project.

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

---

## Project configuration

For development, the project contains 2 configs:
1. Webpack - `./config/build`
2. vite - `vite.config.ts`

Both collectors are adapted to the main features of the application.

All configuration is stored in /config
- `/config/babel` - babel
- `/config/build` - webpack configuration
- `/config/jest` - test environment configuration
- `/config/storybook` - storybook configuration

The `scripts` folder contains various scripts for refactoring\simplifying code writing\generating reports, etc.

---

## CI pipeline & pre commit hooks

The GitHub actions configuration is located in `/.github/workflows`.
All types of tests, project and storybook assembly, and linting are run in ci.

In pre commit hooks we check the project with linters, config in `/.husky`

---

### Working with data

Interaction with data is carried out using the redux toolkit.
If possible, reused entities should be normalized using EntityAdapter

Requests to the server are sent using [RTK query](/src/shared/api/rtkApi.ts)

For asynchronous connection of reducers (so as not to pull them into a common bundle) it is used
[DynamicModuleLoader](/src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx)

---


## Entities

- [Article](/src/entities/Article)
- [Comment](/src/entities/Comment)
- [Counter](/src/entities/Counter)
- [Country](/src/entities/Country)
- [Currency](/src/entities/Currency)
- [Notification](/src/entities/Notification)
- [Profile](/src/entities/Profile)
- [Rating](/src/entities/Rating)
- [User](/src/entities/User)

## Features

- [addCommentForm](/src/features/addCommentForm)
- [articleRating](/src/features/articleRating)
- [articleRecommendationsList](/src/features/articleRecommendationsList)
- [AuthByUsername](/src/features/AuthByUsername)
- [avatarDropdown](/src/features/avatarDropdown)
- [editableProfileCard](/src/features/editableProfileCard)
- [NotificationButton](/src/features/NotificationButton)
- [scrollSave](/src/features/scrollSave)
- [SortSelector](/src/features/SortSelector)
- [ThemeSwitcher](/src/features/ThemeSwitcher)
- [ViewSelector](/src/features/ViewSelector)
