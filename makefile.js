//Makefile.js Script
require('shelljs/global');

export function build() {
  // run typescript compiler
  this.run('typings');
  exec('"node_modules/.bin/tsc"')

  //run Webpack compiler
  //exec('webpack');
}

export function debug() {
  //Builds and Compiles typescript scripts
  this.run('build');

  //Runs Electron Application
  exec('electron .');
}

export function clean() {
  exec('rm -fr node_modules');
  exec('rm -fr typings');
}

export function deployall() {

}

export function deploywin() {

}

export function deployosx() {

}

export function deploylinux(){

}

export function typings() {
  //Run Typings Commands
  exec('"node_modules/.bin/tsd" reinstall');
  exec('"node_modules/.bin/tsd" rebundle');
  touch('typings');
}

export function node_modules() {
  exec('npm install');
  touch('node_modules');
}

export default function() {
  console.log('This is the default task!')
  // call task manually
  this.run('build')
}
