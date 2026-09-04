# Bandit Level 26 → Level 27

## 🎯 Goal

After escaping to a Bash shell as `bandit26`, use the SUID binary `bandit27-do` to retrieve the password for `bandit27`.

## 🛠️ Commands Used

```bash
ls -l
./bandit27-do whoami
./bandit27-do cat /etc/bandit_pass/bandit27
```

## 💻 Solution

Run the SUID binary:

```bash
./bandit27-do whoami
```

Then read the protected password file through it:

```bash
./bandit27-do cat /etc/bandit_pass/bandit27
```

## 🧠 Explanation

The binary belongs to `bandit27` and has SUID set, so commands executed through it run with `bandit27` privileges.

## 📚 What I Learned

SUID permissions, privilege boundaries, and executing commands through privileged binaries.

---

## 📖 Detailed Medium Write-up

[Read the complete Medium walkthrough](https://medium.com/@iamkapilsaini/overthewire-bandit-levels-23-33-complete-walkthrough-60fb8573221b)

> This GitHub page is a level-by-level version of my original Medium walkthrough.
