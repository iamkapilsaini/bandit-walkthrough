# Bandit Level 12 → Level 13

## 🎯 Goal

The password is stored in `data.txt`, but it is a hexdump of a repeatedly compressed file. The task is to identify each format, extract it, and repeat until the actual text file is reached.

## 🛠️ Commands Used

```bash
ssh -p 2220 bandit12@bandit.labs.overthewire.org
cd /tmp
mkdir bandit12
cd bandit12
cp ~/data.txt .
xxd -r data.txt data
file data
mv data data.gz
gunzip data.gz
file data
# Continue identifying/extracting each layer
cat data8
```

## 💻 Solution

Create a temporary workspace and copy the hexdump:

```bash
cd /tmp
mkdir bandit12
cd bandit12
cp ~/data.txt .
```

Reverse the hexdump:

```bash
xxd -r data.txt data
file data
```

Use `file` after every extraction to determine the next format. The Medium walkthrough continues through gzip, bzip2 and tar layers until the final ASCII text is reached. The final file is read with `cat`.

## 🧠 Explanation

`xxd -r` reconstructs binary data from the hexdump. `file` identifies the current compression/archive type, so extraction can proceed without guessing. The workflow is: hexdump → binary → identify → extract → identify again → repeat → ASCII text.

## 📚 What I Learned

Hexdump conversion, file identification, repeated compression, gzip/bzip2/tar extraction.

---

## 📖 Detailed Medium Write-up

[Read the complete Medium walkthrough](https://medium.com/@iamkapilsaini/overthewire-bandit-levels-12-22-complete-walkthrough-2b8f8d5696e8)

> This GitHub page is a level-by-level version of my original Medium walkthrough.
