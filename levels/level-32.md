# Bandit Level 32 → Level 33

## 🎯 Goal

The `bandit32` shell converts commands to uppercase, preventing normal command execution. Escape the restriction and obtain the password for `bandit33`.

## 🛠️ Commands Used

```bash
ssh -p 2220 bandit32@bandit.labs.overthewire.org
$0
whoami
cat /etc/bandit_pass/bandit33
```

## 💻 Solution

Connect to the level and use the shell variable `$0`:

```bash
$0
```

This launches another shell instance. Verify the user:

```bash
whoami
```

Then read the password:

```bash
cat /etc/bandit_pass/bandit33
```

## 🧠 Explanation

`$0` represents the path/name of the current shell or script. Executing it starts another shell that is not subject to the same uppercase command transformation.

## 📚 What I Learned

Restricted shells, shell variables, `$0`, shell spawning, and shell escape behavior.

---

## 📖 Detailed Medium Write-up

[Read the complete Medium walkthrough](https://medium.com/@iamkapilsaini/overthewire-bandit-levels-23-33-complete-walkthrough-60fb8573221b)

> This GitHub page is a level-by-level version of my original Medium walkthrough.
