/* ---- Components ------------ */
import Button from "../../components/Button"
/* ---- Particles Background -- */
import GeometryParticles from '../../components/GeometryParticles'
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

/* ---- Styles import --------- */
import '../../styles/sections/Home/Home.css'
import '../../App.css';
import '../../Arrow.scss'
import '../../styles/particles.css'
import githubLogo from "../../assets/github.png"

/* ---- Gsap import ----------- */
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { introTimeline } from "../../animations/Intro"
import { outroTimeline } from '../../animations/Outro';

const Home = () => {
	useGSAP(() => {
		var master = gsap.timeline();

		master.add(introTimeline());
		master.add(outroTimeline());
	});

	return (
		<div className="flex flex-col items-center relative h-dvh bg-blue-gradient">
			<div className="particles-background">
				<Canvas camera={{ position: [2.0, 2.0, 2.0] }}>
				<ambientLight intensity={0.5} />
				<GeometryParticles count={1200} />
				<OrbitControls enableZoom={false} />
				</Canvas>
			</div>
				<div className='flex mt-80 overflow-hidden gsap-home-title'>
					<div className="text-center font-[Poppins] font-semibold text-5xl sm:text-6xl md:text-7xl lg:text-7xl text-white">
						Hey There
					</div>
				</div>
				<div className="relative flex w-auto h-auto mt-10 bg-pink-600">
					<div className="absolute left-1/2 top-2/5 -translate-x-1/2 flex items-center whitespace-nowrap text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white">
						<div className='gsap-main-name'></div>
					</div>
					<div className="absolute left-1/2 top-2/5 -translate-x-1/2 flex items-center flex-row whitespace-nowrap text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white">
						<div className='gsap-main-description'></div>&nbsp;
						<div className='main-rotating-word-container'>
							<div className='main-rotating-word'>fullstack developer</div>
							<div className='main-rotating-word'>backend developer</div>
							<div className='main-rotating-word'>web developer</div>
						</div>
					</div>
				</div>
				<div className='flex mt-60 lg:mt-80 gap-10 text-black gsap-home-buttons'>
					<Button
						text="Github"
						icon={githubLogo}
						onClick={() => window.open('https://github.com/bbird-21/')}
						variant="github-button"
						iconClassName="w-4 lg:w-8 mr-[10px]"
					/>
					<Button
						text="Let's Talk!"
						onClick={() => scrollToSection('contact')}
						variant="contact-button"
					/>
				</div>
			{/* </div> */}
			<div className='arrow-container'>
				<div className="arrow arrow-first"></div>
				<div className="arrow arrow-second"></div>
			</div>
		</div>
	)
}

export default Home;
