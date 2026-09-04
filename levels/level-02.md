# Bandit Level 02 → Level 03

## 🎯 Goal

The password is stored in a file whose name contains spaces: `--spaces in this filename--`.

## 🛠️ Commands Used

```bash
ssh -p 2220 bandit2@bandit.labs.overthewire.org
ls
cat "--spaces in this filename--"
# Alternative:
cat ./--spaces*
```

## 💻 Solution

Because spaces separate shell arguments, quote the complete filename:

```bash
cat "--spaces in this filename--"
```

An alternative is to use a relative path and wildcard:

```bash
cat ./--spaces*
```

## 🧠 Explanation

Quoting keeps a filename containing spaces as one shell argument.

## 📚 What I Learned

Handling spaces in filenames, quoting, and shell argument parsing.

---

## 📖 Detailed Medium Write-up

[Read the complete Medium walkthrough](https://medium.com/@iamkapilsaini/overthewire-bandit-complete-walkthrough-levels-0-to-11-a5c157ab7b71)

> This GitHub page is a level-by-level version of my original Medium walkthrough.
