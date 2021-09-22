<!--

    Copyright (c) 2020-present Sonatype, Inc. All rights reserved.
    "Sonatype" is a trademark of Sonatype, Inc.

-->
# How to be a contributor to this project

Looking to dive in? FANTASTIC! Reach out to one of our experts and we can help get you started in the right direction.
The SAB is primarily maintained by Team Plaid. You can integrate with us in the following ways:

* Reach out to the relevant slack groups: @sab-back-end or @sab-front-end.
* Please fill out an issue (Jira RSC project) for your PR so that we have traceability as to what you are trying to fix,
  versus how you fixed it.

Also see our documentation on confluence at https://docs.sonatype.com/pages/viewpage.action?pageId=195692636 .

## Submitting a PR

* Try to fix one thing per pull request! Many people work on this code, so the more focused your changes are, the less
  of a headache other people will have when they merge their work in.
* Ensure your Pull Request passes tests either locally or via Jenkins (it will run automatically on your PR)
* If you're stuck, ask #react-components in Slack! There are a number of experienced programmers who are happy to help
  with learning and troubleshooting.
* Who to ask for reviews depends on which half of the SAB is modified in the PR. For frontend changes, ask the
  `sonatype/sab-frontend` github group. For backend changes, ask `sonatype/sab-backend`.

### PR commenting protocol

Here are the general rules to follow when commenting on PRs for this repo:

* When leaving comments on a PR, leave them all as individual comments as opposed to "Starting a Review".  This is
  because some people prefer to receive each comment as a separate email.
* When responding to a comment, always blockquote what you are responding to (even if it is the entire previous
  comment).  This allows the emails to have the necessary conversation context that they otherwise lack.
* When you as the PR author make a change in response to a comment, respond to that comment and include the commit hash
  where you made the fix.  Do not resolve the thread.
* The originator of a thread should be the person to mark that thread resolved, typically after reviewing the commit
  referenced in the response comment from the PR author and finding it acceptable.
* Unless stated otherwise by the commenter, or clearly not meant to be responded to, all comments on a PR are expected
  to be addressed before it is merged. Sometimes it is alright for a reviewer to approve the PR before all of their
  comments are addressed, but generally only when those comments are expected to be easily addressable without further
  discussion (for example simple formatting issues).  Even in this case though, the comments should still be addressed
  post-approval
* At least one approval from a SAB maintainer (`sonatype/sab-frontend` member for frontend code, `sonatype/sab-backend`
  member for backend code) is required.
