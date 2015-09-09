/**
*
* astro-minify: astro module for minifying js and css
*
**/

'use strict';

var buildArgs = require('./buildArgs')
	, path = require('path')
	, fs = require('fs')
	;

module.exports = function (projectDir, options) {
	var args = buildArgs(projectDir, options)
	, cmd = path.resolve(fs.realpathSync(__dirname), '../node_modules/.bin/minify');

	//setup
	return { cmd: cmd, args: args };
};