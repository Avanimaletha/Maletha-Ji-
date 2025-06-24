
import GitHubCalendar from "react-github-calendar";

const Github = () => {
  const theme = {
    light: [
      "#ebedf0", // Level 0
      "#a8f0a2", // Level 1
      "#70e97c", // Level 2
      "#42cc61", // Level 3
      "#21b94a", // Level 4
    ],
    dark: [
      "#161b22", // Level 0 - background gray
      "#003d1f", // Level 1
      "#006d32", // Level 2
      "#26a641", // Level 3
      "#39d353", // Level 4
    ],
  };
  return (
    <section className="pb-8">


        <h1 className="my-15 text-center text-4xl">
            Github Contribution
        </h1>

    
  

      <div className="flex justify-center p-4 rounded-3xl text-white">
        <GitHubCalendar
          username="Avanimaletha"
          colorScheme="dark"
          
        />
      </div>
      
    </section>
  );
};

export default Github;