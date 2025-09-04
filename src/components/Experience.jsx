import { EXPERIENCES } from "../constants";

const Experience = () => {
  return (
    <div className="pb-4">
      <h2 className="my-20 text-center text-4xl">Experience</h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div
            key={index}
            className="mb-12 flex flex-col lg:flex-row items-center justify-center gap-8"
          >
            {/* Image */}
            <div className="flex justify-center">
              {experience.image && (
                <img
                  src={experience.image}
                  alt={experience.company}
                  className="w-32 h-32 object-cover rounded-2xl shadow-md"
                />
              )}
            </div>

            {/* Text */}
            <div className="text-center lg:text-left max-w-xl">
              <p className="mb-2 text-sm text-stone-400">{experience.year}</p>
              <h3 className="mb-2 font-semibold text-lg">
                {experience.company}{" "}
                <span className="text-sm text-stone-500">— {experience.role}</span>
              </h3>
              <p className="mb-4 text-stone-400">{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
