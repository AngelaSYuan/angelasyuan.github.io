const experiences = [
    {
      name: "EECS 183 TA",
      image: "../assets/183-image.png",
      techStack: "C++ • VSCode • XCode",
      description: "Holding office hours, weekly labs for 30 students, and writing exam questions. Selected out of 300 candidates.",
      links: [
        {text: "Teaching Sample Video", url: "https://youtu.be/8KidiWn81Bg"},
        { text: "Learn More", url: "https://cse.engin.umich.edu/academics/undergraduate/undergraduate-resources-and-opportunities/instructional-assistant-hiring-process/" },
        // { text: "GitHub", url: "https://github.com/your-github-repo" },
      ],
    },
    
    {
      name: "Atlassian",
      image: "assets/atlassian-logo.png",
      techStack: "Typescript • Node.js • Splunk • AWS SQS • WireMock",
      description: "Worked on backend of Comet, a new project helping to automate Bitbucket CI pipelines.",
      links: [
      { text: "Learn about Bitbucket Pipelines", url: "https://support.atlassian.com/bitbucket-cloud/docs/get-started-with-bitbucket-pipelines/" },
    ],
    },
    // {
    //   name: "AiPi Solutions",
    //   image: "assets/aipi-image.jpeg",
    //   techStack: "React • Tailwind • Node.js • OpenAI",
    //   description: "Developing a full-stack web app for parsing NDA documents, providing feedback for revision.",
    //   links: [
    //     { text: "Learn More", url: "https://example.com/experience1" },
    //     { text: "GitHub", url: "https://github.com/your-github-repo" },
    //   ],
    // },
    {
      name: "Jara",
      image: "assets/jara-image.png",
      techStack: "React • Tailwind • Node.js • OpenAI",
      description: "Developed 4 core features for off-grid edtech device, and built flagship reinforcement learning feature.",
      links: [
      { text: "Video Overview", url: "https://youtu.be/nvXSoP0UP1I" },
      { text: "Final deliverable", url: "https://drive.google.com/file/d/1jspuCBrcr7aq_KdMp-6GMRCj5yWp33Sq/view?usp=sharing" },
    ],
    },
    // Add more experiences as needed
  ];
    // Add more experiences as needed
    // {
    //     name: "Atlas Digital Consulting Group",
    //     image: "assets/ad-internal-screenshot.png",
    //     techStack: "React • Tailwind • Node.js • OpenAI",
    //     description: "Defining 4 core product features & timeline for off-grid edtech device, and developing games feature.",
    //   },

  
