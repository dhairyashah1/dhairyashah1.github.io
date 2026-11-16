---
layout: project
title: PixelGen
short_title: PixelGen
description: "Low-power embedded AI camera for mixed reality"
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

Mixed-reality headsets show users their surroundings through cameras that see only what the user faces and rapidly drain the battery. Their power and bandwidth needs grow with resolution, so saving energy has often meant sacrificing detail.

{% include project_figures.liquid images="pixelgen_pipeline.png, pixelgen_architecture.png|560" caption="A PixelSense board, its low-resolution monochrome capture, the regenerated color image, and viewing on a headset (top). Conventional and PixelGen camera architectures (bottom)." %}

PixelGen moves the camera off the headset onto *PixelSense* boards around the user for wider coverage. Each pairs a low-resolution monochrome image sensor with environmental sensors (temperature, humidity, pressure, light), cutting power and bandwidth. A language model turns their readings into a text description of lighting and weather, which guides an image model in regenerating each frame at higher resolution. In initial experiments, 324 × 244 pixel frames captured at 13.2 mW became realistic 968 × 728 pixel color images matching the measured light.

PixelGen was published at the ImmerCom workshop at ACM MobiCom '24. Its demonstration at ACM/IEEE IPSN '24 won the Best Demo Runner-Up award.
