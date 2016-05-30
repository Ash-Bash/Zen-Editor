//Makefile.js Script
require('shelljs/global');

export function initialize() {
  //Install the required npm packages (Including Global Ones)
}

export function compile() {
  //run Webpack compiler
  exec('"node_modules/.bin/webpack"');
}

export function build() {
  // run typescript compiler
  this.run('typings');
  exec('"node_modules/.bin/tsc"')

  this.run('compile');
}

export function debug() {
  //Builds and Compiles typescript scripts and preps webpack
  this.run('build');

  //Runs Electron Application
  exec('"node_modules/.bin/electron" .');
}

export function clean() {
  exec('rm -fr node_modules');
  exec('rm -fr typings');
}

export function deployall() {
  //Builds and Compiles typescript scripts and preps webpack
  this.run('build');

  //Builds and Compiles A Binery (For All Platforms and Arch)
  exec('"node_modules/.bin/electron-packager" . Zen-Editor --platform=all --arch=all ./dist');
}

export function deploywin() {
  //Builds and Compiles typescript scripts and preps webpack
  this.run('build');

  //Builds and Compiles A Binery
  exec('"node_modules/.bin/electron-packager" . Zen-Editor --platform=win32 --arch=all ./dist');
}

export function deployuwp() {
  //Builds and Compiles typescript scripts and preps webpack
  this.run('build');

  //Builds and Compiles A Binery
}

export function deployosx() {
  //Builds and Compiles typescript scripts and preps webpack
  this.run('build');

  //Builds and Compiles A Binery
  exec('"node_modules/.bin/electron-packager" . Zen-Editor --platform=darwin --arch=x64 ./dist');
}

export function deploymas() {
  //Builds and Compiles typescript scripts and preps webpack
  this.run('build');

  //Builds and Compiles A Binery
  exec('"node_modules/.bin/electron-packager" . Zen-Editor --platform=mas --arch=x64 ./dist');
}

export function deploylinux(){
  //Builds and Compiles typescript scripts and preps webpack
  this.run('build');

  //Builds and Compiles A Binery
  exec('"node_modules/.bin/electron-packager" . Zen-Editor --platform=linux --arch=all ./dist');
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
