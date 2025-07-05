import chat from "../assets/projects/chat.png";
import vizulization from "../assets/projects/vizulization.png"
import orbitus from "../assets/projects/orbitus.png"
import weather from "../assets/projects/weather.png"
import facial from "../assets/projects/facial.png"

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
  technologies: ["AWS-Lambda", "AWS-S3", "QuickSight","Python"],
  github: "https://github.com/Avanimaletha/AWS-Visualization-Quicksight",
  live: "aws-demo.mp4", 
},
{
  title: "AWS-Facial-Rekognition",
  image: facial, 
  description: "Developed a smart facial recognition tool leveraging AWS Rekognition to enable seamless, cloud-based identity matching and visual insights.",
  technologies: ["AWS-Rekognition", "AWS-S3", "QuickSight","Javascript"],
  github: "https://github.com/Avanimaletha/AWS-Facial-Recognition",
  live: "https://facial-reck.vercel.app/FaceLogin.html", 
},

  {
  title: "Orbit-Us",
  image: orbitus,
  description: "Decentralised Drop Servicing Platform - Finding Freelancing work and create Job for free lancer.",
  technologies: ["React", "Tailwind", "Solidity","Web3"],
  github: "https://github.com/rachitdhaka/Drop-Service---Orbit-Us",
  live: "https://orbitus.vercel.app/", 
},
  {
    title: "Chat-AI",
    image: chat,
    description: "An AI-powered real-time chat app built with React and Tailwind CSS.",
    technologies: ["Tailwind", "React","Gemini API"],
    github: "https://chat-ai-ebon-eight.vercel.app/",
    live: "https://chat-ai-ebon-eight.vercel.app/",
  },
  
{
  title: "Weather-App",
  image: weather, 
  description: "Get the current weather of any city in the world.",
  technologies: ["React", "Tailwind", "Weather API"],
  github: "https://github.com/Avanimaletha/weather-app",
  live: " https://weather-app-f5f1.vercel.app/", 
}

  
];

export const CONTACT = {
  address: "xascbhbc ",
  phoneNo: "bjcycshb ",
  email: "avanimaletha@gmail.com",
};
