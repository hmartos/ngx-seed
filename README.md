# ngx-seed

[![Build Status](https://travis-ci.org/hmartos/ngx-seed.svg?branch=master)](https://travis-ci.org/hmartos/ngx-seed)


Boilerplate to create an Angular 7+ WebApp with environment variables, router, internationalization and spectator to run tests

## Getting started

### Prerequisites

You need **git**, **node.js** and **npm** to work with this project.

### Environment variables

This is the list of the environment variables used in this project.

- **API_BASE_URL**. API url.

The following are color variables used to build a custom Angular Material theme:

- **PRIMARY_COLOR**. Color most widely used across all screens and components.
- **ACCENT_COLOR**. Color used for the floating action button and interactive elements.
- **WARN_COLOR**. Color used to convey error state.

### Running the application

There are some scripts that you can use to run your application, you can change them to fit your requirements.

```bash
npm start
```

To run the backend, you can use the following script:

```bash
npm run start-backend
```

### Running tests

#### Unit tests

You can run unit tests using this script:

```bash
npm test
```

Every time you run this script, the coverage report will be updated. You can find this report inside the `/coverage` folder.

#### e2e tests

You can run e2e tests using this script:

```bash
npm run e2e
```

Every time you run this script, a report is generated inside `/e2e/reports` folder.

#### CI

You can run this script if you are in your local environment:

```bash
npm run ci-local
```

This script runs e2e tests, unit tests and build the application.

In the rest of environments, the script to be run is the following:

``` bash
npm run ci
```

The necessary environment variables should be previously defined.
