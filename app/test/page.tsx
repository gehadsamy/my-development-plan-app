"use client";

import React from "react";
import NodejsSkills from "../components/technicalComp/NodejsSkills";
import ReactNextjsMastery from "../components/technicalComp/ReactNextjsMastery";
import Collapsible from "../uiComponents/Collapsible";
import SoftSkillsDevelopment from "../components/technicalComp/SoftSkillsDevelopment";
import FrontendPerformanceBestPractices from "../components/technicalComp/FrontendPerformanceBestPractices";
import DesignSystemMastery from "../components/technicalComp/DesignSystemMastery";
import CodeReviewMastery from "../components/technicalComp/CodeReviewMastery";

const MyPlane = () => {
  return (
    <>
      <main className="container mx-auto p-6 space-y-6">
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
    </>
  );
};

export default MyPlane;
