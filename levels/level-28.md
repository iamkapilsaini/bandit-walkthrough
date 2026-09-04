# Bandit Level 28 → Level 29

## 🎯 Goal

The Git repository contains a `README.md`, but the password has been removed from the current version. Investigate Git history.

## 🛠️ Commands Used

```bash
git clone ssh://bandit28-git@bandit.labs.overthewire.org:2220/home/bandit28-git/repo
cd repo
cat README.md
git log
git show 13bbc4d2414ffe0439b8ee4f5e5c2949780cf4b3
```

## 💻 Solution

Clone and inspect the repository:

```bash
git clone ssh://bandit28-git@bandit.labs.overthewire.org:2220/home/bandit28-git/repo
cd repo
cat README.md
```

The current README does not contain the password. Inspect the history:

```bash
git log
git show 13bbc4d2414ffe0439b8ee4f5e5c2949780cf4b3
```

The Medium walkthrough identifies the `add missing data` commit and uses `git show` to reveal the earlier password-containing version.

## 🧠 Explanation

Git history can retain sensitive information even after it is removed from the current working tree. `git show` exposes the changes stored in a commit.

## 📚 What I Learned

Git history, `git log`, `git show`, diffs, and the risk of committing secrets.

---

## 📖 Detailed Medium Write-up

[Read the complete Medium walkthrough](https://medium.com/@iamkapilsaini/overthewire-bandit-levels-23-33-complete-walkthrough-60fb8573221b)

> This GitHub page is a level-by-level version of my original Medium walkthrough.
