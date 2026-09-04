# Bandit Level 21 → Level 22

## 🎯 Goal

A cron job automatically executes `/usr/bin/cronjob_bandit22.sh` as `bandit22`. Inspect the cron configuration and script to determine where the password is written.

## 🛠️ Commands Used

```bash
ssh -p 2220 bandit21@bandit.labs.overthewire.org
cd /etc/cron.d
ls
cat cronjob_bandit22
cat /usr/bin/cronjob_bandit22.sh
cat /tmp/<generated-file>
```

## 💻 Solution

Inspect the cron job:

```bash
cd /etc/cron.d
ls
cat cronjob_bandit22
```

Then inspect the script:

```bash
cat /usr/bin/cronjob_bandit22.sh
```

The script generates a temporary file containing the password. Read the generated file after determining its name.

## 🧠 Explanation

Cron schedules commands automatically. The important reasoning step is following the chain from cron configuration → script → generated output file.

## 📚 What I Learned

Cron, `/etc/cron.d`, shell scripts, redirection, and execution flow.

---

## 📖 Detailed Medium Write-up

[Read the complete Medium walkthrough](https://medium.com/@iamkapilsaini/overthewire-bandit-levels-12-22-complete-walkthrough-2b8f8d5696e8)

> This GitHub page is a level-by-level version of my original Medium walkthrough.
