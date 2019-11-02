
# Contributor's Guide

-  If you are new to Git and Github, it is advisable you go through
    [GitHub For Beginners](http://readwrite.com/2013/09/30/understanding-github-a-journey-for-beginners-part-1/)
    before moving to the next step.

-  Fork the project on Github [here](https://github.com/BolajiAyodeji/netty-finder/fork) <br>
    [Help Guide to Fork a repository](https://help.github.com/articles/fork-a-repo/).

-  Clone the project.
```git
https://github.com/BolajiAyodeji/netty-finder.git
```

- Install dependencies
```git
npm install
```

- To build
```git
npm run build
```

-  Create a branch specific to the issue you are working on.

```git
git checkout -b update-readme-file
```

For clarity to yourself and others on the issue you're working on, name
your branch something like `update-xxx` or `fix-xxx` where `xxx` is a short
description of the changes you're making. For example `update-readme` or
`fix-typo-on-contribution-md`.

-  Open up the project in your favourite text editor, select the file you want
    to contribute to and make your changes.


-  After making your changes in the new git branch then add your modified
    files to git,
    [How to add, commit, push and go](http://readwrite.com/2013/10/02/github-for-beginners-part-2/).

```shell
git add path/to/filename.ext
```

You can also add all unstaged files using:

```shell
git add .
```

Note, using a `git add .` will automatically add all files. You can do a
`git status` to see your changes, but do it before `git add`.

-  Commit your changes using a descriptive commit message.

```shell
git commit -m "Brief Description of Commit"
```

-  Push your commits to your Github Fork:

```shell
git push -u origin branch-name
```

-  Submit a pull request.

    Within GitHub, visit this main repository and you should see a banner
    suggesting to make a pull request. While you're writing up the pull
    request, you can add `Closes #XXX` in the message body where `#XXX` is the
    issue you're fixing. So an example would be `Closes #42` would close issue
    `#42`.

### Submitting a Pull Request

[What is a pull request?](https://yangsu.github.io/pull-request-tutorial/)

If you decide to fix an issue, it's advisable to check the comment thread in
case there's somebody already working on a fix. If no one is working on it at
the moment, kindly leave a comment stating that you intend to work on it so
other people don't accidentally duplicate your effort.

In a situation whereby somebody decides to fix an issue but doesn't follow up
for a particular period of time, say 2-3 weeks, it's acceptable to still pick
up the issue but make sure to leave a comment.

### Helpful Resources

- [Pro GIT Book](https://git-scm.com/book/en/v2)

- [Try Git](https://try.github.io/)

- [Git/ Git Hub on Windows](https://www.youtube.com/watch?v=J_Clau1bYco)
