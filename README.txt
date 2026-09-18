Poker Hand Recorder PWA

Files:
- index.html
- manifest.webmanifest
- sw.js
- icon-192.png
- icon-512.png

To install on iPhone:
1. Host these files on any HTTPS web host.
2. Open the site in Safari.
3. Tap Share.
4. Tap Add to Home Screen.
5. Launch Poker Hands from the new Home Screen icon.

The app stores saved hands locally on the device using browser storage and can work offline after first launch.

Card entry format:
- Enter ranks first, followed by suits: AJ5ccs.
- Suit letters are c, h, s, and d.
- Enter the cumulative five-card board in one field: AJK49ccsdh.
- Saved output splits that into flop AJKccs, turn 4d, and river 9h.
- The same cards appear live beside the Flop, Turn, and River section headings while recording.

Chip output:
- Record stack sizes and typed action amounts in BB.
- Saved and exported hands convert BB amounts to chips using the second blind value.
- Example: 500/1k/1k treats 1 BB as 1,000 chips.
