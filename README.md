# Node Website

## Overview

Just playing around with Node.js, for the sake of preparing for some related project work. This this first time I've made a web app with node; before this, I've only used it for Web APIs and console apps.

I began with the Express Generator, which created some of the file structure. It also generated some of the boilerplate files (e.g., `./bin/www`, `app.js`... though I later refactored `app.js`).

The app demonstrates:

* Express
  * Middleware
  * Routing [middleware]
* EJS
  * Templating
    * Control flow 
    * Nested templates
* ES6
* Promises
* Embedded video (mp4)

## Prerequisites

- Install [Git](https://git-scm.com/downloads).
- Install [Node](https://nodejs.org/en/download/) (tested on version 6.9.2)
- Clone the Git repository to your local machine.

## How To

- Unless otherwise noted, all terminal commands must be issued from the project's root directory.

### Install project libraries

```bash
npm install
```

### Lint the code

```bash
npm run lint
```

### Run tests

Note that this will lint the code before running tests. No tests will run if lint errors are found.

*Tests are TODO*

```bash
npm test
```

### Run the app

```bash
npm start
```

You can start the app in watch mode as follows:

```bash
npm run watch
```

In either mode, browse to `http://127.0.0.1:3000` to see the website.

## Troubleshooting

### Application or Tests Don't Work Due To Missing Dependencies

* Re-run `npm install` to verify that your dependencies are up to date.

### Everything Is Hosed!

Sometimes you just need to completely clean your development environment before starting over from the beginning. The following commands will help you start from a "clean slate":

```bash
# Blow away the node_modules folder:
rm -rf node_modules
```

## Versioning

We use [SemVer](http://semver.org/) for versioning.
