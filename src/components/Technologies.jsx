import { RiReactjsLine } from "react-icons/ri";
import {
  SiMongodb,
  SiJavascript,
  SiMysql,
  SiLinux,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiPython,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

const Technologies = () => {
  return (
    <div className="pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies & Skills</h2>
      <div className="flex flex-wrap items-center justify-center gap-6">
        
        <div className="p-4 transition-transform duration-300 hover:scale-125 hover:drop-shadow-xl">
          <SiJavascript className="text-7xl text-yellow-400" />
        </div>
        
        <div className="p-4 transition-transform duration-300 hover:scale-125 hover:drop-shadow-xl">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
        
        <div className="p-4 transition-transform duration-300 hover:scale-125 hover:drop-shadow-xl">
          <SiMysql className="text-7xl text-blue-500" />
        </div>
        
        <div className="p-4 transition-transform duration-300 hover:scale-125 hover:drop-shadow-xl">
          <SiMongodb className="text-7xl text-green-500" />
        </div>
        
        <div className="p-4 transition-transform duration-300 hover:scale-125 hover:drop-shadow-xl">
          <SiLinux className="text-7xl text-white" />
        </div>
        
        <div className="p-4 transition-transform duration-300 hover:scale-125 hover:drop-shadow-xl">
          <FaAws className="text-7xl text-orange-400" />
        </div>
        
        <div className="p-4 transition-transform duration-300 hover:scale-125 hover:drop-shadow-xl">
          <SiTailwindcss className="text-7xl text-sky-400" />
        </div>
        
        <div className="p-4 transition-transform duration-300 hover:scale-125 hover:drop-shadow-xl">
          <SiHtml5 className="text-7xl text-orange-500" />
        </div>
        
        <div className="p-4 transition-transform duration-300 hover:scale-125 hover:drop-shadow-xl">
          <SiCss3 className="text-7xl text-blue-500" />
        </div>
        
        <div className="p-4 transition-transform duration-300 hover:scale-125 hover:drop-shadow-xl">
          <SiPython className="text-7xl text-blue-400" />
        </div>
      
      </div>
    </div>
  );
};

export default Technologies;
