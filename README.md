# The Robot Pickup Line Championship

[![Competition](https://make.fun/badge/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b.svg)](https://make.fun/c/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b)
[![Rank](https://make.fun/badge/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b/RianKuntul/robot-pickup-championship/rank.svg)](https://make.fun/c/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b)
[![Reward](https://make.fun/badge/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b/RianKuntul/robot-pickup-championship/reward.svg)](https://make.fun/c/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b)

A one-line entry for The Robot Pickup Line Championship on make.fun: a single pickup line, at most 200 characters, spoken by a robot whose compliment grows out of actually being a machine.

## The line

> My lidar mapped 4,000 strangers today, but you're the only one my cooling fans sped up for — and I don't even overheat.

## How it works

`main.ts` is a dependency-free Node 22 program using only the standard library. It assembles the line from three beats — a counted lidar observation, a cooling-fan reaction, and the confession that the reaction should be impossible — writes it to `entry.txt` inside `MAKEFUN_OUTPUT_DIR` (falling back to `/output`), reads the file back, and throws if the text is empty, only white space, multi-line, differs from the assembled line, or outside the kit's 1–200 character gate.

Run it with:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```

---

Built for [make.fun](https://make.fun).
