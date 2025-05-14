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
		<div className="flex justify-center items-center relative h-screen bg-blue-gradient">
			<div className="particles-background">
				<Canvas camera={{ position: [2.0, 2.0, 2.0] }}>
				<ambientLight intensity={0.5} />
				<GeometryParticles count={1200} />
				<OrbitControls enableZoom={false} />
				</Canvas>
			</div>
			<div className='title-container'>
				<div className='title'>
					Hey There
				</div>
				<div className="main-wrapper">
					<div className='main-name'></div>
					<div className='main-description-container'>
						<div className='main-description'></div>&nbsp;
						<div className='main-rotating-word-container'>
							<div className='main-rotating-word'>fullstack developer</div>
							<div className='main-rotating-word'>backend developer</div>
							<div className='main-rotating-word'>web developer</div>
						</div>
					</div>
				</div>
				<div className='my-buttons-wrapper'>
					<Button
						text="Github"
						icon={githubLogo}
						onClick={() => window.open('https://github.com/bbird-21/')}
						variant="github-button"
						iconClassName="github-logo"
					/>
					<Button
						text="Let's Talk!"
						onClick={() => scrollToSection('contact')}
						variant="contact-button"
					/>
				</div>
			</div>
			{/* <div className='arrow-container'>
				<div className="arrow arrow-first"></div>
				<div className="arrow arrow-second"></div>
			</div> */}
		</div>
	)
}

export default Home;
