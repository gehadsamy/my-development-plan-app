import AchievementsCollapsible from "../uiComponents/AchievementsCollapsible";

const MyAchievements = () => {
    const currentProjects = [
      { name: "CL", description: "Our company site, built with React.js." },
      { name: "Detail Aid", description: "A detailed assistance platform, developed using React." },
      { name: "Exhibit", description: "An exhibition platform, created with Next.js." },
      { name: "My Vaccine", description: "Vaccination tracking system, powered by Next.js." },
      { name: "Respiverse", description: "Respiratory analysis tool, developed with React.js." },
      { name: "Central Hub", description: "Centralized data hub, built with React.js." },
      { name: "Tournament", description: "A competitive event management system." },
      { name: "Aeolus", description: "" },
      { name: "composite", description: "" },
      { name: "Digital survey", description: "" },
    ];
  
 
  
    return (
      <>
        <AchievementsCollapsible title="My Achievements Projects" projects={currentProjects} />
      </>
    );
  };
  
  export default MyAchievements;
  