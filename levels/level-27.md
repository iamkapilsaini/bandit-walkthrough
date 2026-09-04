# Bandit Level 27 → Level 28

## 🎯 Goal

Clone the Git repository for `bandit27-git` and read the `README` to obtain the next password.

## 🛠️ Commands Used

```bash
mkdir -p /tmp/bandit27
cd /tmp/bandit27
git clone ssh://bandit27-git@bandit.labs.overthewire.org:2220/home/bandit27-git/repo
cd repo
ls
cat README
```

## 💻 Solution

Create a temporary workspace and clone the repository:

```bash
mkdir -p /tmp/bandit27
cd /tmp/bandit27
git clone ssh://bandit27-git@bandit.labs.overthewire.org:2220/home/bandit27-git/repo
```

Enter the repository and read `README`:

```bash
cd repo
ls
cat README
```

The password for the next level is revealed in the repository.

## 🧠 Explanation

Git repositories can be accessed over SSH using the repository-specific account and port.

## 📚 What I Learned

Git over SSH, cloning repositories, and inspecting repository contents.

---

## 📖 Detailed Medium Write-up

[Read the complete Medium walkthrough](https://medium.com/@iamkapilsaini/overthewire-bandit-levels-23-33-complete-walkthrough-60fb8573221b)

> This GitHub page is a level-by-level version of my original Medium walkthrough.
