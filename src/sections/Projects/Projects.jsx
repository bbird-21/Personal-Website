import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { ProjectSection } from "../../components/ProjectSection";

import "../../styles/sections/Projects/Projects.css"

import "../../App.css"
import example from "../../assets/example.png"
import { Parallax, ParallaxLayer } from '@react-spring/parallax';


gsap.registerPlugin(ScrollTrigger)

const Projects = () => {

	const sections = [
		{
			id: 1,
			title: "Transcendence",
			description:
				"Our design team creates stunning visuals that capture your brand's essence.\nWe focus on user experience and aesthetic appeal to ensure your product stands out in the market.",
			image: "/placeholder.svg?height=400&width=600",
		},
		{
			id: 2,
			title: "MiniShell",
			description:
				"Using the latest technologies and frameworks, our development team builds robust, scalable applications. We prioritize performance, security, and maintainability in every line of code.",
			image: "/placeholder.svg?height=400&width=600",
		}
	]

	return (
		<>
			<div className="min-h-screen flex justify-center items-center flex-wrap bg-black ">
				<div className="mt-42 flex justify-center items-center flex-col">
					<h2 className="text-6xl font-[Poppins] bg-gradient-to-r from-[#87CEEB] to-white bg-clip-text text-transparent"> Experiences</h2>
					<h3 className="text-3xl text-white mt-3"> Let's deep in dive in my projects </h3>
				</div>
				<div className="flex flex-col gap-60 mt-50">
					<ProjectSection
						title={sections[0].title}
						description={sections[0].description}
						imagePath={example}
						imageOnRight={true}
						/>
					<ProjectSection
						title={sections[0].title}
						description={sections[0].description}
						imagePath={example}
						imageOnRight={false}
					/>
				</div>
			</div>
		</>
	)
}

export default Projects;
