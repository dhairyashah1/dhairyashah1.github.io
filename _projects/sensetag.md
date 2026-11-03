---
layout: project
title: Battery-free AirTags
short_title: Battery-free AirTags
description: Sticker-sized battery-free tags and gateways that backhaul sensor data over Apple's Find My network.
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

Low-power transmitters only help if their data can reach the cloud, and specialised gateways are often the most expensive part of a deployment. This line of work uses crowd-sourced networks that already surround us as a free backhaul.

**GateHaul** (MobiCom '24 demo) is a low-cost gateway that supplies the carrier signal backscatter tags need, collects their data, and backhauls it over Apple's Find My network without any conventional Internet uplink.

**SenseTag** (MobiSys '26 demo) removes the gateway altogether. It is a sticker-form-factor, battery-free tag that uses backscatter to speak Find My's protocol, embedding sensor readings into the key-generation process so that both location and sensor data are recovered through Apple's network while staying hidden from passive BLE scanners.
