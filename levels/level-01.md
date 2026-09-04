# Bandit Level 01 → Level 02

## 🎯 Goal

The password is stored in a file named `-` in the home directory.

## 🛠️ Commands Used

```bash
ssh -p 2220 bandit1@bandit.labs.overthewire.org
ls
cat ./-
```

## 💻 Solution

List the directory:

```bash
ls
```

The filename is `-`. A direct `cat -` can be interpreted as an option or standard input, so specify the relative path:

```bash
cat ./-
```

## 🧠 Explanation

`./` explicitly identifies the current directory, making `-` unambiguously a filename.

## 📚 What I Learned

Special filenames, relative paths, and command-line option handling.

---

## 📖 Detailed Medium Write-up

[Read the complete Medium walkthrough](https://medium.com/@iamkapilsaini/overthewire-bandit-complete-walkthrough-levels-0-to-11-a5c157ab7b71)

> This GitHub page is a level-by-level version of my original Medium walkthrough.
