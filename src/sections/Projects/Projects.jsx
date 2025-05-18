import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { ProjectSection } from "../../components/ProjectSection";

import "../../styles/sections/Projects/Projects.css"

import "../../App.css"
import { revealGlow, waveContinousGlow } from "../../animations/Glow"
import { sections } from "./ProjectList";

gsap.registerPlugin(ScrollTrigger)

const Projects = () => {



	gsap.registerPlugin(ScrollTrigger);

	useGSAP(() => {
		gsap.timeline({
			scrollTrigger: {
			trigger: ".gsap-title",
			start: "top 80%",
			}
	}).add(revealGlow(".gsap-title")
	  .add(waveContinousGlow(".gsap-title")));
	});
	return (
		<>
			<div className="flex flex-col justify-center items-center flex-wrap background-gradient">
				<div className="mt-42 text-center">
					<h2 className="text-5xl md:text-6xl font-[Poppins] bg-gradient-to-r from-[#87CEEB] to-white bg-clip-text text-transparent"> Experiences</h2>
					<h3 className="gsap-title text-2xl md:text-3xl text-white mt-3 invisible"> Let's deep in dive in my projects </h3>
				</div>
				<div className="flex flex-col gap-40 mt-50">
				{sections.map((section, index) => (
					<ProjectSection
						key={index}
						title={section.title}
						description={section.description}
						video={section.video}
						features={section.features}
						techStackIcons={section.techStack}
					/>
				))}
				</div>
			</div>
		</>
	)
}

export default Projects;
