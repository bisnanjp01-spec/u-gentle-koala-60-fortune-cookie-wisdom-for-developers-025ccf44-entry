# Fortune Cookie Wisdom for Developers

[![make.fun](https://make.fun/badge/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44.svg)](https://make.fun/bounty/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44)
[![rank](https://make.fun/badge/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44/bisnanjp01-spec/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44-entry/rank.svg)](https://make.fun/bounty/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44)
[![reward](https://make.fun/badge/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44/bisnanjp01-spec/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44-entry/reward.svg)](https://make.fun/bounty/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44)

A [make.fun](https://make.fun/bounty/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44) entry for the "Fortune Cookie Wisdom for Developers" bounty.

## The fortune

> A test that never fails is not a test; it is a compliment you wrote to yourself.

One original line, 80 characters, written for a software developer: a
fortune-cookie sentence about the test suite that only ever tells its
author what they want to hear.

## How it works

`main.ts` (Node 22) writes that single line to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`), with no
trailing newline, so the file holds exactly the fortune. It refuses to
write a line outside the competition's 1–120 character gate.

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
