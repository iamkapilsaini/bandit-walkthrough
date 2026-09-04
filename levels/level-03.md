# Bandit Level 03 → Level 04

## 🎯 Goal

The password is stored in a hidden file inside the `inhere` directory.

## 🛠️ Commands Used

```bash
ssh -p 2220 bandit3@bandit.labs.overthewire.org
cd inhere
ls -la
cat .<filename>
```

## 💻 Solution

Enter `inhere` and display all files, including hidden entries:

```bash
cd inhere
ls -la
```

Find the hidden file containing the password and read it with `cat`.

## 🧠 Explanation

`-a` tells `ls` to show hidden files, including names beginning with `.`.

## 📚 What I Learned

Hidden files, directory navigation, and `ls -la`.

---

## 📖 Detailed Medium Write-up

[Read the complete Medium walkthrough](https://medium.com/@iamkapilsaini/overthewire-bandit-complete-walkthrough-levels-0-to-11-a5c157ab7b71)

> This GitHub page is a level-by-level version of my original Medium walkthrough.
