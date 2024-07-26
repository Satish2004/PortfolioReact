import React from 'react'
import "../skills/skills.css";
import Frontend from '../skills/Frontend';
import Backend from "../skills/Backend";
import Programming from "../skills/Programming"
import Framework from './Framework';
Framework

const Skills = () => {
  return (
   <>
   
   <section className="skills section" id='skill'>
    <h2 className="section__title">Skills</h2>
    <span className="section__subtitle">My Skills</span>
    <div className="skills__container container grid">
    <Frontend></Frontend>
    <Backend></Backend>
    <Programming></Programming>
    <Framework></Framework>


    </div>
   </section>
   </>
  )
}

export default Skills