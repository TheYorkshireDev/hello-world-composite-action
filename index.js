const core = require('@actions/core');

// most @actions toolkit packages have async methods
async function run() {
  try {
    const ms = core.getInput('terraform_docs_version');
    core.info(`Waiting ${ms} milliseconds ...`);

  } catch (error) {
    core.setFailed(error.message);
  }
}

run();