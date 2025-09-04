import { useState, useEffect } from "react";
import { CONTACT } from "../constants";
import { Globe } from "lucide-react";

export const Contact = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="border-t border-stone-900 pb-20">
      <h2 className="my-10 text-center text-4xl">Get in Touch</h2>
      <div className="flex flex-col items-center gap-6 text-center tracking-tighter">
        
        {/* Email */}
        <a
          href={`mailto:${CONTACT.email}`}
          className="text-xl font-medium text-stone-500 hover:underline"
        >
          {CONTACT.email}
        </a>

        {/* Live Clock */}
        <div className="text-lg font-medium text-stone-400">
          {time.toLocaleTimeString("en-IN", { hour12: true })}
        </div>

        {/* Location with Globe */}
        <div className="flex items-center gap-2 text-stone-500">
          <Globe className="w-5 h-5" />
          <span>Chennai, Tamil Nadu, India</span>
        </div>

        {/* Footer Note */}
        <p className="mt-6 text-sm text-gray-500">
          Made with 🤍, @ Avani {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
};
