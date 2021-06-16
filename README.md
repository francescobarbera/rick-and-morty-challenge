# Rick and Morty challenge

## Requirements

- [nodejs >= 15](https://nodejs.org/en/)
- [yarn](https://yarnpkg.org) (used for managing dependencies)

## Setup

After cloning the repository, from the project's root directory run `yarn` to
install packages.

From the project's root directory, you can run the following npm scripts:

- `yarn lint`: runs code linters
- `yarn test`: runs tests
- `yarn start`: start the application

## Installing dependencies

This project uses [yarn](https://yarnpkg.org) to manage dependencies.

```sh
# use the -D flag for dev dependencies
yarn add my-dependency
```

## Conventions

- commit messages **MUST** be formatted using the
  [conventional commit message guidelines](https://git.io/vAO73) (committing
  will fail otherwise)

- [prettier](https://prettier.io) is used to enforce code formatting. Committing
  **WILL FAIL** if the code isn't formatted as prettier dictates. You can fix
  code formatting by running yarn prettify, but installing the prettier
  extension for your editor of choice is highly recommended

- [eslint](https://eslint.org/) is used to check some common coding mistakes.
  Committing **WILL FAIL** if the eslint check fails
