#!/usr/bin/env node
const path = require("path");
const args = process.argv.slice(2);
const { Plop, run } = require("plop");
const argv = require("minimist")(args);
const chalk = require("chalk");
const log = console.log;

console.log(
  chalk.bgRgb(15, 100, 204)("------ Welcome to React Code Generator -------")
);

Plop.launch(
  {
    cwd: argv.cwd,
    configPath: path.join(__dirname, "plopfile.js"),
    require: argv.require,
    completion: argv.completion,
  },
  (env) => {
    const options = {
      ...env,
      dest: process.cwd(),
    };
    return run(options, undefined, true);
  }
);
