---
layout: project
title: PixelGen
short_title: PixelGen
description: Low-power embedded cameras for mixed reality, with a generative model standing in for the image sensor.
img: assets/img/publication_preview/pixelgen.png
# video: https://www.youtube.com/embed/VIDEO_ID   # or a local file, e.g. assets/video/m2.mp4
# video_caption: Demo video
importance: 1
category: Mixed Reality & Optical Networking
year: 2024
venues:
  - ACM MobiCom '24 ImmerCom Workshop
  - ACM/IEEE IPSN '24 Demo
awards:
  - text: Best Demo Runner-Up, IPSN '24
    url: https://ipsn.acm.org/2024/awards.html
links:
  - label: Paper
    url: /assets/pdf/pixelgen-mobicom24immercom.pdf
    icon: fa-solid fa-file-pdf
  - label: arXiv
    url: https://arxiv.org/abs/2402.03390
    icon: ai ai-arxiv
publications:
  - pixelgen_mobicom24
  - pixelgen_ipsn24demo
---

Conventional embedded cameras capture only visible light and spend most of their energy on the image sensor and on streaming pixels. PixelGen instead senses the environment with a handful of low-power sensors, including audio, magnetic and other modalities, and transmits that compact description at a fraction of the energy. A multimodal generative model on the receiving side reconstructs a rich visual representation, which can be viewed on a mixed-reality headset.

PixelGen was published at the ImmerCom workshop at MobiCom '24, and its demonstration received the Best Demo Runner-Up award at IPSN '24.
