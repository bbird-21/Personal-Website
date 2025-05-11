import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(SplitText)
gsap.registerPlugin(TextPlugin)

export	function intro() {
	let splitTitle = SplitText.create(".title", { type: "words, lines" });
	let splitMainName = SplitText.create(".main-name", { type: "lines" });
	let tl = gsap.timeline();

	tl.from(splitTitle.lines, {
		delay: 2.5,
		duration: 1.8,
		yPercent: 100,
		stagger: 0.1,
		ease: "power4",
		autoAlpha: 1
	})
	.to(".main-name", {
		text: {value: "My name is Mohamed Meguedmini"},
		duration: 2.5,
		delay: 1,
	}, 3)
	.to(".main-name", {
		delay: 1,
		duration: 1,
		yPercent: -100,
		opacity: 0,
		ease: "power4"
	})
	.to(".main-description", {
		text: {value: "I'm a passionate "},
		duration: 1,
		autoAlpha: 1
	})

	return tl;
}
