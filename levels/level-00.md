# Bandit Level 00 → Level 01

## 🎯 Goal

The password for the next level is stored in a file called `readme` in the home directory. The objective is to find the password and use it to log in as `bandit1`.

## 🛠️ Commands Used

```bash
ssh -p 2220 bandit0@bandit.labs.overthewire.org
ls
cat readme
ssh -p 2220 bandit1@bandit.labs.overthewire.org
```

## 💻 Solution

Log in as `bandit0`:

```bash
ssh -p 2220 bandit0@bandit.labs.overthewire.org
```

After logging in, list the current directory:

```bash
ls
```

The file `readme` is present. Read it:

```bash
cat readme
```

The output is the password for `bandit1`. 

Use that password when connecting to the next level.


## 🧠 Explanation

`ssh` provides secure remote access, 

`ls` lists directory contents,

`cat` displays a file.


## 📚 What I Learned

SSH authentication, Linux navigation, file reading, and the basic Bandit workflow.

---

## 📖 Detailed Medium Write-up

[Read the complete Medium walkthrough](https://medium.com/@iamkapilsaini/overthewire-bandit-complete-walkthrough-levels-0-to-11-a5c157ab7b71)

> This GitHub page is a level-by-level version of my original Medium walkthrough.
