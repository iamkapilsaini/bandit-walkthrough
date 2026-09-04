# Bandit Level 10 → Level 11

## 🎯 Goal

The password is stored in `data.txt` and encoded using Base64.

## 🛠️ Commands Used

```bash
ssh -p 2220 bandit10@bandit.labs.overthewire.org
base64 -d data.txt
```

## 💻 Solution

Decode the file:

```bash
base64 -d data.txt
```

The decoded output contains the password for `bandit11`.

## 🧠 Explanation

Base64 is an encoding scheme, not encryption. `-d` tells the `base64` utility to decode.

## 📚 What I Learned

Base64 encoding/decoding and command-line data processing.

---

## 📖 Detailed Medium Write-up

[Read the complete Medium walkthrough](https://medium.com/@iamkapilsaini/overthewire-bandit-complete-walkthrough-levels-0-to-11-a5c157ab7b71)

> This GitHub page is a level-by-level version of my original Medium walkthrough.
