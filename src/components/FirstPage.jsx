/* ---- Particles Background -- */
import GeometryParticles from "../GeometryParticles";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

/* ---- Styles import --------- */
import '../App.css';
import '../Arrow.scss'
import '../styles/first_page/particles.css'
import '../styles/first_page/mainContent.css'
import '../styles/first_page/element.css'
import githubLogo from "../assets/github.png"

/* ---- Gsap import ----------- */
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { intro } from "../animations/Intro"
import { outro } from '../animations/Outro';
import { rotateWords } from '../animations/RotateWords';

const Home = () => {
	useGSAP(() => {
		var master = gsap.timeline();

		master.add(intro());
		master.add(rotateWords(), "+=0.5");
		master.add(outro(), "-=3.5");
	});

	return (
		<>
			<div className="container">
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
				<div className='buttons-wrapper'>
					<button
						type="button"
						className='github-button'> <img src={githubLogo} className='github-logo'></img> Github
					</button>
					<button
						type="button"
						className='contact-button'>Let's talk !
					</button>
				</div>
				</div>
			</div>
			<div className='arrow-container'>
				<div className="arrow arrow-first"></div>
				<div className="arrow arrow-second"></div>
			</div>
		</>
	)
}

export default Home;
