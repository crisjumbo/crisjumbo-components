# Cris Jumbo components library

This project is dedicated to build all the components crisjumbo (author) will use in all projects.

## Onboarding

1. This repository has a publish.yml file
2. The publish.yml file will be in charge of updating the NPM version
3. Pull after the ACTION is completed (NPM version updated in origin)

## Usage

- Development:

1. Update branch with 'yarn pull'
2. Update dependencies with 'yarn install'
3. Link to Yalc 'yalc publish'
4. Development linked to the origin project 'yarn build:watch'

- Testing:
- Usage:

## Available Components

| Component name | Description    | Type | States                          | Status      |
| -------------- | -------------- | ---- | ------------------------------- | ----------- |
| Button         | Button element | Atom | onHover, onClick, Disable       | In Progress |
| Input          | Input element  | Atom | onFocus, onBlur, empty, disable | In Progress |
| Link           | Link element   | Atom | onClick                         | In Progress |

## Available Scripts

### `yarn test`

Runs unitary tests for each piece in the library. For more complex tests like flow-tests
create them in the origin repository.

### `yarn build`

Builds the application into a /dist folder. This code will contain the core code
minified to be used right away.

Make 'yarn build' and ensure the minify code is the expected.

### `yarn build:watch`

Creates a server with Nodemon and watch for changes on the Application. When a change
is made the server will clean the /dist folder, create a new one and publish it to yalc with:
'yalc publish --push'.

Ensure your other repository is link to the yalc store with 'yalc link crisjumbo-component' and
listening to changes on the ~/.yalc/dist updates. (more details on the origin repository).

## Warnings & Errors

> publish.yml file, the usage in a step of "::set-output" it is going\
>  to be depracated. Use file enviroments instead.

## Authors & License

[Cris Jumbo](https://github.com/crisjumbo)
