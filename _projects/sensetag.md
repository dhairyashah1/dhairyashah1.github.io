---
layout: project
title: Battery-free AirTags
short_title: Battery-free AirTags
description: "Commodity battery-free tags for location tracking and sensing through Apple's Find My network"
img: assets/img/publication_preview/sensetag.png
video: https://www.youtube.com/embed/UnxT9HFTJoQ
video_caption: GateHaul demo at MobiCom '24
importance: 2
category: Battery-free Sensing & Backhaul
year: 2026
venues:
  - ACM MobiSys '26 Demo
  - ACM MobiCom '24 Demo
links:
  - label: SenseTag Demo
    url: /assets/pdf/sensetag-mobisys26demo.pdf
    icon: fa-solid fa-file-pdf
  - label: GateHaul Demo
    url: /assets/pdf/gatehaul-mobicom24demo.pdf
    icon: fa-solid fa-file-pdf
publications:
  - sensetag_mobisys26demo
  - gatehaul_mobicom24demo
---

Hundreds of millions of Apple devices relay AirTag broadcasts worldwide. But AirTags report only location, and their active Bluetooth radios need coin-cell batteries. Backscatter transmits at microwatts by reflecting a nearby emitter's radio signal, yet typically needs dedicated receivers, called gateways.

{% include project_figures.liquid images="sensetag_system.png, gatehaul_system.png" caption="SenseTag backscatters Find My-compatible advertisements that nearby Apple devices relay to the owner (top). GateHaul provides the carrier signal, collects data from low-power transmitters and backhauls it over Find My (bottom)." %}

SenseTag, a work in progress toward battery-free tags, backscatters Find My-compatible packets, so passing Apple devices, not gateways, relay both location and sensor data such as temperature. Earlier Find My-based systems expose readings to eavesdroppers. SenseTag hides each reading in the tag's private key, and the owner finds it by testing one key per possible value. Reports arrived with a median delay of 2.1 min in a crowd and 12.8 min near a single Apple device. The prototype still needs a separate emitter. GateHaul, a separate low-cost gateway prototype, supplies that signal and forwards tag data over Find My.

SenseTag was demonstrated at ACM MobiSys '26, and GateHaul at ACM MobiCom '24.
