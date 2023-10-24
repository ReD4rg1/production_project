# Getting Started
## Run in dev mode

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Storybook

### `npm run storybook`

Runs the storybook client.\
Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

### Bundle analyzer

The bundle analyzer is starting automatically with `- npm start` command.\
Open [http://localhost:8888](http://localhost:8888) to view it in the browser.

## Testing

### `npm run lint:ts` - linter testing

### `npm run lint:scss` - stylelint testing

### `npm run test:unit` - unit testing

CI tests starting automatically when use `push`/`pool request`.
They also include screenshot tests with using `Chromatic`.

## Building project

use

### `npm run build:prod`

or

### `npm run build:dev`

to build project.

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

