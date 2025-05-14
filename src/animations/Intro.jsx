import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { TextPlugin } from "gsap/TextPlugin";

import { rotateWordsTimeline } from "./RotateWords";

gsap.registerPlugin(SplitText)
gsap.registerPlugin(TextPlugin)

function titleTimeline() {
	let titleTimeline = gsap.timeline();
	let splitTitle = SplitText.create(".title", { type: "words, lines" });

	titleTimeline.from(splitTitle.lines, {
		delay: 2.5,
		duration: 1.8,
		yPercent: 100,
		stagger: 0.1,
		ease: "power4",
		autoAlpha: 1
	});

	return titleTimeline;
}

function presentationTimeline() {
	let presentationTimeline = gsap.timeline();


	presentationTimeline.to(".main-name", {
		text: {value: "My name is Mohamed Meguedmini"},
		duration: 2.5,
	})
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

	presentationTimeline.eventCallback("onComplete", () => {
			rotateWordsTimeline();
		});

	return presentationTimeline;
}

export function introTimeline() {
	let masterTimeline = gsap.timeline();

	masterTimeline.add(titleTimeline());
	masterTimeline.add(presentationTimeline());

	return masterTimeline;
}
