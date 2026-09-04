# Bandit Level 11 → Level 12

## 🎯 Goal

The password is stored in `data.txt`, where uppercase and lowercase letters have been rotated by 13 positions (ROT13).

## 🛠️ Commands Used

```bash
ssh -p 2220 bandit11@bandit.labs.overthewire.org
cat data.txt
tr 'A-Za-z' 'N-ZA-Mn-za-m' < data.txt
# Alternative:
cat data.txt | tr 'A-Za-z' 'N-ZA-Mn-za-m'
```

## 💻 Solution

Decode the ROT13 text with `tr`:

```bash
tr 'A-Za-z' 'N-ZA-Mn-za-m' < data.txt
```

The translated output is the password for `bandit12`.

## 🧠 Explanation

`tr` translates characters from one set to another. The mapping `A-Za-z` → `N-ZA-Mn-za-m` implements ROT13.

## 📚 What I Learned

ROT13, character translation, redirection, and pipes.

---

## 📖 Detailed Medium Write-up

[Read the complete Medium walkthrough](https://medium.com/@iamkapilsaini/overthewire-bandit-complete-walkthrough-levels-0-to-11-a5c157ab7b71)

> This GitHub page is a level-by-level version of my original Medium walkthrough.
