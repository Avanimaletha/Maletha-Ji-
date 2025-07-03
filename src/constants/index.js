import chat from "../assets/projects/chat.png";
import vizulization from "../assets/projects/vizulization.png"
import orbitus from "../assets/projects/orbitus.png"
import weather from "../assets/projects/weather.png"

export const EXPERIENCES = [
  {
    year: "2022-2024",
    role: "Web-Development Member",
    company: "CodeKrafters -",
    
    
  },
  {
    year: "2023-2024",
    role: "Core-Team Member",
    company: "Andropedia -",
    
    
  },
];

export const PROJECTS = [
   {
  title: "AWS-Vizualization",
  image: vizulization, 
  description: "A cloud-based dashboard that visualizes real-time AWS resource usage, cost trends, and performance metrics for smarter infrastructure management.",
  technologies: ["AWS", "S3", "QuickSight"],
  github: "https://github.com/Avanimaletha/AWS-Visualization-Quicksight",
  live: "aws-demo.mp4", 
},
  {
  title: "Orbit Us",
  image: orbitus,
  description: "Decentralised Drop Servicing Platform - Finding Freelancing work and create Job for free lancer.",
  technologies: ["React", "Tailwind", "Solidity","Web3"],
  github: "https://github.com/rachitdhaka/Drop-Service---Orbit-Us",
  live: "https://orbitus.vercel.app/", // also make 'Live' lowercase for consistency
},
  {
    title: "Chat-AI",
    image: chat,
    description: "An AI-powered real-time chat app built with React and Tailwind CSS.",
    technologies: ["Tailwind", "React","Gemini API"],
    github: "https://github.com/your-username/chat-ai",
    live: "https://chat-ai.example.com",
  },
  
{
  title: "Weather-App",
  image: weather, // fixed name too
  description: "Get the current weather of any city in the world.",
  technologies: ["React", "Tailwind", "Weather API"],
  github: "https://github.com/Avanimaletha/AWS-Visualization-Quicksight",
  live: "", // also make 'Live' lowercase for consistency
},



  
];

export const CONTACT = {
  address: "xascbhbc ",
  phoneNo: "bjcycshb ",
  email: "avanimaletha@gmail.com",
};
