# Bandit Level 29 → Level 30

## 🎯 Goal

The current branch contains no useful password. Investigate all Git branches and commits for information stored outside the default branch.

## 🛠️ Commands Used

```bash
git clone ssh://bandit29-git@bandit.labs.overthewire.org:2220/home/bandit29-git/repo
cd repo
cat README.md
git branch -a
git log --all
git show origin/dev:README.md
```

## 💻 Solution

Clone the repository and inspect branches:

```bash
git clone ssh://bandit29-git@bandit.labs.overthewire.org:2220/home/bandit29-git/repo
cd repo
cat README.md
git branch -a
git log --all
```

The Medium walkthrough finds useful information in another branch. Read the file directly from the remote `dev` branch:

```bash
git show origin/dev:README.md
```

## 🧠 Explanation

`git branch -a` reveals local and remote branches. Sensitive data can exist in branches even when it is absent from the default branch.

## 📚 What I Learned

Git branches, remote branches, `git log --all`, and inspecting files without switching branches.

---

## 📖 Detailed Medium Write-up

[Read the complete Medium walkthrough](https://medium.com/@iamkapilsaini/overthewire-bandit-levels-23-33-complete-walkthrough-60fb8573221b)

> This GitHub page is a level-by-level version of my original Medium walkthrough.
