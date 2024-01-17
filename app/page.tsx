"use client";
import Image from "next/image";
import CodeReviewMastery from "./components/technicalComp/CodeReviewMastery";
import DesignSystemMastery from "./components/technicalComp/DesignSystemMastery";
import FrontendPerformanceBestPractices from "./components/technicalComp/FrontendPerformanceBestPractices";
import NodejsSkills from "./components/technicalComp/NodejsSkills";
import ReactNextjsMastery from "./components/technicalComp/ReactNextjsMastery";
import SoftSkillsDevelopment from "./components/technicalComp/SoftSkillsDevelopment";
import Collapsible from "./uiComponents/Collapsible";
import MyAchievements from "./components/MyAchievements";

function HomePage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url(/bg.webp)" }}
    >
      <header className="bg-black bg-opacity-60 text-cream p-4 flex justify-between items-center backdrop-filter backdrop-blur-lg">
        <Image
          src="/clLogo.png"
          alt="Caduceus Lane Digital Solutions Logo"
          className="w-[7.5vw] justify-center items-center"
          width={170}
          height={162}
        />
        <h1 className="text-xl text-center font-semibold text-white">
          Caduceus Lane Digital Solutions
          <br></br>
          <span className="text-sm">Gehad Samy Talha</span>
        </h1>
        {/* Additional header content, if any */}
      </header>
      <main className="container mx-auto p-6 space-y-6">
        <MyAchievements />
        <Collapsible title="Technical Skills">
          <FrontendPerformanceBestPractices />
          <ReactNextjsMastery />
          <NodejsSkills />
          <DesignSystemMastery />
          <CodeReviewMastery />
        </Collapsible>
        <Collapsible title="Soft Skills">
          <SoftSkillsDevelopment />
          {/* Other soft skills components */}
        </Collapsible>
        {/* More collapsible sections can be added here */}
      </main>
    </div>
  );
}

export default HomePage;
