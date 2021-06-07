const EditorConfig = require('./action/editorconfig.cjs');
const GitFile = require('./action/git-file.cjs');
const License = require('./action/license.cjs');
const Registry = require('./action/registry.cjs');
const Readme = require('./action/readme.cjs');
const Package = require('./action/package.cjs');

const Prompt = require('./prompt/index.cjs');

module.exports = async function init() {
  const {
    Dependencies,
    GitInit,
    Install,
    info,
    options: { isGit } = {},
  } = await Prompt();

  console.log('-'.repeat(32));

  const actions = [
    GitInit,
    Registry,
    () => Package(info),
    Readme,
    License,
    EditorConfig,
    () => (GitInit || isGit ? GitFile() : undefined),
    () => (Dependencies ? Dependencies(GitInit || isGit) : undefined),
    Install,
  ].filter((func) => typeof func === 'function');

  for (const action of actions) {
    // eslint-disable-next-line no-await-in-loop
    const io = await action();
    if (io && io.catch) {
      io.catch((error) => {
        console.warn(error.message);
      });
    }
  }
};