function createExperienceCard(experience) {
  const card = document.createElement("div");
  card.classList.add("card");

  
    // Create and append the experience name
    const experienceName = document.createElement("div");
    experienceName.classList.add("experience-name");
    experienceName.textContent = experience.name;
    card.appendChild(experienceName);
  
    // Create and append the image container
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");
    const image = document.createElement("img");
    image.src = experience.image;
    image.alt = "Experience";
    imageContainer.appendChild(image);
    card.appendChild(imageContainer);
  
    // Create and append the tech stack
    const techStack = document.createElement("div");
    techStack.classList.add("tech-stack");
    techStack.textContent = experience.techStack;
    card.appendChild(techStack);
  
    // Create and append the description
    const description = document.createElement("div");
    description.classList.add("description");
    const descriptionText = document.createElement("p");
    descriptionText.textContent = experience.description;
    description.appendChild(descriptionText);
    card.appendChild(description);
  
  // Create and append the pop-up link

  const popupLink = document.createElement("div");
  popupLink.classList.add("popup-link");
  if (experience.links && experience.links.length > 0) {
    experience.links.forEach((link) => {
      const linkElement = document.createElement("a");
      linkElement.href = link.url;
      linkElement.textContent = link.text;
      linkElement.target = "_blank"; // Open link in a new tab
      popupLink.appendChild(linkElement);
    });
  }
  card.appendChild(popupLink);

  return card;
}
  
  function initializeExperienceSection() {
    const experienceContainer = document.getElementById("experience-container");
    experiences.forEach((experience) => {
      const card = createExperienceCard(experience);
      experienceContainer.appendChild(card);
    });
  }
  
  document.addEventListener("DOMContentLoaded", initializeExperienceSection);
  

  
  /////PROJECTS SECTION/////
  const projectsData = [
    {
      name: "Unmute",
      imageSrc: '/assets/unmute.png',
      techStack: "Typescript • Flask • FFmpeg • Symphonic Labs API • MediaRecorder API",
      description: "Using lipreading technology, Unmute is designed for those private moments during video calls when you can't speak out loud, yet still want to fully participate in the conversation. (Note: Symphonic Labs' API is currently private, so some features may not be functional. Our website will be updated as soon as it is released publicly!)",
      links: [
        { text: "Website", url: "https://unmutenow.co/" },
        { text: "Figma", url: "https://www.figma.com/design/4ZLrmRjBBC1b9w1KkYkChE/Hack-the-North?node-id=0-1&node-type=canvas&t=EC7XpGGIbgTyZpHB-0"},
        { text: "Devpost", url: "https://devpost.com/software/unmute-speak-even-when-you-can-t" },
      ],
    },
    {
      name: "Applicant Recruiting Dashboard",
      imageSrc: '/assets/ad-internal-feedback.png',
      techStack: "React • Javascript • Firebase",
      description: "Internal recruiting tool for Atlas Digital, UMich's premier tech consulting club. Building portals for students to submit essay responses, club members to provide feedback, and board members to calculate average grades for applicants & manage final offers.",
      links: [
         { text: "Website", url: "https://www.portal.atlasdigital.org/" },
        // { text: "GitHub", url: "https://github.com/your-github-repo" },
      ],
    },
    {
      name: "V1 Startup Directory",
      imageSrc: "/assets/v1-SRMS.png",
      techStack: "React • Python • SQL • Supabase • Next.js",
      description: "Building the go-to place for UMich student startups & projects. Developing the Supabase schema -> adding in middleware routes with V1's API -> ability for verified students to post their startups.",
      links: [
        { text: "Learn More", url: "https://v1michigan.com/" },
        { text: "GitHub", url: "https://github.com/V1Michigan" },
      ],
    },
    // Add more projects here if needed
    {
      name: "PantryPuzzle",
      imageSrc: "/assets/hackmit.png",
      techStack: "React • Python • OpenAI",
      description: "1st place in sustainability track at hackMIT. Full-stack platform addressing food waste in homes/grocery stores, integrated computer vision OCR to identify food items and parse expiration dates, and OpenAI GPT-3 DaVinci for recipe generation. Notified about nearly expired foods, and auto-populated nearby non-profits for food donations. ",
      links: [
        { text: "Devpost", url: "https://devpost.com/software/pantrypuzzle" },
        { text: "GitHub", url: "https://github.com/gaurab1/PantryPuzzle/tree/main" },
        { text: "Demo", url: "https://youtu.be/L6nTEobtefs" },
      ],
    },
  ];
  
  // Function to create project cards
  function createProjectCard(project) {
    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card");
  
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");
    const projectImage = document.createElement("img");
    projectImage.src = project.imageSrc;
    projectImage.alt = project.name;
    imageContainer.appendChild(projectImage);
  
    const projectName = document.createElement("div");
    projectName.classList.add("project-name");
    projectName.textContent = project.name;
  
    const techStack = document.createElement("div");
    techStack.classList.add("tech-stack-project");
    techStack.textContent = project.techStack;
  
    const description = document.createElement("div");
    description.classList.add("description-project");
    const descriptionText = document.createElement("p");
    descriptionText.textContent = project.description;
    description.appendChild(descriptionText);
  
    projectCard.appendChild(imageContainer);
    projectCard.appendChild(projectName);
    projectCard.appendChild(techStack);
    projectCard.appendChild(description);
  

//add project link
const popupLink = document.createElement("div");
popupLink.classList.add("popup-link");
if (project.links && project.links.length > 0) {
  project.links.forEach((link) => {
    const linkElement = document.createElement("a");
    linkElement.href = link.url;
    linkElement.textContent = link.text;
    linkElement.target = "_blank"; // Open link in a new tab
    popupLink.appendChild(linkElement);
  });
}
  projectCard.appendChild(popupLink);

  return projectCard;
}
  
  // Function to add projects to the DOM
  function populateProjects(projectsData) {
    const projectsSection = document.getElementById("projects-section");
    projectsData.forEach((project) => {
      const projectCard = createProjectCard(project);
      projectsSection.appendChild(projectCard);
    });
  }
  
  // Call the function to populate projects
  populateProjects(projectsData);
  
  //For smooth scrolling, menu bar part
  document.querySelector('.nav-links').addEventListener('click', function(event) {
    if (event.target.tagName === 'A' && event.target.getAttribute('href').startsWith('#')) {
      event.preventDefault();
      const href = event.target.getAttribute('href');
      if (href === '#work-header') {
        const targetElement = document.querySelector(href);
        const offsetTop = targetElement.getBoundingClientRect().top;
        const navbarHeight = document.querySelector('.menu').offsetHeight;
        const scrollPosition = offsetTop + window.scrollY - navbarHeight;
    
        window.scroll({
          top: scrollPosition,
          behavior: 'smooth'
        });
      }
    }
  });
  
