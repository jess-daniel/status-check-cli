# status-check-cli

## Information

Status Check is a full stack web application that allows users to monitor the status of an API and recieve notifications if it goes down. Users can either interact with the application through the web interface or a CLI tool.

See [Backend Documentation](https://github.com/jess-daniel/node_status_check_be/) for details on the API.

See [Frontend Documentation](https://github.com/jess-daniel/status-check-fe/) for details on the frontend of the project.

### Install

- `npm install -g status-check-cli`

### Usage

- `sc <options> [command]`
- View available commands with `sc --help`

### Key Features

- Ability to register and login via Auth0
- Ability to Create, View, Update, and Delete resources
- Ability to ping any online resource and get the status code

## Tech Stack

#### Node, Commander, Configstore, Inquirer, Colors

Why did I choose this framework?

- NodeJS is a server-side JavaScript runtime that allows developers to create scalable web servers and networking tools.
- Commander is a solution for creating command-line interfaces that comes with many features that make creating CLI's quick and easy.
- Configstore is a library that handles saving data securely on a user's local computer that is necessary for the CLI tool to run properly.
- Inquirer is a tool for making user interaction in the command line intuitive and easy to handle.
- Colors is a library that allows a developer to give text a color on the command line helping certain info standout.

## Getting started

To get running locally:

- Clone this repo
- **npm install** to install all required dependencies
- Create and add all ENV variables
- **npm link** to put command in user path

#### ENV File Config

- BASEURL - API Base URL

# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

## Issue/Bug Request

**If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**

- Check first to see if your issue has already been reported.
- Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
- Create a live example of the problem.
- Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes, where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).
