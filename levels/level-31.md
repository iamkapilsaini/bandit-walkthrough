# Bandit Level 31 → Level 32

## 🎯 Goal

The challenge asks you to create `key.txt` containing `May I come in?`, force-add it despite `.gitignore`, commit it, and push it to the `master` branch.

## 🛠️ Commands Used

```bash
git clone ssh://bandit31-git@bandit.labs.overthewire.org:2220/home/bandit31-git/repo
cd repo
echo "May I come in?" > key.txt
cat key.txt
cat .gitignore
git add -f key.txt
git status
git config user.email "bandit31@localhost"
git config user.name "bandit31"
git commit -m "add key.txt"
git push origin master
```

## 💻 Solution

Create the required file:

```bash
echo "May I come in?" > key.txt
cat key.txt
```

The repository ignores `*.txt`, so normal `git add key.txt` will not stage it. Force-add it:

```bash
cat .gitignore
git add -f key.txt
git status
```

Configure the Git identity, commit, and push:

```bash
git config user.email "bandit31@localhost"
git config user.name "bandit31"
git commit -m "add key.txt"
git push origin master
```

The remote validates the file and responds with the password for `bandit32`.

## 🧠 Explanation

`git add -f` overrides ignore rules for the specific file. The remote repository performs the final validation.

## 📚 What I Learned

Git staging, `.gitignore`, force-adding, commits, Git identity, and pushing.

---

## 📖 Detailed Medium Write-up

[Read the complete Medium walkthrough](https://medium.com/@iamkapilsaini/overthewire-bandit-levels-23-33-complete-walkthrough-60fb8573221b)

> This GitHub page is a level-by-level version of my original Medium walkthrough.
