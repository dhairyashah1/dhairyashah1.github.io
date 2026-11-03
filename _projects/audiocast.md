---
layout: project
title: AudioCast
short_title: AudioCast
description: Sub-200 µW tags that broadcast data as FM audio over 130 m to any commodity FM receiver.
img: assets/img/publication_preview/audiocast_pcb.png
video: https://www.youtube.com/embed/Vu1L44KsKcY
video_caption: AudioCast demo
importance: 2
category: Next-gen Low-power RF Transceivers
year: 2025
venues:
  - ACM IMWUT '25
  - ACM UbiComp '25 Demo
  - ACM MobiSys '25 Demo
awards:
  - text: IMWUT Distinguished Paper Award
    url: https://www.ubicomp.org/ubicomp-iswc-2026/awards-all/
  - text: Featured by NUS Computing
    url: https://www.comp.nus.edu.sg/features/reimagining-connectivity-how-audiocast-delivers-ultra-low-power-wireless-communication-at-scale/
links:
  - label: Paper
    url: /assets/pdf/audiocast-imwut25.pdf
    icon: fa-solid fa-file-pdf
  - label: Code
    url: https://github.com/weiserlab/audiocast
    icon: fa-brands fa-github
  - label: DOI
    url: https://doi.org/10.1145/3729471
    icon: fa-solid fa-link
publications:
  - audiocast_imwut25
  - audiocast_ubicomp25demo
  - audiocast_mobisys25demo
---

Wireless connectivity remains a bottleneck for scalable, sustainable embedded deployments: the ISM bands are congested and conventional transmitters dominate a tag's energy budget. AudioCast sidesteps both problems by transmitting in the 88–108 MHz FM broadcast band, where path loss is at least 10x lower than at 2.4 GHz and where billions of FM receivers already exist.

A single tunnel-diode oscillator generates the carrier and is self-modulated with data encoded as baseband audio. The result is a frequency-modulated transmission that consumes under 200 µW yet travels over 130 m line-of-sight. Because the tag needs no external carrier or ambient signal, AudioCast defines a new class of *beyond-backscatter* transmitters that keep backscatter-like power consumption without its infrastructure dependence.

AudioCast was published in IMWUT 2025 and received a Distinguished Paper Award at UbiComp '26. It was demonstrated at MobiSys '25 and UbiComp '25, and was featured by NUS Computing.
