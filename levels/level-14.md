# Bandit Level 14 → Level 15

## 🎯 Goal

Submit the current password to the service listening on `localhost:30000`.

## 🛠️ Commands Used

```bash
ssh -p 2220 bandit14@bandit.labs.overthewire.org
echo <password> | nc localhost 30000
```

## 💻 Solution

Send the current password directly to the local TCP service:

```bash
echo <password> | nc localhost 30000
```

The service responds with `Correct!` and the password for the next level.

## 🧠 Explanation

`nc` (Netcat) can create a TCP connection. Piping `echo` into `nc` sends the password as the service input.

## 📚 What I Learned

Localhost networking, TCP services, Netcat, and pipes.

---

## 📖 Detailed Medium Write-up

[Read the complete Medium walkthrough](https://medium.com/@iamkapilsaini/overthewire-bandit-levels-12-22-complete-walkthrough-2b8f8d5696e8)

> This GitHub page is a level-by-level version of my original Medium walkthrough.
