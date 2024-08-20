"use strict";
// A list showing a programmer's skills in detail
let computerProgrammer = {
    codingLanguage: ["JavaScript", "TypeScript", "Python"],
    tools: ["Git", "Webpack", "Docker"],
    frameworks: ["React", "Node", "Express"],
};
// Getting specific skills from the list
let { codingLanguage, tools, frameworks } = computerProgrammer;
// Showing a skill from each category
console.log(`\nLanguage: ${codingLanguage[1]}, Tool: ${tools[0]}, FrameWork: ${frameworks[1]}`);
