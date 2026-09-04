# Bandit Level 05 → Level 06

## 🎯 Goal

The password is somewhere under `inhere` and belongs to a human-readable, 1033-byte, non-executable file.

## 🛠️ Commands Used

```bash
ssh -p 2220 bandit5@bandit.labs.overthewire.org
cd inhere
find . -type f -readable -size 1033c ! -executable
cat ./<path-to-file>
```

## 💻 Solution

Search using the required properties:

```bash
find . -type f -readable -size 1033c ! -executable
```

Then read the resulting file with `cat`.

## 🧠 Explanation

`find` can combine file type, readability, size, and executable-state conditions to narrow a large directory tree to the target file.

## 📚 What I Learned

`find` predicates, file size, readability, and executable permissions.

---

## 📖 Detailed Medium Write-up

[Read the complete Medium walkthrough](https://medium.com/@iamkapilsaini/overthewire-bandit-complete-walkthrough-levels-0-to-11-a5c157ab7b71)

> This GitHub page is a level-by-level version of my original Medium walkthrough.
