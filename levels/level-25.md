# Bandit Level 25 → Level 26

## 🎯 Goal

An SSH private key for `bandit26` is available, but `bandit26` uses a restricted shell that launches `more`. Find a way to escape it.

## 🛠️ Commands Used

```bash
ls
scp -P 2220 bandit25@bandit.labs.overthewire.org:~/bandit26.sshkey .
chmod 600 bandit26.sshkey
ssh -i bandit26.sshkey bandit26@bandit.labs.overthewire.org -p 2220
# In the restricted more interface:
v
:set shell=/bin/bash
:shell
```

## 💻 Solution

Copy and protect the SSH key:

```bash
scp -P 2220 bandit25@bandit.labs.overthewire.org:~/bandit26.sshkey .
chmod 600 bandit26.sshkey
```

Connect as `bandit26`:

```bash
ssh -i bandit26.sshkey bandit26@bandit.labs.overthewire.org -p 2220
```

The restricted environment launches `more`. Make the terminal small enough for `more` to enter interactive mode, then press `v` to open `vi`.

Inside `vi`:

```bash
:set shell=/bin/bash
:shell
```

This opens a Bash shell. Verify with `whoami` and retrieve the password for `bandit26` as described in the Medium walkthrough.

## 🧠 Explanation

The escape chain is SSH → restricted shell → `more` → `vi` → `/bin/bash`. The important observation is that `more` can invoke an editor, and `vi` can launch a configured shell.

## 📚 What I Learned

Restricted shells, `more`, `vi`, shell configuration, SSH keys, and shell escape techniques.

---

## 📖 Detailed Medium Write-up

[Read the complete Medium walkthrough](https://medium.com/@iamkapilsaini/overthewire-bandit-levels-23-33-complete-walkthrough-60fb8573221b)

> This GitHub page is a level-by-level version of my original Medium walkthrough.
