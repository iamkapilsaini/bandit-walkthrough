# Bandit Level 22 → Level 23

## 🎯 Goal

A cron job runs as `bandit23`. Its script calculates a filename from the username and an MD5 hash, then copies the user's password into `/tmp/<hash>`.

## 🛠️ Commands Used

```bash
ssh -p 2220 bandit22@bandit.labs.overthewire.org
cd /etc/cron.d
cat cronjob_bandit23
cat /usr/bin/cronjob_bandit23.sh
echo I am user bandit23 | md5sum | cut -d ' ' -f 1
cat /tmp/8ca319486bfbbc3663ea0fbe81326349
```

## 💻 Solution

Inspect the script:

```bash
cat /usr/bin/cronjob_bandit23.sh
```

The important logic is:

```bash
myname=$(whoami)
mytarget=$(echo I am user $myname | md5sum | cut -d ' ' -f 1)
cat /etc/bandit_pass/$myname > /tmp/$mytarget
```

Because the cron job runs as `bandit23`, calculate:

```bash
echo I am user bandit23 | md5sum | cut -d ' ' -f 1
```

The Medium walkthrough obtains:

`8ca319486bfbbc3663ea0fbe81326349`

Then read the generated file:

```bash
cat /tmp/8ca319486bfbbc3663ea0fbe81326349
```

## 🧠 Explanation

The vulnerability is in the predictable filename derived from the execution identity. Understanding the script is more important than guessing the filename.

## 📚 What I Learned

Reading cron scripts, MD5 hashing, `whoami`, `cut`, and following automated execution.

---

## 📖 Detailed Medium Write-up

[Read the complete Medium walkthrough](https://medium.com/@iamkapilsaini/overthewire-bandit-levels-12-22-complete-walkthrough-2b8f8d5696e8)

> This GitHub page is a level-by-level version of my original Medium walkthrough.
