# Bandit Level 06 → Level 07

## 🎯 Goal

The password is somewhere on the server and belongs to user `bandit7`, group `bandit6`, and is exactly 33 bytes.

## 🛠️ Commands Used

```bash
ssh -p 2220 bandit6@bandit.labs.overthewire.org
find / -user bandit7 -group bandit6 -type f -size 33c 2>/dev/null
cat <path-to-file>
```

## 💻 Solution

Search from the filesystem root:

```bash
find / -user bandit7 -group bandit6 -type f -size 33c 2>/dev/null
```

Then read the matching file.

## 🧠 Explanation

`-user`, `-group`, and `-size` let `find` match ownership and size. `2>/dev/null` suppresses permission-denied messages.

## 📚 What I Learned

Linux ownership, groups, file size, and error redirection.

---

## 📖 Detailed Medium Write-up

[Read the complete Medium walkthrough](https://medium.com/@iamkapilsaini/overthewire-bandit-complete-walkthrough-levels-0-to-11-a5c157ab7b71)

> This GitHub page is a level-by-level version of my original Medium walkthrough.
