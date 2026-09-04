# Bandit Level 16 → Level 17

## 🎯 Goal

Find the correct SSL service in the range `31000–32000`, obtain the private SSH key it returns, and use that key to authenticate as `bandit17`.

## 🛠️ Commands Used

```bash
ssh -p 2220 bandit16@bandit.labs.overthewire.org
nmap -sV -p 31000-32000 localhost
ncat --ssl localhost <PORT>
# Save the returned key:
nano bandit17.key
chmod 600 bandit17.key
ssh -i bandit17.key -p 2220 bandit17@bandit.labs.overthewire.org
```

## 💻 Solution

Scan the port range:

```bash
nmap -sV -p 31000-32000 localhost
```

The Medium walkthrough identifies SSL candidates including `31518` and `31790`. Test the SSL services; the correct service returns an SSH private key. Save it as `bandit17.key`, restrict permissions, and authenticate with it.

## 🧠 Explanation

`nmap -sV` combines port scanning with service/version detection. The SSL service that returns the key is the intended target.

## 📚 What I Learned

Port scanning, service identification, TLS testing, SSH keys, and key permissions.

---

## 📖 Detailed Medium Write-up

[Read the complete Medium walkthrough](https://medium.com/@iamkapilsaini/overthewire-bandit-levels-12-22-complete-walkthrough-2b8f8d5696e8)

> This GitHub page is a level-by-level version of my original Medium walkthrough.
