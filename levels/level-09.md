# Bandit Level 09 → Level 10

## 🎯 Goal

The password is stored among human-readable strings in `data.txt`, following one or more `=` characters.

## 🛠️ Commands Used

```bash
ssh -p 2220 bandit9@bandit.labs.overthewire.org
strings data.txt | grep "==
```

## 💻 Solution

Extract printable strings and filter for the relevant pattern:

```bash
strings data.txt | grep "=="
```

## 🧠 Explanation

`strings` extracts printable character sequences from binary/non-text data. Piping to `grep` filters those strings.

## 📚 What I Learned

Readable strings, pipes, and filtering binary data.

---

## 📖 Detailed Medium Write-up

[Read the complete Medium walkthrough](https://medium.com/@iamkapilsaini/overthewire-bandit-complete-walkthrough-levels-0-to-11-a5c157ab7b71)

> This GitHub page is a level-by-level version of my original Medium walkthrough.
