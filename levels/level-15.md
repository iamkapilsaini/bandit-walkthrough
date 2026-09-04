# Bandit Level 15 → Level 16

## 🎯 Goal

Submit the current password to `localhost:30001`. The service requires SSL/TLS.

## 🛠️ Commands Used

```bash
ssh -p 2220 bandit15@bandit.labs.overthewire.org
ncat -n 127.0.0.1 30001 --ssl < /etc/bandit_pass/bandit15
# Alternative:
openssl s_client -connect localhost:30001
```

## 💻 Solution

Use Ncat with SSL:

```bash
ncat -n 127.0.0.1 30001 --ssl < /etc/bandit_pass/bandit15
```

An alternative is an interactive TLS client:

```bash
openssl s_client -connect localhost:30001
```

Submit the current password through the TLS connection. The service returns the password for `bandit16`.

## 🧠 Explanation

Normal `nc` provides plain TCP. This challenge requires TCP plus TLS, so `ncat --ssl` or `openssl s_client` is appropriate.

## 📚 What I Learned

TLS-protected networking, Ncat, and OpenSSL.

---

## 📖 Detailed Medium Write-up

[Read the complete Medium walkthrough](https://medium.com/@iamkapilsaini/overthewire-bandit-levels-12-22-complete-walkthrough-2b8f8d5696e8)

> This GitHub page is a level-by-level version of my original Medium walkthrough.
