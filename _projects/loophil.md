---
layout: project
title: LoopHIL
short_title: LoopHIL
description: "AI agents that build real wireless systems autonomously, with just hardware and no human in the loop"
img: assets/img/publication_preview/loophil.png
# video: https://www.youtube.com/embed/VIDEO_ID   # or a local file, e.g. assets/video/m2.mp4
# video_caption: Demo video
importance: 1
category: AI Agents for Embedded Systems
year: 2026
venues:
  - Preprint (under review)
  - ACM SIGCOMM '24 Poster
links:
  - label: arXiv
    url: https://arxiv.org/abs/2610.24231
    icon: ai ai-arxiv
  - label: Paper
    url: https://arxiv.org/pdf/2610.24231
    icon: fa-solid fa-file-pdf
publications:
  - loophil_26
  - llm_wireless_sigcomm24poster
---

AI agents already test firmware on one board, but wireless firmware can compile and run while a separate receiver rejects its packets. Agents cannot observe the spectrum, probe pins or measure power, so engineers verify each link.

{% include project_figures.liquid layout="cols-2" images="loophil_architecture.png, loophil_bench.png" caption="LoopHIL architecture: the agent drives the RF bench through typed tools, and instruments feed measurements back through independent checks (left). The hardware test bench used for evaluation (right)." %}

LoopHIL puts hardware instruments in the loop: a spectrum analyzer, logic analyzer and energy meter report what the radios actually do. It also develops a harness for the agent, with typed tools that drive a multi-device radio bench, transmit limits enforced in code, and a *verification ladder* that takes staged measurements independently of the agent and names the faulty device. Across six models and tasks up to backscatter (a tag reflecting an external signal to a commercial receiver), completion rises from 54% to 79% of runs versus the vendors' coding agents on the same hardware. Small models often report unmeasured results, so independent hardware checks remain necessary.

LoopHIL is a preprint under review (arXiv, 2026). The direction began with a poster at ACM SIGCOMM '24 on generating backscatter transmitter logic with a large language model.
