import gsap from "gsap";

export function rotateWordsTimeline() {
		const words = gsap.utils.toArray(".main-rotating-word");
		const tl = gsap.timeline({
			repeat: -1
		});

		gsap.set(words, {
			yPercent: 100,
			autoAlpha: 0
		});

		tl.to(words[0], {
			yPercent: 0,
			autoAlpha: 1,
			duration: 0.6,
			ease: "power2.out"
		});

		words.forEach((word, i) => {
			const next = words[i + 1];

			tl.to(word, {
				yPercent: -100,
				autoAlpha: 1,
				duration: 0.6,
				ease: "power2.inOut"
			}, "+=1.5");

			tl.set(next, {
				yPercent: 100,
				autoAlpha: 0
			}, "<");

			tl.to(next, {
				yPercent: 0,
				autoAlpha: 1,
				duration: 0.6,
				ease: "power2.inOut"
			}, "<");
	});

  return tl;
}

