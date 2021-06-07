const { Text } = require('fs-chain');
const { cyan } = require('chalk');

const { pkgCwd } = require('../lib/utils.cjs');

module.exports = async function Readme() {
  const { name, description } = pkgCwd();

  new Text()
    .source('README.md')
    .onFail()
    .onDone(() =>
      [`# ${name}`, description ? `${description}.\n` : '']
        .filter(Boolean)
        .join('\n\n'),
    )
    .output()
    .logger('Create', cyan('README.md'))
    .catch(console.warn);
};
