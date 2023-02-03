const core = require('@actions/core');

// most @actions toolkit packages have async methods
async function run() {
  try {
    const ms = core.getInput('terraform_docs_version');
    core.info(`Waiting ${ms} milliseconds ...`);

    var commentBody = ``
    commentBody += ms

    if (commentBody !== ``){
      github.rest.issues.createComment({
        issue_number: context.issue.number,
        owner: context.repo.owner,
        repo: context.repo.repo,
        body: commentBody
      })
    }

  } catch (error) {
    core.setFailed(error.message);
  }
}

run();