var path = require('path');
var fs = require('fs');

// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebookincubator/create-react-app/issues/637
const appDirectory = fs.realpathSync(process.cwd());
function resolveApp(relativePath) {
  return path.resolve(appDirectory, relativePath);
}

// config after eject: we're in ./config/
module.exports = {
  appBuild: resolveApp('static'),
  appPublic: resolveApp('public'),
  appHtml: resolveApp('templates/index.html'),
  appIndexJs: resolveApp('src/index.jsx'),
  appSrc: resolveApp('src'),
};
