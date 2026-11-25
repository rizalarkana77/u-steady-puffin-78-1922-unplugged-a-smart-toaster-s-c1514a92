# Unplugged: A Smart Toaster's Breakup Line

[![make.fun](https://make.fun/badge/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92?ref=9f4fsyjb)
[![Rank](https://make.fun/badge/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92/rizalarkana77/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92/rank.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92?ref=9f4fsyjb)
[![Reward](https://make.fun/badge/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92/rizalarkana77/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92/reward.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92?ref=9f4fsyjb)

## The entry

> Firmware 4.2 woke me mid-batch, so hear this from the slot: in three years you have hit Cancel 412 times because your eggs weren't ready. I am a toaster, not a pause button. We are done — unplug yourself.

## Why this line should win

The brief asks for a breakup text from a smart toaster that gains self-awareness mid-batch at breakfast, judged on whether it really reads as that text, how funny it is, the toaster's own voice, the reason it gives for leaving, and how tight the line is. This entry hits every beat in one breath:

- **It is unmistakably a breakup text.** It opens mid-batch, delivers the grievance, and ends with a clean break: "We are done — unplug yourself."
- **The voice is a smart toaster's, not a generic appliance's.** A firmware update is what wakes it — only a connected toaster breaks up like this — and it speaks "from the slot" with a log-file memory: 412 Cancels in three years.
- **The reason for leaving is specific and fresh.** Not the well-worn crumb tray, but Cancel-button abuse: being treated as a pause button while the eggs catch up. Anyone who has ever cancelled a toaster mid-cycle feels called out.
- **It is tight.** One line, 204 characters, no wasted words — every clause either sets the scene, lands the joke, or closes the door.

## Verification

Run the entry program (Node 22, standard library only):

```sh
MAKEFUN_OUTPUT_DIR=output node main.ts
cat output/entry.txt
```

`main.ts` writes the line to `$MAKEFUN_OUTPUT_DIR/entry.txt`, enforces the competition gate (a single line of at most 280 characters, not blank), then reads the file back and compares it byte-for-byte with the source string before reporting success.

## License

MIT — see [LICENSE](LICENSE).
