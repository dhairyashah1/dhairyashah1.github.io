---
layout: page
title: Projects
permalink: /projects/
description: Major research projects on ultra low-power wireless communication, battery-free sensing, and AI agents for embedded systems, with the publications and awards associated with each.
nav: true
nav_order: 3
display_categories:
  - Next-gen Low-power RF Transceivers
  - Battery-free Sensing & Backhaul
  - AI Agents for Embedded Systems
  - Mixed Reality & Optical Networking
---

<div class="projects">
{% for category in page.display_categories %}
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  {% if sorted_projects.size > 0 %}
  {% assign category_id = category | slugify %}
  <h2 class="project-category" id="{{ category_id }}">{{ category }}</h2>
  <div class="projects-grid">
    {% for project in sorted_projects %}
      {% include project_card.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endfor %}
</div>
