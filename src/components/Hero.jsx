import ProfilePic from "../assets/hero-image.png";


const containerVariants = {
  hidden: {opacity: 0,x:-100},
  visible:{
    opacity:1,
    x:0,
    transition:{
      duration:0.5,
      staggerChildren: 0.5,
    }
  }
}
const childVariants = {
  hidden: {opacity:0, x:-100},
  visible:{opacity:1,x:0,transition:{duration:0.5}}
}

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <img
              src={ProfilePic}
              alt="Avani Maletha"
              className="max-w-xs border border-stone-1200 rounded-3xl"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start mt-10">
            <h2 className="pb-2 text-4xl tracking-tighter lg:text-8xl">
              Avani Maletha
            </h2>
            <span className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent">
              Developer-DSA-Devops
            </span>
            <p className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter">
              <h3>"Mountain girl at heart, coding dreams with chai in hand."</h3>
            </p>
            <a
              href="Avani Final.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="bg-white rounded-full p-4 text-5m text-stone-800 mb-10"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
