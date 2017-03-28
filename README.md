#JavaScript Development Environment

This is a generic JavaScript development environment that I build from scratch in ["Building a JavaScript Development Environment" on Pluralsight](https://app.pluralsight.com/library/courses/javascript-development-environment/table-of-contents). This isn't tied to any specific JS framework.

## Get Started
1. **Install [Node 6](https://nodejs.org)**. Need to run multiple versions of Node? Use [nvm](https://github.com/creationix/nvm) or [nvm-windows](https://github.com/coreybutler/nvm-windows)
2. **Clone this repository.** - `git clone https://github.com/coryhouse/javascript-development-environment.git` or [download the zip](https://github.com/coryhouse/javascript-development-environment/archive/master.zip)
3. **Make sure you're in the directory you just created.** - `cd javascript-development-environment`
4. **Install Node Packages.** - `npm install`
5. **Run the app.** - `npm start -s`
This will run the automated build process, start up a webserver, and open the application in your default browser. When doing development with this kit, this command will continue watching files all your files. Every time you hit save the code is rebuilt, linting runs, and tests run automatically. Note: The -s flag is optional. It enables silent mode which suppresses unnecessary messages during the build.
6. Having issues? See below.

## Notes on usage
- 'npm start' (comes from the cross platform package called 'npm-run-all') will start the whole environment with a single call in a verbose mode (use 'npm start -s' to start the environment in a silent mode without any messages).
- Look up for this line (and corresponding .js file) in package.json for the entry point and other declarations: "open:src": "babel-node buildScripts/srcServer.js".
- To compile JS as ES6 code, run scripts either with 'babel-node' (replace all 'node' entries with 'babel-node' in the ./package.json if needed) OR install 'babel-core' and 'babel-cli' packages globally (check the global version with 'babel -V' or local one with this command: './node_modules/.bin/babel --version').
- To run additional script(s) before or after another one, use either 'pre-' or 'post-' prefixes (such as 'prestart' or 'poststart'), which will start these routines automatically before or after the actual script call.
- To start online instance using 'localtunnel' on some subdomain (like subd.localtunnel.me), run following command: "lt --port 3000 --subdomain subd". You will probably need to install it globally: "sudo npm install -g localtunnel".
- Use "npm share" ("npm-run-all --parallel open:src localtunnel") to start a shared environment with a randomly generated subdomain.
- For usage of babel-cli look: http://babeljs.io/docs/usage/cli/
- To update packages, use 'ncu -u' and then 'sudo npm install' in your project directory. Install it on your machine by: "sudo npm install -g npm-check-updates". See this page for more information: https://www.npmjs.com/package/npm-check-updates


## Having Issues? Try these things first:
1. Run `npm install` - If you forget to do this, you'll see this: `babel-node: command not found`.
2. Make sure you're running the latest version of Node. Or, use [Node 6.9.1](https://nodejs.org/en/download/releases/) if you're having issues on Windows. Node 7 has issues on some Windows machines.
3. Make sure files with names that begin with a dot (.babelrc, .editorconfig, .eslintrc) are copied to the project directory root. This is easy to overlook if you copy this repository manually.
4. Don't run the project from a symbolic link. It will cause issues with file watches.
5. Having linting issues? Delete any .eslintrc that you're storing in your user directory. Also, disable any ESLint plugin / custom rules that you've enabled within your editor. These will conflict with the ESLint rules defined in the course.
6. Nothing above work? Delete your node_modules folder and re-run npm install.

###Development Dependencies
| **Dependency** | **Use** |
|----------|-------|
|babel-cli|Babel Command line interface |
|babel-core|Babel Core for transpiling the new JavaScript to old |
|babel-loader|Adds Babel support to Webpack |
|babel-preset-latest|Babel preset for running all the latest standardized JavaScript features|
|babel-register|Register Babel to transpile our Mocha tests|
|cheerio|Supports querying DOM with jQuery like syntax - Useful in testing and build process for HTML manipulation|
|cross-env|Cross-environment friendly way to handle environment variables|
|css-loader|Add CSS support to Webpack|
|eslint|Lints JavaScript |
|eslint-plugin-import|Advanced linting of ES6 imports|
|eslint-watch|Add watch functionality to ESLint |
|eventsource-polyfill|Polyfill to support hot reloading in IE|
|expect|Assertion library for use with Mocha|
|express|Serves development and production builds|
|extract-text-webpack-plugin| Extracts CSS into separate file for production build |
|file-loader| Adds file loading support to Webpack |
|jsdom|In-memory DOM for testing|
|mocha| JavaScript testing library |
|npm-run-all| Display results of multiple commands on single command line |
|open|Open app in default browser|
|rimraf|Delete files |
|style-loader| Add Style support to Webpack |
|url-loader| Add url loading support to Webpack |
|webpack| Bundler with plugin system and integrated development server |
|webpack-dev-middleware| Adds middleware support to webpack |
|webpack-hot-middleware| Adds hot reloading to webpack |
