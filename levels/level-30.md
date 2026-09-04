# Bandit Level 30 → Level 31

## 🎯 Goal

The repository appears almost empty and `README.md` contains no password. Investigate Git tags.

## 🛠️ Commands Used

```bash
git clone ssh://bandit30-git@bandit.labs.overthewire.org:2220/home/bandit30-git/repo
cd repo
ls
cat README.md
git tag
git show <tag>
```

## 💻 Solution

Clone and inspect the repository:

```bash
git clone ssh://bandit30-git@bandit.labs.overthewire.org:2220/home/bandit30-git/repo
cd repo
ls
cat README.md
```

List the tags:

```bash
git tag
git show <tag>
```

The useful information is stored in a tag object. Inspect the relevant tag with `git show`.

## 🧠 Explanation

Git tags can reference objects containing information not visible in the current working tree. Looking only at normal files is therefore insufficient.

## 📚 What I Learned

Git tags, Git objects, and investigating repository metadata.

---

## 📖 Detailed Medium Write-up

[Read the complete Medium walkthrough](https://medium.com/@iamkapilsaini/overthewire-bandit-levels-23-33-complete-walkthrough-60fb8573221b)

> This GitHub page is a level-by-level version of my original Medium walkthrough.
