# Bandit Level 19 → Level 20

## 🎯 Goal

A SUID binary named `bandit20-do` exists in the home directory. Use it to access `/etc/bandit_pass/bandit20`.

## 🛠️ Commands Used

```bash
ssh -p 2220 bandit19@bandit.labs.overthewire.org
ls -l
./bandit20-do cat /etc/bandit_pass/bandit20
```

## 💻 Solution

Inspect the binary:

```bash
ls -l
```

Execute `cat` through it:

```bash
./bandit20-do cat /etc/bandit_pass/bandit20
```

The SUID binary runs with the file owner's privileges and can therefore read the protected password file.

## 🧠 Explanation

SUID (Set User ID) makes an executable run with the privileges of its owner. Here the owner is `bandit20`, allowing the binary to read the `bandit20` password.

## 📚 What I Learned

SUID, Linux permissions, privilege boundaries, and privileged command execution.

---

## 📖 Detailed Medium Write-up

[Read the complete Medium walkthrough](https://medium.com/@iamkapilsaini/overthewire-bandit-levels-12-22-complete-walkthrough-2b8f8d5696e8)

> This GitHub page is a level-by-level version of my original Medium walkthrough.
