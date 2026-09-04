# Bandit Level 04 → Level 05

## 🎯 Goal

The password is stored in the only human-readable file in the `inhere` directory.

## 🛠️ Commands Used

```bash
ssh -p 2220 bandit4@bandit.labs.overthewire.org
cd inhere
file ./-*
cat ./-<filename>
```

## 💻 Solution

Use `file` to identify the contents of the files:

```bash
file ./-*
```

Locate the entry identified as ASCII text / human-readable, then read it with `cat`.

## 🧠 Explanation

`file` examines file contents and reports the data type. This makes it useful when filenames alone do not reveal which file contains readable text.

## 📚 What I Learned

File-type identification and selecting a readable file.

---

## 📖 Detailed Medium Write-up

[Read the complete Medium walkthrough](https://medium.com/@iamkapilsaini/overthewire-bandit-complete-walkthrough-levels-0-to-11-a5c157ab7b71)

> This GitHub page is a level-by-level version of my original Medium walkthrough.
