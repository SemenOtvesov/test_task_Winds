import React from "react";
import ProjectList from "@middleComponents/projectList/projectList";
import MainProject from "@middleComponents/mainProject/mainProject";

export default ()=>{
    return <main className="main">
        <ProjectList/>
        <MainProject/>
    </main>
}