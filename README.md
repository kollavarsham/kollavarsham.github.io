kollavarsham.github.io
======================

This branch has the source files to the kollavarsham.org website, deployed via GitHub Pages on the `master` branch

### Contributing

1. Clone this repo on a box that has `node.js` and `npm` installed and `cd` into the cloned directory
2. Install `yeoman` by running `npm install -g yo` - check [yeoman.io](http://yeoman.io) for more information. 
3. Run `npm install` followed by `bower install` to install the dependencies
4. Hack on the website within the `app` folder - `grunt serve` will preview the site with [live reload](https://github.com/gruntjs/grunt-contrib-watch#optionslivereload) on saving any files
5. Run `grunt deploy` to push the `dist` folder to the `master` branch and GitHub Pages will then publish it to http://kollavarsham.org 
