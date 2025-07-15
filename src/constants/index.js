import chat from "../assets/projects/chat.png";
import vizulization from "../assets/projects/vizulization.png"
import orbitus from "../assets/projects/orbitus.png"
import weather from "../assets/projects/weather.png"
import facial from "../assets/projects/facial.png"
import Pizza from "../assets/projects/Pizza.png"
import Budget from "../assets/projects/Budget.png"

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
  title: "AWS-Facial-Rekognition",
  image: facial, 
  description: "Developed a cloud-based facial recognition solution using AWS Rekognition to enable seamless identity verification and real-time visual analysis. The system integrates with AWS S3 for image storage, AWS Lambda for backend logic, and DynamoDB for user data management, all orchestrated via API Gateway. This tool provides accurate, scalable face matching and enhances security or user authentication workflows.",
  technologies: ["AWS-Rekognition", "AWS-S3","AWS Lambda", "DynamoDB","Javascript","API Gateway"],
  github: "https://github.com/Avanimaletha/AWS-Facial-Recognition",
  live: "https://facial-reck.vercel.app/FaceLogin.html", 
},
{
  title: "AWS-Vizualization",
  image: vizulization, 
  description: " A cloud-based dashboard that visualizes real-time AWS resource usage, cost trends, and performance metrics to support smarter infrastructure management decisions. Built with AWS-native services, the tool empowers users to monitor and analyze their cloud environment in a centralized, interactive view.",
  technologies: ["AWS-Lambda", "AWS-S3", "QuickSight","Python"],
  github: "https://github.com/Avanimaletha/AWS-Visualization-Quicksight",
  live: "aws-demo.mp4", 
},

{
  title: "Pennywise",
  image: Budget, 
  description: " an intuitive web application designed to help users manage their income and expenses. Created using JavaScript, it allows users to input transactions, categorize them, and visualize their spending habits through real-time balance updates and charts (if included). Whether for daily budgeting or long-term financial planning, this tool simplifies money management in a clean, interactive format.",
  technologies:["Javascript", "API", "HTML","CSS"],
  github: "https://github.com/Avanimaletha/Budget-Tracker",
  live: "https://budget-tracker-delta-rose.vercel.app/", 
},
  {
  title: "Orbit-Us",
  image: orbitus,
  description: "A decentralized drop-servicing platform that connects clients with freelancers seamlessly. Orbit-Us enables users to find freelance work or post jobs without intermediaries, leveraging blockchain for transparency, trust, and low fees. Built with modern Web3 tools, it ensures secure interactions and decentralized job management.",
  technologies: ["React", "Tailwind", "Solidity","Web3"],
  github: "https://github.com/rachitdhaka/Drop-Service---Orbit-Us",
  live: "https://orbitus.vercel.app/", 
},
{
  title: "DailyDish",
  image: Pizza, 
  description: " Dynamic, user-friendly web application that allows users to search, view, and save recipes. Built with JavaScript, it fetches data from a recipe API (or local data) and displays it in a clean, organized interface. Key features include ingredient lists, cooking instructions, and optional filters for dietary preferences or meal types. The app helps users discover new meals and streamline their cooking experience. ",
  technologies: ["Javascript", "API", "HTML","CSS"],
  github: "https://github.com/Avanimaletha/Recipe",
  live: "https://recipe-app-eta-ashen.vercel.app/", 
},
  {
    title: "Chat-AI",
    image: chat,
    description: "An AI-powered real-time chat application that integrates conversational intelligence into a sleek, modern UI. Built with React and Tailwind CSS, Chat-AI uses the Gemini API to deliver dynamic, context-aware responses, making conversations feel natural and engaging.",
    technologies: ["Tailwind", "React","Gemini API"],
    github: "https://chat-ai-ebon-eight.vercel.app/",
    live: "https://chat-ai-ebon-eight.vercel.app/",
  },
  
{
  title: "Weather-App",
  image: weather, 
  description: "A responsive web app that provides real-time weather updates for any city worldwide. Users can search for a location to view current temperature, weather conditions, and more—all displayed in a clean, minimalist interface.",
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
