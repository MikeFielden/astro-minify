/**
 *
 * buildArgs.js - build arguments for the command
 *
 * minify dist/client/css/main.css  --output dist/client/css/main.min.css
 * or
 * minify dist/client
 *  that should minify everything under client that are css/js
 **/

module.exports = function (projectDir) {
  var args = []
    , minifyWhat = `${projectDir}/dist/client`
    ;

  args.push(minifyWhat);
  args.push('--clean');

  return args;
};
