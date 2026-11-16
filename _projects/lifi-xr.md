---
layout: project
title: Li-Fi for XR
short_title: Li-Fi for XR
description: "Li-Fi receivers that bring location-specific content to spatial computing headsets"
img: assets/img/publication_preview/visiblebits.png
video: https://www.youtube.com/embed/RAiSScq1J4w
video_caption: VisibleBits demo at MobiCom '25
importance: 2
category: Mixed Reality & Optical Networking
year: 2025
venues:
  - ACM MobiCom '25 Demo
  - ACM MobiCom '24 S3 Workshop
links:
  - label: VisibleBits Demo
    url: /assets/pdf/visiblebits-mobicom25demo.pdf
    icon: fa-solid fa-file-pdf
  - label: Li-FiAR Paper
    url: /assets/pdf/lifiar-mobicom24s3.pdf
    icon: fa-solid fa-file-pdf
publications:
  - visiblebits_mobicom25demo
  - lifiar_mobicom24
---

Augmented- and mixed-reality headsets need frequent recharging because radio communication dominates their energy budget. Radio cannot easily tie information to a place: radio-based localization is computationally intensive and unsupported on commercial headsets. Data-carrying light (Li-Fi) stays where it falls and may be received with less power, but high-speed Li-Fi receivers are typically too complex for a power-constrained headset.

{% include project_figures.liquid layout="cols-2" images="lifiar_system.png|380, visiblebits_overview.png" caption="Li-FiAR streams images, audio and sensor data from a light source to a receiver on the headset (left). VisibleBits pairs a Li-Fi downlink with a Bluetooth uplink for acknowledgements (right)." %}

Li-FiAR, an early prototype, uses a coin-sized receiver with a simple threshold circuit, drawing under 50 mW, where earlier Li-Fi transceivers for headsets drew up to hundreds of mW. On a headset it received images error-free at 115.2 kbps up to 2.5 m from a ceiling-mounted LED. VisibleBits, a proof of concept built on it, creates *information spotlights*: cones of light that deliver exhibit-specific media to a Meta Quest 3 only while the wearer stands inside them.

Li-FiAR was presented at the S3 workshop at ACM MobiCom '24. VisibleBits was demonstrated at ACM MobiCom '25.
