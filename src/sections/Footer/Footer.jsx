import locationIcon from "../../assets/icons/location.png"
import emailIcon from "../../assets/icons/mail.png"
import FooterSection from "../../components/FooterSection"
import ContactItem from "../../components/ContactItem"
import ConnectItem from "../../components/ConnectItem"
import githubIcon from "../../assets/icons/github.png"
import linkedinIcon from "../../assets/icons/linkedin.png"
const Footer = () => {
	return (
		<div className="flex flex-col gap-10 pt-40 pb-10 bg-black font-[Poppins]">
			 <div className="w-300 bg-neutral-700 h-0.5 mx-auto"></div>
			 <div className="flex gap-60 py-5 mx-auto">
					<FooterSection title="bbird.dev">
						<div className="text-neutral-300 text-sl">
							I'm Mohamed Meguedmini — a tech <br></br>
							enthusiast, builder, and problem-solver. <br></br>
							Thanks for checking out my site!
						</div>
						<div className="text-neutral-300 text-sl">
							© 2025 Mohamed Meguedmini
						</div>
					</FooterSection>
					<FooterSection title="Get in Touch">
						<ContactItem
							icon={emailIcon}
							text="m.bbird21@proton.me"
							link="mailto:m.bbird21@proton.me"
							alt="Email Icon"
						/>
						<ContactItem
							icon={locationIcon}
							text="Paris, France"
							link="https://www.google.fr/maps/place/Paris/"
							alt="Location Icon"
						/>
					</FooterSection>
					<FooterSection title="Connect">
						<div className="flex gap-5">
							<ConnectItem
								title='Github'
								icon={githubIcon}
								link="https://github.com/bbird-21/"
								alt='Github Icon'
							/>
							<ConnectItem
								title="Linkedin"
								icon={linkedinIcon}
								link="https://www.linkedin.com/in/mohamed-meguedmini-64a98a2a6/"
								alt='Linkedin Icon'
							/>
						</div>
					</FooterSection>
			</div>
			<div className="w-300 bg-neutral-700 h-0.5 mx-auto"></div>

		</div>
	)
}

export default Footer;
