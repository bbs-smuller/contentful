# BBS / Contentful

## Setup

`nvm use`

`npm install -g contentful-cli`

`yarn install`

## Configuration

Configuration is handled in:

 * `.env` file

 * `ui-extensions/**/.contentfulrc.json`

## UI-Extensions

### Create extension

You can duplicate the base extension skeleton:

`rm -rf ui-extensions/_stub/node_modules ui-extensions/_stub/yarn.lock && cp -r ui-extensions/_stub ui-extensions/{EXTENSION_NAME} && cd ui-extensions/{EXTENSION_NAME}`

Edit extension meta-data:

 * Edit `extension.json` file

 * Edit `package.json` name

 * Make sure that `.contentfulrc.json` is correctly setup

Then install extension dependencies and run it in development mode:

`yarn install && yarn start`

#### Authentication with Contentful

Setup `.contentfulrc.json` and run `npm run login && yarn configure` within an extension directory.

### Include production build in Contentful

Target `build/index.html` file master blob from Github repository to always get last production ready UI extension in space extensions configuration.

#### Compile new production build

`yarn build` within extension directory.
