import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <div className="pb-4">
      <h2 className="my-20 text-center text-4xl">Projects</h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            {/* Project Image */}
            <div className="w-full lg:w-1/4">
              <img
                src={project.image}
                width={250}
                height={250}
                alt={project.title}
                className="mb-6 rounded"
              />
            </div>

            {/* Project Details */}
            <div className="w-full max-w-xl lg:w-3/4">
              <h3 className="mb-2 text-2xl font-semibold">{project.title}</h3>
              <p className="mb-4 text-stone-400">{project.description}</p>

              {/* Technologies Used */}
              <div className="mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* GitHub and Live Demo Buttons */}
              <div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-2 inline-block rounded bg-stone-900 p-2 text-sm font-medium text-stone-300 hover:bg-stone-800 transition"
                >
                  GitHub
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded bg-stone-900 p-2 text-sm font-medium text-stone-300 hover:bg-stone-800 transition"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* More Projects Button */}
      <div className="text-center mt-10">
        <a
          href="https://github.com/Avanimaletha"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white rounded-full p-4 text-5m text-stone-800 mb-10"
        >
          More Projects on GitHub →
        </a>
      </div>
    </div>
  );
};

export default Projects;
