/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Dhairya Shah",
  title2: "Dhairya",
  logo_name: "dhairya.shah{}",
  nickname: "djshah / dhairya",
  full_name: "Dhairya Shah",
  subTitle:
    "Embedded Systems, Networked Systems, IoT and Wireless Communication Enthusiast",
  resumeLink:
    "https://drive.google.com/file/d/1CPx9sF3uSYC3JtuuTCKX0MuT0YudsMYj/view?usp=sharing",
  mail: "mailto:dhairyashah110501@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/dhairyashah1",
  linkedin: "https://www.linkedin.com/in/dhairya-j-shah/",
  gmail: "dhairyashah110501@gmail.com",
  gitlab: "https://gitlab.com/dhairyashah1",
  facebook: "https://www.facebook.com/dhairya.shah.110501/",
  twitter: "https://twitter.com/Dhairya110501",
  instagram: "https://www.instagram.com/dhaairya_shaah/",
};

const skills = {
  data: [
    {
      title: "Embedded Systems and Communications Researcher",
      fileName: "FullStackImg",
      skills: [
        "I am interested in developing low-power and efficient embedded communication systems for various applications. I have decent amount of research and industry experience. Currently, I'm working as a Research Assistant under Prof. Ambuj Varshney at the National University of Singapore. Previously, I have worked at EPFL, ETS Montreal and Espressif Systems.",
      ],
      softwareSkills: [
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: {
            color: "#FCC624",
          },
        },
        {
          skillName: "Arduino",
          fontAwesomeClassname: "simple-icons:arduino",
          style: {
            color: "#00959D",
          },
        },
        {
          skillName: "ESP-IDF",
          fontAwesomeClassname: "simple-icons:espressif",
          style: {
            color: "#E7352C",
          },
        },
        {
          skillName: "Raspberry-Pi",
          fontAwesomeClassname: "simple-icons:raspberrypi",
          style: {
            color: "#DF0067",
          },
        },
        {
          skillName: "KiCAD",
          fontAwesomeClassname: "simple-icons:kahoot",
          style: {
            color: "#F00FD0",
          },
        },
        {
          skillName: "Robot Operating System",
          fontAwesomeClassname: "simple-icons:ros",
          style: {
            color: "#5C7AEA",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        // {
        //   skillName: "Firefox",
        //   fontAwesomeClassname: "simple-icons:firefox",
        //   style: {
        //     color: "#FF7139",
        //   },
        // },
        // {
        //   skillName: "HTML5",
        //   fontAwesomeClassname: "simple-icons:html5",
        //   style: {
        //     color: "#E34F26",
        //   },
        // },
        // {
        //   skillName: "CSS3",
        //   fontAwesomeClassname: "fa-css3",
        //   style: {
        //     color: "#1572B6",
        //   },
        // },

        // {
        //   skillName: "PHP",
        //   fontAwesomeClassname: "simple-icons:php",
        //   style: {
        //     color: "#7377AD",
        //   },
        // },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        // {
        //   skillName: "NodeJS",
        //   fontAwesomeClassname: "simple-icons:node-dot-js",
        //   style: {
        //     color: "#339933",
        //   },
        // },
        {
          skillName: "Jekyll",
          fontAwesomeClassname: "simple-icons:jekyll",
          style: {
            color: "#D580FE",
          },
        },
        // {
        //   skillName: "MongoDB",
        //   fontAwesomeClassname: "simple-icons:mongodb",
        //   style: {
        //     color: "#439743",
        //   },
        // },
        // {
        //   skillName: "GraphQL",
        //   fontAwesomeClassname: "simple-icons:graphql",
        //   style: {
        //     color: "#DE33A6",
        //   },
        // },
        // {
        //   skillName: "Android",
        //   fontAwesomeClassname: "simple-icons:android",
        //   style: {
        //     color: "#3DDC84",
        //   },
        // },

        {
          skillName: "Kotlin",
          fontAwesomeClassname: "simple-icons:kotlin",
          style: {
            color: "#3FDC94",
          },
        },
        // {
        //   skillName: "Java",
        //   fontAwesomeClassname: "simple-icons:java",
        //   style: {
        //     color: "#f89820",
        //   },
        // },
        // {
        //   skillName: "Flutter",
        //   fontAwesomeClassname: "simple-icons:flutter",
        //   style: {
        //     color: "#02569B",
        //   },
        // },
        // {
        //   skillName: "Dart",
        //   fontAwesomeClassname: "simple-icons:dart",
        //   style: {
        //     color: "#29B0EE",
        //   },
        // },
        // {
        //   skillName: "Visual Basic",
        //   fontAwesomeClassname: "simple-icons:dot-net",
        //   style: {
        //     color: "#029FCE",
        //   },
        // },
        {
          skillName: "Flask",
          fontAwesomeClassname: "simple-icons:flask",
          style: {
            color: "#f8aa4b",
          },
        },
        // {
        //   skillName: "jQuery",
        //   fontAwesomeClassname: "simple-icons:jquery",
        //   style: {
        //     color: "#0865A6",
        //   },
        // },
        // {
        //   skillName: "Wordpress",
        //   fontAwesomeClassname: "simple-icons:wordpress",
        //   style: {
        //     color: "#207297",
        //   },
        // },
        // {
        //   skillName: "Apache",
        //   fontAwesomeClassname: "simple-icons:apache",
        //   style: {
        //     color: "#CA1A22",
        //   },
        // },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#25a0ff",
          },
        },
      ],
    },
    // {
    //   title: "Cloud Infra-Architecture",
    //   fileName: "CloudInfraImg",
    //   skills: [
    //     "• Experience working on multiple cloud platforms",
    //     "• Experience hosting and managing websites",
    //     "• Experience with Continuous Integration",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "AWS",
    //       fontAwesomeClassname: "simple-icons:amazonaws",
    //       style: {
    //         color: "#FF9900",
    //       },
    //     },
    //     {
    //       skillName: "Netlify",
    //       fontAwesomeClassname: "simple-icons:netlify",
    //       style: {
    //         color: "#38AFBB",
    //       },
    //     },
    //     {
    //       skillName: "Heroku",
    //       fontAwesomeClassname: "simple-icons:heroku",
    //       style: {
    //         color: "#6863A6",
    //       },
    //     },
    //     {
    //       skillName: "Firebase",
    //       fontAwesomeClassname: "simple-icons:firebase",
    //       style: {
    //         color: "#FFCA28",
    //       },
    //     },
    //     {
    //       skillName: "PostgreSQL",
    //       fontAwesomeClassname: "simple-icons:postgresql",
    //       style: {
    //         color: "#336791",
    //       },
    //     },
    //     {
    //       skillName: "MongoDB",
    //       fontAwesomeClassname: "simple-icons:mongodb",
    //       style: {
    //         color: "#47A248",
    //       },
    //     },
    //     {
    //       skillName: "Docker",
    //       fontAwesomeClassname: "simple-icons:docker",
    //       style: {
    //         color: "#1488C6",
    //       },
    //     },
    //     {
    //       skillName: "GitHub Actions",
    //       fontAwesomeClassname: "simple-icons:githubactions",
    //       style: {
    //         color: "#5b77ef",
    //       },
    //     },
    //   ],
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Veermata Jijabai Technological Institute",
      subtitle:
        "Bachelor of Technology (B.Tech) in Electronics and Telecommunication Engineering",
      score: "CGPA: 9.75/10 (University Rank: 1; Class Rank: 1/84)",
      logo_path: "vjti.png",
      alt_name: "VJTI",
      duration: "2019 - 2023",
      descriptions: [
        "• Relevant Coursework: Embedded Systems, Computer Networks, Microprocessors & Microcontrollers, Wireless Communications & Networks, C++ & Python Programming, Data Science, Data Structures & Algorithms, VLSI Design, Digital Signal Processing & Systems, E-Security, Electronic Circuit Analysis, Digital Circuit Design, etc.",
        // "• I have implemented several projects based on what I've learnt under my courses. ",
        "• Served as Jt. General Secretary of a premier student-led club, Society of Robotics and Automation, SRA-VJTI.",
        "• I have managed, mentored and co-conducted workshops, seminars and projects for over 400 students.",
        "• I have won several fellowships, schlolarshipas and awards throughout my Bachelor's journey",
      ],
      website_link: "https://vjti.ac.in/",
    },
    {
      title: "Vidyaniketan junior College of Science and Commerce",
      subtitle: "Junior College - 12th HSC",
      score: "Percentage: 87.54% (Top 5)",
      logo_path: "vnjc.png",
      alt_name: "VNJC",
      duration: "2017 - 2019",
      descriptions: [
        "• I have completed Junior College Science Courses - Physics, Chemistry, Mathematics, Computers and Electronics",
        "• I have implemented and emulated basic electronics concepts through mini projects. ",
        "• I stood amongst the Top 5 academic performers throughout in SCollege.",
      ],
      website_link: "http://vndc.co.in/",
    },
    {
      title: "Swami Vivekanand High School",
      subtitle: "Middle & High School - 10th SSC",
      score: "Percentage: 94.20% (Top 10)",
      logo_path: "svhs.jpg",
      alt_name: "SVHS",
      duration: "2005 - 2018",
      descriptions: [
        "• I have done basic schooling courses like Mathematics, Science, Political Sciences, History and Geography.",
        "• I stood amongst the Top 3 academic performers throughout in School.",
      ],
      website_link: "https://ves.ac.in/svhs/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "The 7th Delta International IIoT Automation Contest",
      subtitle: "Rank 2: Delta Electronics and CAA",
      logo_path: "delta.png",
      certificate_link:
        "https://drive.google.com/file/d/1QG4ctP3L4m6JQUih9E_W9G3mct7lJEPo/view?usp=sharing",
      alt_name: "Delta Cup",
      // color_code: "#f36c3d",
      color_code: "#007DFF",
    },
    {
      title: "All India Eyantra E-YRC Robotics Competition",
      subtitle: "Top 20: IIT Bombay",
      logo_path: "eyantra.png",
      certificate_link:
        "https://drive.google.com/file/d/11vtDenmyHMSrIlUbwuBrb28kRyyYPAcW/view?usp=sharing",
      alt_name: "E-yantra",
      color_code: "#19F043",
    },
    {
      title: "The Linux Foundation Mentorship Program",
      subtitle: "Shortlisted: RISC-V and Linux Foundation",
      logo_path: "lfx.png",
      certificate_link:
        "https://mentorship.lfx.linuxfoundation.org/mentee/5518b0ab-11cb-4781-8345-439d6db077a0",
      alt_name: "LFX",
      // color_code: "#f36c3d",
      color_code: "#FFF630",
    },
    //   title: "M0001: MongoDB Basics",
    //   subtitle: "MongoDB University",
    //   logo_path: "mongo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/12se6bMep48WXA1PlizTBAgCnW0GXM6wq/view?usp=sharing",
    //   alt_name: "MongoDB University",
    //   // color_code: "#2AAFED",
    //   color_code: "#47A048",
    // },
    // {
    //   title: "Hackathon",
    //   subtitle: "Hack The Mountains",
    //   logo_path: "hackathon1.svg",
    //   certificate_link:
    //     "https://drive.google.com/file/d/1Y-HT1flWDfeyfnfqVr3ubNgGIcnuUEYt/view?usp=sharing",
    //   alt_name: "hackathon",
    //   color_code: "#E2405F",
    // },
    // {
    //   title: "A300: Atlas Security",
    //   subtitle: "MongoDB University",
    //   logo_path: "mongo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/12u_tkvhgB-K2TIm-RDdJOwYbQ9ccqiqA/view?usp=sharing",
    //   alt_name: "MongoDB University",
    //   // color_code: "#F6B808",
    //   color_code: "#47A048",
    // },
    // {
    //   title: "Cyber Security & Cyber Forensics",
    //   subtitle: "Workshop at IIT Bombay",
    //   logo_path: "iit.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/12uAdjQC5LfrB1ODdxqIY181ugyyQhl-I/view?usp=sharing",
    //   alt_name: "Workshop",
    //   color_code: "#2AAFED",
    // },
    // {
    //   title: "MLH Local Hack Day: Build",
    //   subtitle: "Major League Hacking",
    //   logo_path: "mlh-logo.svg",
    //   certificate_link:
    //     "https://drive.google.com/file/d/1ws7g2Oepu76vDFir6SvR_emFAMSkB2ZQ/view?usp=sharing",
    //   alt_name: "Google",
    //   color_code: "#fe0037",
    // },
    // {
    //   title: "Hack20",
    //   subtitle: "Flutter International Hackathon",
    //   logo_path: "flutter.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/1JTd8pVlHbP0RVQYtfa4OZgJYGfdiCwM6/view?usp=sharing",
    //   alt_name: "Flutter International Hackathon",
    //   color_code: "#2AAFED",
    // },
    // {
    //   title: "Postman Student Expert",
    //   subtitle: "Postman",
    //   logo_path: "postman.png",
    //   certificate_link:
    //     "https://badgr.com/public/assertions/h2qevHs4SlyoHErJQ0mn2g",
    //   alt_name: "Postman",
    //   // color_code: "#f36c3d",
    //   color_code: "#fffbf3",
    // },
    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Research, Industrial Undertakings and Volunteership",
  description:
    "I have developed decent amount of experience through various research, industry and personal projects.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Research Experience",
      experiences: [
        {
          title: "Research Assistant, CS Department under Prof. Ambuj Varshney",
          company:
            "WEISER Group, School of Computing, National University of Singapore",
          company_url: "https://weiserlab.github.io/ambuj/",
          logo_path: "nus.png",
          duration: "Nov 2023 - Present",
          location: "Singapore",
          descriptions: [
            "• Leading the design, development and testing of ultra low-power RF communication & mobile systems",
            "• Developed a low-power embedded-AI camera system. Publication under review at ACM MobiSys 2024",
            "• Successfully developed a low-power FM radio transceiver system using commodity MCUs without extensive, hardware overhead achieving a range of 30 - 40 m. Publication under review at ACM CoNEXT 2024.",
          ],
          // "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Application and it's Admin panel Backend as well as on Ocean Inventory Admin Front-end using React and also worked on Walo Admin Backend.",
          color: "#0071C5",
        },
        {
          title: "Summer@EPFL Research Intern under Prof. Haitham Al Hassanieh",
          company: "SENS Lab, École Polytechnique Fédérale de Lausanne",
          company_url: "https://www.epfl.ch/labs/sens/",
          logo_path: "epfl.png",
          duration: "Jun 2023 - Sept 2023",
          location: "Lausanne, Switzerland",
          descriptions: [
            "• Spearheaded the design, development, & calibration of a software-defined radio system using a phased-array antenna frontend and USRP backend for Joint Communication & Sensing on mmWave GHz frequencies",
            "• Designed various beam books for generating beam patterns concentric to specific beam transmission angles",
            "• Achieved fast beam steering over 63 antenna beams in just 1.26 seconds i.e 20 ms/beam",
            "• Awarded fellowship through the highly selective Summer@EPFL program being top 1% of all applicants",
          ],
          color: "#ee3c26",
        },
        {
          title: "Mitacs Globalink Research Intern under Prof. Jérémie Voix",
          company: "CRITIAS Lab, École de Technologie Supérieure ÉTS",
          company_url: "http://critias.etsmtl.ca/",
          logo_path: "ets_mtl.png",
          duration: "May 2022 - Aug 2022",
          location: "Montreal, Canada",
          descriptions: [
            "• Developed a real-time, multi-stream synchronization platform for bio-sensor data—audio, ECG, PPG, etc.",
            "• Integrated and co-designed BramsBioBox —a network of Raspberry Pi, Teensy, & ESP32 over WiFi to study the acoustic aspects and neurological states of several musicians in an orchestra",
            "• Awarded the Mitacs Globalink Research Fellowship and Graduate Fellowship worth US $11000",
            "• Contributed to publishing a Research Paper in the Canadian Acoustics Journal—AWC 2022",
          ],
          color: "#ee3c26",
        },
        {
          title: "Automation and IIoT Research Intern under Prof. Faruk Kazi",
          company: "Centre of Excellence: COE - CNDS Lab, VJTI",
          company_url: "https://vjti.ac.in/coe-cnds/",
          logo_path: "vjti.png",
          duration: "May 2021 - Dec 2021",
          location: "Mumbai, India",
          descriptions: [
            "• Created Pick, Sort, & Place Bot (PSP), a 3-axis gantry-based economical, industrial solution for automated pick-place and packaging using a 30% more efficient algorithm",
            "• Integrated software with a network of industrial automation components— PLC, HMI, IIoT router, etc",
            "• Achieved Rank 2 worldwide in the Delta Cup 2021 securing a US $25000+ hardware research grant",
          ],
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Industrial Experience",
      experiences: [
        {
          title: "Embedded Software Intern: Matter Protocol Development Team",
          company: "Espressif Systems India Pvt. Ltd.",
          company_url: "https://www.espressif.com/en",
          logo_path: "espressif.png",
          duration: "Dec 2022 - June 2023",
          location: "Pune, India",
          descriptions: [
            "• Provided firmware and SDK support for Espressif’s Matter enabled smart IoT devices",
            "• Solved existing issues in esp-matter and provided feature requests for matter devices",
          ],
          color: "#4285F4",
        },
        {
          title: "Open Source Developer: PLCT Lab, ISCAS",
          company: "The Linux Foundation Mentorship with RISC-V",
          company_url:
            "https://mentorship.lfx.linuxfoundation.org/project/fb9e1ba6-d6ed-40b5-82b5-ee1089ef050a",
          logo_path: "riscv.jpg",
          duration: "Sept 2021 - Nov 2021",
          location: "Mumbai, India",
          descriptions: [
            "• Worked on porting Spidermonkey’s Baseline JIT Compiler to RISC-V RV64GC ISA",
            "• Cross-compiled Spidermonkey— Mozilla Firefox’s JS & Web Engine on RV64GC Fedora Linux",
            "• Performed regression tests and benchmarked results using Octane, Kraken, SunSpider benchmarks on x86 and SiFive Unmatched004 RISC-V FPGA",
            // "• Solved existing issues in esp-matter and provided feature requests for matter devices",
          ],
          color: "#4285F4",
        },
        // {
        //   title: "Embedded Software Intern: Matter Protocol Development Team",
        //   company: "Magnes Motors Pvt. Ltd.",
        //   company_url: "https://www.espressif.com/en",
        //   logo_path: "espressif.png",
        //   duration: "Dec 2022 - June 2023",
        //   location: "Pune, India",
        //   descriptions: [
        //     "• Provided firmware and SDK support for Espressif’s Matter enabled smart IoT devices",
        //     "• Solved existing issues in esp-matter and provided feature requests for matter devices",
        //   ],
        //   color: "#4285F4",
        // },
        //   title: "Embedded Software Intern: Matter Protocol Development Team",
        //   company: "Magnes Motors Pvt. Ltd.",
        //   company_url: "https://www.espressif.com/en",
        //   logo_path: "espressif.png",
        //   duration: "Dec 2022 - June 2023",
        //   location: "Pune, India",
        //   descriptions: [
        //     "• Provided firmware and SDK support for Espressif’s Matter enabled smart IoT devices",
        //     "• Solved existing issues in esp-matter and provided feature requests for matter devices",
        //   ],
        //   color: "#4285F4",
        // },
        //   {
        //     title: "Campus Hustler",
        //     company: "Skillenza",
        //     company_url: "https://skillenza.com/",
        //     logo_path: "skillenza.png",
        //     duration: "Feb 2021 - Present",
        //     location: "Work from Home",
        //     description:
        //       "Spread Awareness of new Technologies and new Opportunities to Students and Grow Skillenza Community.",
        //     color: "#196acf",
        //   },
        //   {
        //     title: "GitHub Student Developer",
        //     company: "GitHub",
        //     company_url: "https://github.com/",
        //     logo_path: "github.png",
        //     duration: "Nov 2019 - Present",
        //     location: "Work from Home",
        //     description:
        //       "Contribute to Open Source Community and Open Source Project.",
        //     color: "#040f26",
        //   },
        //   {
        //     title: "Google Local Guide",
        //     company: "Google Map",
        //     company_url: "https://maps.google.com/localguides/",
        //     logo_path: "localguide.png",
        //     duration: "Sep 2018 - Present",
        //     location: "Work From Home",
        //     description:
        //       "Day-to-day responsibilities of helping local businesses to spread their business to the world. Helping users by writing reviews about different locations and spaces such as shops, malls, etc.",
        //     color: "#D83B01",
        //   },
        //   {
        //     title: "GDG Student Volunteer",
        //     company: "Google Developer Groups",
        //     company_url: "https://gdg.community.dev/",
        //     logo_path: "gdg.png",
        //     duration: "Feb 2021 - Present",
        //     location: "Work From Home",
        //     description:
        //       "Google Developer Group Surat Student Volunteer and Member.",
        //     color: "#D83B01",
        //   },
        //   {
        //     title: "E. F. I. Student Volunteer",
        //     company: "ENVIRONMENTALIST FOUNDATION OF INDIA",
        //     company_url: "https://indiaenvironment.org/",
        //     logo_path: "efi.png",
        //     duration: "Apr 2017 - Present",
        //     location: "Work From Home",
        //     description:
        //       "Take time out over weekends to join a gang of nation builders, nature enthusiasts to conserve what is left.",
        //     color: "#5a900f",
        //   },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "dhairya.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    //   title: "Blogs",
    //   subtitle:
    //     "I frequently write Blogs, tend to document my learnings and conclusions. View them here.",
    //   link: "",
    //   avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    //   {
    //     id: "0",
    //     name: "AutomateInstaPyBot",
    //     url: "https://github.com/harikanani/AutomateInstaPyBot",
    //     description:
    //       "This is Instagram Bot. This will login to your Instagram account. Follow Users, Unfollow Users, Remove Profile Photo",
    //     languages: [
    //       {
    //         name: "Python",
    //         iconifyClass: "logos-python",
    //       },
    //     ],
    //   },
    //   {
    //     id: "1",
    //     name: "react-twitter-clone",
    //     url: "https://github.com/harikanani/react-twitter-clone",
    //     description:
    //       "A React Twitter Clone UI with basic functionality such as make a Tweet.Embedded Profile Tweets and Share on Twitter.",
    //     languages: [
    //       {
    //         name: "HTML5",
    //         iconifyClass: "vscode-icons:file-type-html",
    //       },
    //       {
    //         name: "CSS3",
    //         iconifyClass: "vscode-icons:file-type-css",
    //       },
    //       {
    //         name: "React",
    //         iconifyClass: "logos-react",
    //       },
    //       {
    //         name: "Firebase",
    //         iconifyClass: "logos-firebase",
    //       },
    //     ],
    //   },
    //   {
    //     id: "2",
    //     name: "node-blockchain",
    //     url: "https://github.com/harikanani/node-blockchain",
    //     description:
    //       "A simple blockchain and cryptocurrency wallet implemented in Node.js and TypeScript (for learning purposes).",
    //     languages: [
    //       {
    //         name: "NodeJS",
    //         iconifyClass: "logos-nodejs",
    //       },
    //       {
    //         name: "TypeScript",
    //         iconifyClass: "logos-typescript",
    //       },
    //     ],
    //   },
    //   {
    //     id: "3",
    //     name: "top-crypto-gainers",
    //     url: "https://github.com/harikanani/top-crypto-gainers",
    //     description:
    //       "A top high price changed crypto coins wring 24 hoursA sound-classifier webapp made with ReactJS + TensorflowJS.",
    //     languages: [
    //       {
    //         name: "HTML5",
    //         iconifyClass: "vscode-icons:file-type-html",
    //       },
    //       {
    //         name: "CSS3",
    //         iconifyClass: "vscode-icons:file-type-css",
    //       },
    //       {
    //         name: "JavaScript",
    //         iconifyClass: "logos-javascript",
    //       },
    //       {
    //         name: "ReactJS",
    //         iconifyClass: "logos-react",
    //       },
    //     ],
    //   },
    //   {
    //     id: "4",
    //     name: "personal-portfolio",
    //     url: "https://github.com/harikanani/personal-portfolio",
    //     description:
    //       "A simple command line interface based quiz app to know more about me :).",
    //     languages: [
    //       {
    //         name: "JavaScript",
    //         iconifyClass: "logos-javascript",
    //       },
    //       {
    //         name: "NodeJS",
    //         iconifyClass: "logos-nodejs",
    //       },
    //     ],
    //   },
    //   {
    //     id: "3",
    //     name: "node_express_crud_api_starter",
    //     url: "https://github.com/harikanani/node_express_crud_api_starter",
    //     description: "Simple NodeJS Express CRUD Operations API starter.",
    //   languages: [
    //     {
    //       name: "NodeJS",
    //       iconifyClass: "logos-nodejs",
    //     },
    //   ],
    // },
    // {
    //   id: "4",
    //   name: "node-web-scrapper",
    //   url: "https://github.com/harikanani/node-web-scrapper",
    //   description:
    //     "A Simple web scrapper that scrap the information of amazon products such as price.It also scrap Wikipedia Data such as birthdate.",
    //   languages: [
    //     {
    //       name: "HTML5",
    //       iconifyClass: "vscode-icons:file-type-html",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "vscode-icons:file-type-css",
    //     },
    //     {
    //       name: "NodeJs",
    //       iconifyClass: "logos-nodejs",
    //     },
    //   ],
    // },
    // {
    //   id: "5",
    //   name: "harikanani.github.io",
    //   url: "https://github.com/harikanani/harikanani.github.io",
    //   description:
    //     "A Personal Portfolio Website that showcases my work and experience. which is hosted on Github Pages.",
    //   languages: [
    //     {
    //       name: "HTML5",
    //       iconifyClass: "vscode-icons:file-type-html",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "vscode-icons:file-type-css",
    //     },
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //     {
    //       name: "SCSS",
    //       iconifyClass: "vscode-icons:file-type-scss2",
    //     },
    //   ],
    // },
    // {
    //   id: "6",
    //   name: "Automate Attendace",
    //   url: "https://github.com/harikanani/Node_Python",
    //   description: "Automation of Online Attendance using node js and python",
    //   languages: [
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //   ],
    // },
    // {
    //   id: "7",
    //   name: "Automate Discord Bot",
    //   url: "https://github.com/harikanani/AutomateDiscordBot",
    //   description:
    //     "A Discord Bot to send Automatic messages to serer channel in regular time difference.",
    //   languages: [
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "Python Selenium",
    //       iconifyClass: "logos-selenium",
    //     },
    //     {
    //       name: "Chromium Browser",
    //       iconifyClass: "openmoji-chromium",
    //     },
    //   ],
    // },
    // {
    //   id: "8",
    //   name: "Flask Blog",
    //   url: "https://github.com/harikanani/flask_blog",
    //   description: "A Simple Blog Web Application made using Flask Framework",
    //   languages: [
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "Flask",
    //       iconifyClass: "cib-flask",
    //     },
    //     {
    //       name: "HTML5",
    //       iconifyClass: "vscode-icons:file-type-html",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "vscode-icons:file-type-css",
    //     },
    //   ],
    // },
    // {
    //   id: "9",
    //   name: "Netflix top series",
    //   url: "https://github.com/harikanani/netflix-top-series",
    //   description: "List of Top Netflix Series which is deployed to vercel.",
    //   languages: [
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //     {
    //       name: "ReactJS",
    //       iconifyClass: "logos-react",
    //     },
    //     {
    //       name: "HTML5",
    //       iconifyClass: "logos-html-5",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "logos-css-3",
    //     },
    //   ],
    // },
    // {
    //   id: "10",
    //   name: "COVID-19 Tracker",
    //   url: "https://github.com/harikanani/Covid19TrackerReact",
    //   description:
    //     "Simple Covid-19 Tracker made using React and deployed to Vercel.",
    //   languages: [
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //     {
    //       name: "ReactJS",
    //       iconifyClass: "logos-react",
    //     },
    //     {
    //       name: "HTML5",
    //       iconifyClass: "logos-html-5",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "logos-css-3",
    //     },
    //   ],
    // },
    // {
    //   id: "11",
    //   name: "Food Order Static Website",
    //   url: "https://github.com/harikanani/food-order-website",
    //   description:
    //     "A simple static website related to food restaurants service. this is reasponsive as well.",
    //   languages: [
    //     {
    //       name: "HTML5",
    //       iconifyClass: "logos-html-5",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "logos-css-3",
    //     },
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //     {
    //       name: "PHP",
    //       iconifyClass: "logos-php",
    //     },
    //   ],
    // },
    // {
    //   id: "12",
    //   name: "NFT Launchpad",
    //   url: "https://deliquescent-cents.000webhostapp.com/",
    //   description: "NFT Launchpad crypto site portfolio",
    //   languages: [
    //     {
    //       name: "HTML5",
    //       iconifyClass: "logos-html-5",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "logos-css-3",
    //     },
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //     {
    //       name: "ReactJS",
    //       iconifyClass: "logos-react",
    //     },
    //   ],
    //   },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
