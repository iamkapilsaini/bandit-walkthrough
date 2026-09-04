# Bandit Level 17 → Level 18

## 🎯 Goal

`passwords.old` and `passwords.new` contain one changed line. The changed line in the new file is the password for `bandit18`.

## 🛠️ Commands Used

```bash
ssh -i bandit17.key -p 2220 bandit17@bandit.labs.overthewire.org
ls
diff passwords.old passwords.new
```

## 💻 Solution

List the files and compare them:

```bash
ls
diff passwords.old passwords.new
```

The changed line in the new file is the next password.

## 🧠 Explanation

`diff` compares files and highlights changes. The `>` line in the output is the changed content from the new file.

## 📚 What I Learned

File comparison with `diff` and interpreting change output.

---

## 📖 Detailed Medium Write-up

[Read the complete Medium walkthrough](https://medium.com/@iamkapilsaini/overthewire-bandit-levels-12-22-complete-walkthrough-2b8f8d5696e8)

> This GitHub page is a level-by-level version of my original Medium walkthrough.
