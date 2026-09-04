# Bandit Level 13 → Level 14

## 🎯 Goal

The password for `bandit14` is stored in `/etc/bandit_pass/bandit14`, but it can only be read by `bandit14`. A private SSH key is provided.

## 🛠️ Commands Used

```bash
ssh -p 2220 bandit13@bandit.labs.overthewire.org
scp -P 2220 bandit13@bandit.labs.overthewire.org:sshkey.private .
chmod 600 sshkey.private
ssh -i sshkey.private bandit14@bandit.labs.overthewire.org -p 2220
cat /etc/bandit_pass/bandit14
```

## 💻 Solution

Copy the private key:

```bash
scp -P 2220 bandit13@bandit.labs.overthewire.org:sshkey.private .
```

Restrict its permissions:

```bash
chmod 600 sshkey.private
```

Use it for SSH authentication as `bandit14`:

```bash
ssh -i sshkey.private bandit14@bandit.labs.overthewire.org -p 2220
```

Then read the protected password file.

## 🧠 Explanation

SSH public/private key authentication allows access without entering the target account's password. Private keys should have restrictive permissions.

## 📚 What I Learned

SSH keys, `scp`, `chmod`, and protected file access.

---

## 📖 Detailed Medium Write-up

[Read the complete Medium walkthrough](https://medium.com/@iamkapilsaini/overthewire-bandit-levels-12-22-complete-walkthrough-2b8f8d5696e8)

> This GitHub page is a level-by-level version of my original Medium walkthrough.
