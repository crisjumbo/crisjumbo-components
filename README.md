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

## Available Scripts

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Ready to be deployed!

## Warnings & Errors

> publish.yml file, the usage in a step of "::set-output" it is going\
>  to be depracated. Use file enviroments instead.

## Authors & License

[Cris Jumbo](https://github.com/crisjumbo)
