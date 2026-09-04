# Bandit Level 18 → Level 19

## 🎯 Goal

The password is stored in `readme`, but `.bashrc` logs the user out immediately after an interactive SSH session starts.

## 🛠️ Commands Used

```bash
ssh -p 2220 bandit18@bandit.labs.overthewire.org
ssh -p 2220 bandit18@bandit.labs.overthewire.org cat readme
```

## 💻 Solution

A normal interactive login disconnects with `Byebye!`. Instead, ask SSH to execute `cat readme` directly:

```bash
ssh -p 2220 bandit18@bandit.labs.overthewire.org cat readme
```

The command runs remotely without starting the normal interactive shell and prints the password for `bandit19`.

## 🧠 Explanation

Interactive SSH starts a shell that reads `.bashrc`; remote command execution can avoid the problematic interactive shell startup path.

## 📚 What I Learned

SSH remote command execution, shell startup files, and diagnosing forced logout.

---

## 📖 Detailed Medium Write-up

[Read the complete Medium walkthrough](https://medium.com/@iamkapilsaini/overthewire-bandit-levels-12-22-complete-walkthrough-2b8f8d5696e8)

> This GitHub page is a level-by-level version of my original Medium walkthrough.
