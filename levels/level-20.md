# Bandit Level 20 → Level 21

## 🎯 Goal

`suconnect` connects to a port supplied as an argument. It reads one line, compares it with the previous password, and if correct sends the password for `bandit21`.

## 🛠️ Commands Used

```bash
ssh -p 2220 bandit20@bandit.labs.overthewire.org
# Terminal 1
nc -l 1234
# Terminal 2
./suconnect 1234
```

## 💻 Solution

Use two terminals. In the first, start a listener:

```bash
nc -l 1234
```

In the second:

```bash
./suconnect 1234
```

Send the current `bandit20` password to the listener. `suconnect` verifies it and sends the next password back through the TCP connection.

## 🧠 Explanation

The listener acts as the server and `suconnect` as the client. This demonstrates a local TCP client/server exchange involving a SUID network program.

## 📚 What I Learned

Netcat listeners, TCP client/server communication, localhost networking, and SUID behavior.

---

## 📖 Detailed Medium Write-up

[Read the complete Medium walkthrough](https://medium.com/@iamkapilsaini/overthewire-bandit-levels-12-22-complete-walkthrough-2b8f8d5696e8)

> This GitHub page is a level-by-level version of my original Medium walkthrough.
