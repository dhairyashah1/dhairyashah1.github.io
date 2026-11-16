---
layout: project
title: TunnelSense
short_title: TunnelSense
description: "Sub-100 µW non-contact RF sensor for sensing gestures and breathing rate"
img: assets/img/publication_preview/tunnelsense.png
# video: https://www.youtube.com/embed/VIDEO_ID   # or a local file, e.g. assets/video/m2.mp4
# video_caption: Demo video
importance: 1
category: Battery-free Sensing & Backhaul
year: 2024
venues:
  - IEEE RFID '24
  - ACM/IEEE IPSN '24 Poster
links:
  - label: Paper
    url: /assets/pdf/tunnelsense-rfid24.pdf
    icon: fa-solid fa-file-pdf
  - label: arXiv
    url: https://arxiv.org/abs/2405.09155
    icon: ai ai-arxiv
  - label: DOI
    url: https://doi.org/10.1109/RFID62091.2024.10582671
    icon: fa-solid fa-link
publications:
  - tunnelsense_rfid24
  - tunnelsense_ipsn24poster
---

Sensing motion without contact enables applications from vital-sign monitoring to machine-fault diagnosis. Radio-based sensors typically spend substantial energy emitting a strong radio wave, then must isolate the moving object's weak reflections from that stronger wave, which needs complex processing on sophisticated hardware.

{% include project_figures.liquid layout="cols-2" images="tunnelsense_concept.png, tunnelsense_breathing.png" caption="A person's breathing shifts the frequency of the nearby TunnelSense tag, which a receiver tracks (left). The measured frequency shift follows the ground-truth breathing signal (right)." %}

TunnelSense exploits the unstable frequency of a tunnel diode oscillator, a low-power radio-wave generator. Nearby objects behave as part of the resonant circuit that sets the emitted wave's frequency, so their motion shifts it. A low-cost off-the-shelf receiver tracks that shift, with no weak reflections to isolate. The oscillator runs under 100 µW from as little as 70 mV, low enough for harvested energy, and senses breathing up to 30 cm away.

TunnelSense was published at the IEEE International Conference on RFID 2024 and presented as a poster at ACM/IEEE IPSN '24.
