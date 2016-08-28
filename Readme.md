# Base Web Project Grunt

Base Web Project using: Grunt, Browsersync, Webpack, Babel and Karma.

Webpack builds Babel as a Express Middleware, Development server is a combination of Browsersync + Express + Webpack.
Webpack Hot Middleware watches js files and reloads browser.

## Developer Setup

Prerequisites
-------------

* [NVM](https://github.com/creationix/nvm) or [Node.js](https://nodejs.org)
* [Grunt Command Line Interface (CLI)](https://github.com/gruntjs/grunt-cli)

Requirements
-------------

* Nodejs v.0.12.9

        nvm ls-remote
        nvm install 4.5.0
        nvm use 4.5.0

* Please download the [Editor Config](http://editorconfig.org/) plugin for your code editor

* From the Terminal:

        npm install -g grunt-cli
        npm run start
        grunt


## Starting Up The Project

* ```npm run start``` to install project dependencies.

* ```grunt``` to build the project for development and open a browser instance with watch, etc. only builds 1 locale eg en-GB

* ```grunt prod --isProd``` to build the project for production.

* ```grunt server ``` to serve the distribution files.

* ```grunt server --isProd``` to serve the production files - Webpack is a express middleware, to use grunt server bypassing Webpack, param --isProd needs to be passed.

## Production Server

* ```node deploy/server```
