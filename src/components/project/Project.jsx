import React from 'react'
import "../project/project.css";
import ProjectCard from './ProjectCard';

const Project = () => {
  return (
    // <div>Project</div>
    <>
    <section className="project section" id="project">
        <h2 className="section__title">Project</h2>
        <span className="section__subtitle">My project</span>
        <div className="project__container container grid">
            <div className="project__content">
                {/* card */}
                <ProjectCard></ProjectCard>

            </div>
            <a href="https://github.com/Satish2004" className="button button--flex">
          Go To More Projects
        <svg fill="var(--text-color)" height="20px" width="20px" margin = "10px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 57.945 57.945" xml:space="preserve">
<g>
	<path d="M57.655,27.873c-7.613-7.674-17.758-11.9-28.568-11.9c-0.026,0-0.051,0.002-0.077,0.002c-0.013,0-0.025-0.002-0.037-0.002
		c-0.036,0-0.071,0.005-0.106,0.005C18.14,16.035,8.08,20.251,0.52,27.873l-0.23,0.232c-0.389,0.392-0.386,1.025,0.006,1.414
		c0.195,0.193,0.45,0.29,0.704,0.29c0.257,0,0.515-0.099,0.71-0.296l0.23-0.232c5.245-5.287,11.758-8.841,18.856-10.402
		c-2.939,2.385-4.823,6.022-4.823,10.094c0,7.168,5.832,13,13,13s13-5.832,13-13c0-4.116-1.928-7.784-4.922-10.167
		c7.226,1.522,13.858,5.107,19.184,10.476c0.389,0.393,1.023,0.395,1.414,0.006C58.041,28.898,58.044,28.265,57.655,27.873z
		 M39.973,28.972c0,6.065-4.935,11-11,11s-11-4.935-11-11c0-6.029,4.878-10.937,10.893-10.995c0.048,0,0.096-0.003,0.144-0.003
		C35.058,17.995,39.973,22.92,39.973,28.972z"/>
	<path d="M36,27.972c-0.552,0-1,0.448-1,1c0,3.309-2.691,6-6,6s-6-2.691-6-6s2.691-6,6-6c0.552,0,1-0.448,1-1s-0.448-1-1-1
		c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8C37,28.42,36.552,27.972,36,27.972z"/>
</g>
</svg>
                </a>
        </div>
    </section>
{/* <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --> */}

    </>
  )
}

export default Project