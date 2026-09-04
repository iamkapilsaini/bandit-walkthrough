# Bandit Level 08 → Level 09

## 🎯 Goal

The password is the only line in `data.txt` that occurs exactly once.

## 🛠️ Commands Used

```bash
ssh -p 2220 bandit8@bandit.labs.overthewire.org
sort data.txt | uniq -u
```

## 💻 Solution

Sort the lines and then select the unique line:

```bash
sort data.txt | uniq -u
```

## 🧠 Explanation

`uniq` works correctly on adjacent duplicate lines, so sorting first groups identical lines together. `uniq -u` then prints the line that occurs once.

## 📚 What I Learned

Pipes, sorting, and finding unique values.

---

## 📖 Detailed Medium Write-up

[Read the complete Medium walkthrough](https://medium.com/@iamkapilsaini/overthewire-bandit-complete-walkthrough-levels-0-to-11-a5c157ab7b71)

> This GitHub page is a level-by-level version of my original Medium walkthrough.
