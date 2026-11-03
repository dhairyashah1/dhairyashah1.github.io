// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Publications by categories in reversed chronological order. * indicates co-primary authors with equal contributions to the work.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Major research projects on ultra low-power wireless communication, battery-free sensing, and AI agents for embedded systems, with the publications and awards associated with each.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-awards-amp-media",
          title: "Awards &amp; Media",
          description: "Selected honors, fellowships, and media coverage of my research and collaborations.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/awards/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-graduated-with-a-b-tech-in-ece-rank-1-from-vjti-mumbai",
          title: 'Graduated with a B.Tech in ECE (Rank 1) from VJTI, Mumbai.',
          description: "",
          section: "News",},{id: "news-started-summer-internship-at-sens-lab-epfl-working-on-mmwave-communication-and-sensing",
          title: 'Started summer internship at SENS Lab, EPFL working on mmWave communication and sensing....',
          description: "",
          section: "News",},{id: "news-started-my-predoctoral-research-assistanship-at-nus-computing-working-with-the-weiser-group",
          title: 'Started my predoctoral research assistanship at NUS Computing, working with the WEISER Group....',
          description: "",
          section: "News",},{id: "news-presented-tunnelsense-at-ieee-rfid-24-held-at-mit-media-labs-usa",
          title: 'Presented TunnelSense at IEEE RFID ‘24 held at MIT Media Labs, USA.',
          description: "",
          section: "News",},{id: "news-continued-my-phd-journey-at-nus-after-receiving-several-great-grad-school-offers",
          title: 'Continued my PhD journey at NUS after receiving several great grad school offers!...',
          description: "",
          section: "News",},{id: "news-presented-lifi-ar-pixelgen-and-gatehaul-at-acm-mobicom-24-held-in-washington-dc-usa",
          title: 'Presented LiFi-AR, PixelGen and GateHaul at ACM MobiCom ‘24 held in Washington DC,...',
          description: "",
          section: "News",},{id: "news-started-summer-internship-at-nokia-bell-labs-uk-working-on-on-device-ai",
          title: 'Started summer internship at Nokia Bell Labs, UK working on on-device AI.',
          description: "",
          section: "News",},{id: "news-presented-audiocast-at-acm-ubicomp-25-held-in-espoo-finland",
          title: 'Presented AudioCast at ACM UbiComp ‘25 held in Espoo, Finland.',
          description: "",
          section: "News",},{id: "news-passed-my-phd-qualifying-exam-amp-gt-officially-a-doctoral-candidate-now",
          title: 'Passed my PhD Qualifying Exam -&amp;amp;gt; officially a doctoral candidate now!',
          description: "",
          section: "News",},{id: "news-m-was-accepted-as-full-paper-at-acm-mobisys-26-and-awarded-featured-paper-top-10-302",
          title: 'M² was accepted as Full Paper at ACM MobiSys ‘26 and awarded Featured...',
          description: "",
          section: "News",},{id: "news-presented-hilo-at-ieee-rfid-26-in-santa-fe-nm-usa",
          title: 'Presented HILO at IEEE RFID ‘26 in Santa Fe, NM, USA.',
          description: "",
          section: "News",},{id: "news-m-wins-best-poster-runner-up-at-acm-mobisys-26",
          title: 'M² wins Best Poster Runner-Up at ACM MobiSys’26!',
          description: "",
          section: "News",},{id: "news-i-was-awarded-the-nus-research-achievement-award-for-ay-25-26",
          title: 'I was awarded the NUS Research Achievement Award for AY 25/26!',
          description: "",
          section: "News",},{id: "news-m-wins-best-demo-honourable-mention-at-acm-ieee-islped-26-low-power-circuit-design-contest",
          title: 'M² wins Best Demo Honourable Mention at ACM/IEEE ISLPED ‘26 Low-Power Circuit Design...',
          description: "",
          section: "News",},{id: "news-audiocast-was-awarded-an-imwut-distinguished-paper-award",
          title: 'AudioCast was awarded an IMWUT Distinguished Paper Award!',
          description: "",
          section: "News",},{id: "news-presented-our-demo-on-low-power-audio-streaming-at-acm-mobicom-26-in-austin-tx-usa",
          title: 'Presented our demo on low-power audio streaming at ACM MobiCom ‘26 in Austin,...',
          description: "",
          section: "News",},{id: "news-visited-the-university-of-washington-seattle-hosted-by-prof-matt-reynolds",
          title: 'Visited the University of Washington, Seattle, hosted by Prof. Matt Reynolds.',
          description: "",
          section: "News",},{id: "projects-audiocast",
          title: 'AudioCast',
          description: "Sub-200 µW tags that broadcast data as FM audio over 130 m to any commodity FM receiver.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/audiocast/";
            },},{id: "projects-hilo",
          title: 'HILO',
          description: "Dual-band, microwatt-scale communication from a single tunnel-diode oscillator.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/hilo/";
            },},{id: "projects-li-fi-for-xr",
          title: 'Li-Fi for XR',
          description: "Networking AR/MR headsets through visible light, including spatially confined &quot;information spotlights&quot;.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/lifi-xr/";
            },},{id: "projects-loophil",
          title: 'LoopHIL',
          description: "LLM agents that build and debug wireless embedded systems with real hardware in the loop.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/loophil/";
            },},{id: "projects-m-microwatt-microwave-oscillator",
          title: 'M² — Microwatt Microwave Oscillator',
          description: "A 105 µW standalone microwave transceiver that needs no external carrier, unlike backscatter.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/m2/";
            },},{id: "projects-pixelgen",
          title: 'PixelGen',
          description: "Low-power embedded cameras for mixed reality, with a generative model standing in for the image sensor.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/pixelgen/";
            },},{id: "projects-battery-free-airtags",
          title: 'Battery-free AirTags',
          description: "Sticker-sized battery-free tags and gateways that backhaul sensor data over Apple&#39;s Find My network.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/sensetag/";
            },},{id: "projects-tunnelsense",
          title: 'TunnelSense',
          description: "Non-contact, low-power sensing from the resonant-frequency shifts of a tunnel-diode oscillator.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/tunnelsense/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%64%68%61%69%72%79%61@%75.%6E%75%73.%65%64%75", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=SPNdx_AAAAAJ", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/dhairya-j-shah", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/dhairyashah1", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/Dhairya110501", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
