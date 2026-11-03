---
layout: project
title: LoopHIL
short_title: LoopHIL
description: LLM agents that build and debug wireless embedded systems with real hardware in the loop.
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

Building a wireless embedded system today means juggling radio standards, network stacks, microcontrollers and sensors, a task that is largely reserved for experts. Large language models can write much of that code, but they cannot see whether it actually works on a board.

LoopHIL loops hardware into the agent. An LLM-assisted agent generates firmware and radio logic, flashes it to real devices, observes the outcome through instruments and the air interface, and iterates until the system behaves as specified. The preprint is currently under review.

The direction grew out of our SIGCOMM '24 poster, which showed that with the right prompting, state-of-the-art language models can already generate complex modulation and backscatter transmitter logic.
