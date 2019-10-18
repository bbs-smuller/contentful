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

`cp -r ui-extensions/_stub ui-extensions/{EXTENSION_NAME}`

Edit extension meta-data:

 * `cd ui-extensions/{EXTENSION_NAME}`

 * Edit `extension.json` file

 * Edit `package.json` name

 * Make sure that `.contentfulrc.json` is correctly setup

Then install extension dependencies and run it in development mode:

`yarn install && yarn start`

#### Authentication with Contentful

Setup `.contentfulrc.json` and run `yarn login && yarn configure` within an extension directory.

### Include production build in Contentful

Target `build/index.html` file master blob from Github repository to always get last production ready UI extension in space extensions configuration.
