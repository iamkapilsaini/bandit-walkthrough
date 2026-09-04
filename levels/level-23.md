# Bandit Level 23 → Level 24

## 🎯 Goal

A cron process executes `/usr/bin/cronjob_bandit24.sh` every minute as `bandit24`. Create a script that the cron job will execute to retrieve the password for `bandit24`.

## 🛠️ Commands Used

```bash
ssh -p 2220 bandit23@bandit.labs.overthewire.org
cd /etc/cron.d
ls
cat cronjob_bandit24
cat /usr/bin/cronjob_bandit24.sh
mkdir -p /tmp/bandit24
nano /tmp/bandit24/getpass.sh
chmod +x /tmp/bandit24/getpass.sh
cp /tmp/bandit24/getpass.sh /var/spool/bandit24/foo/
```

## 💻 Solution

Inspect the cron configuration and script:

```bash
cd /etc/cron.d
cat cronjob_bandit24
cat /usr/bin/cronjob_bandit24.sh
```

Create a working directory and a script that reads the `bandit24` password and writes it somewhere accessible. Make it executable and place it where the cron job executes files.

The key idea from the Medium walkthrough is to exploit the cron execution context: the script runs as `bandit24`, so it can read `/etc/bandit_pass/bandit24`.

## 🧠 Explanation

The cron job executes files from a directory writable by the lower-privileged user. A user-controlled executable therefore runs with the cron job's higher privilege context.

## 📚 What I Learned

Cron exploitation concepts, Bash scripting, `chmod +x`, temporary directories, and execution context.

---

## 📖 Detailed Medium Write-up

[Read the complete Medium walkthrough](https://medium.com/@iamkapilsaini/overthewire-bandit-levels-23-33-complete-walkthrough-60fb8573221b)

> This GitHub page is a level-by-level version of my original Medium walkthrough.
