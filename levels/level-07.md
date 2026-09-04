# Bandit Level 07 → Level 08

## 🎯 Goal

The password is stored in `data.txt` next to the word `millionth`.

## 🛠️ Commands Used

```bash
ssh -p 2220 bandit7@bandit.labs.overthewire.org
grep "millionth" data.txt
```

## 💻 Solution

Search the file directly:

```bash
grep "millionth" data.txt
```

The returned line contains `millionth` and the password for the next level.

## 🧠 Explanation

`grep` searches text for a pattern without requiring the whole file to be read manually.

## 📚 What I Learned

Text searching with `grep` and efficient filtering.

---

## 📖 Detailed Medium Write-up

[Read the complete Medium walkthrough](https://medium.com/@iamkapilsaini/overthewire-bandit-complete-walkthrough-levels-0-to-11-a5c157ab7b71)

> This GitHub page is a level-by-level version of my original Medium walkthrough.
