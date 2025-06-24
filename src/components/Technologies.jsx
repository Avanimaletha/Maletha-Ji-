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
        <div className="p-4">
          <SiJavascript className="text-7xl text-yellow-400" />
        </div>
        <div className="p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
        
        <div className="p-4">
          <SiMysql className="text-7xl text-blue-500" />
        </div>
        <div className="p-4">
          <SiMongodb className="text-7xl text-green-500" />
        </div>
        <div className="p-4">
          <SiLinux className="text-7xl text-white" />
        </div>
        <div className="p-4">
          <FaAws className="text-7xl text-orange-400" />
        </div>
        <div className="p-4">
          <SiTailwindcss className="text-7xl text-sky-400" />
        </div>
        <div className="p-4">
          <SiHtml5 className="text-7xl text-orange-500" />
        </div>
        <div className="p-4">
          <SiCss3 className="text-7xl text-blue-500" />
        </div>
        
        <div className="p-4">
          <SiPython className="text-7xl text-blue-400" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
