---
layout: project
title: AudioCast
short_title: AudioCast
description: "Sub-200 µW audio-broadcasting tags with range up to 130 m"
img: assets/img/projects/audiocast_field.jpg
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
  - text: Award coverage by NUS Computing
    url: https://www.comp.nus.edu.sg/bytes/imwut-distinguished-paper-award/
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

Transmitting is the most power-intensive task an embedded device performs. Backscatter tags cut power to microwatts by reflecting a carrier signal generated elsewhere, but they need a dedicated emitter nearby or strong ambient signals.

{% include project_figures.liquid images="audiocast_overview.png, audiocast_comparison.png|520" caption="AudioCast tags broadcast to mobile phones, commodity transceivers and car radios (top). Unlike ambient backscatter and injection-locked tunnel diode transmitters, AudioCast needs no emitter device (bottom)." %}

AudioCast generates its own carrier with a microwatt-scale tunnel diode oscillator, a design we call *beyond-backscatter*. A regulated bias circuit, isolator and shielding steady its drifting frequency without an external locking signal. Adding data encoded as audio tones to the bias voltage shifts that frequency, so the oscillator frequency-modulates itself without a modulator. In the underused FM broadcast band, where signals travel farther than in congested Wi-Fi bands, it reaches ordinary FM radios up to 130 m away in line of sight on under 200 µW, power comparable to backscatter.

AudioCast was published in ACM IMWUT 2025 and received an IMWUT Distinguished Paper Award. It was demonstrated at ACM MobiSys '25 and ACM UbiComp '25.
