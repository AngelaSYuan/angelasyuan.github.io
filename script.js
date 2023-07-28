const experiences = [
    {
      name: "EECS 183 TA",
      image: "../assets/183-image.png",
      techStack: "C++ • VSCode • XCode" ,
      description: "Holding office hours, weekly labs for 30 students, and writing exam questions. Selected out of 300 candidates.",
    },
    {
      name: "AiPi Solutions",
      image: "assets/aipi-image.jpeg",
      techStack: "React • Tailwind • Node.js • OpenAI",
      description: "Developing a full-stack web app for parsing NDA documents, providing feedback for revision.",
    },
    {
      name: "Jara",
      image: "assets/jara-image.png",
      techStack: "React • Tailwind • Node.js • OpenAI",
      description: "Defining 4 core product features & timeline for off-grid edtech device, and developing games feature.",
    },
    // Add more experiences as needed
    {
        name: "Atlas Digital Consulting Group",
        image: "assets/ad-internal-screenshot.png",
        techStack: "React • Tailwind • Node.js • OpenAI",
        description: "Defining 4 core product features & timeline for off-grid edtech device, and developing games feature.",
      },
  ];
  
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
  