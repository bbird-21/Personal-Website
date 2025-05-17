import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export function revealGlow(className) {
    gsap.set(className, { autoAlpha: 1 });

    let split = SplitText.create(className, { type: "chars" });
    const STAGGER_AMOUNT = 0.04;
    const GLOW_COLOR = "#FFF";

    const tl = gsap.timeline();

    tl.fromTo(split.chars, {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        ease: "power2.out",
        stagger: {
          autoAlpha: 1,
          textShadow: `0px 0px 0px ${GLOW_COLOR}`,
          each: 0.04,
        }
      },
    )
    return tl;
}


export function waveContinousGlow(className) {
    gsap.set(className, { autoAlpha: 1 });

    const chars = SplitText.create(className, { type: "chars" }).chars;
    const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 1
    });

    const GLOW_COLOR_ACTIVE = "#c9c9c9";
    const GLOW_RADIUS_ACTIVE = "5px";
    const GLOW_COLOR_IDLE = "rgba(0,0,0,0)";
    const GLOW_RADIUS_IDLE = "0px";

    const ANIMATION_DURATION_PER_CHAR_GLOW_OFF = 0.5;
    const STAGGER_DELAY_EACH_CHAR = 0.05;

    // Animate TO the glowing state
    tl.to(chars, {
        textShadow: `0px 0px ${GLOW_RADIUS_ACTIVE} ${GLOW_COLOR_ACTIVE}, 0px 0px ${parseFloat(GLOW_RADIUS_ACTIVE) * 1.5}px ${GLOW_COLOR_ACTIVE}`, // Double glow for intensity
        ease: "power2.inOut",
        stagger: {
            each: STAGGER_DELAY_EACH_CHAR,
            from: "start",
        }
    });

    // Animate TO the non-glowing (or idle glow) state
    tl.to(chars, {
        textShadow: `0px 0px ${GLOW_RADIUS_IDLE} ${GLOW_COLOR_IDLE}`,
        ease: "power2.inOut",
        stagger: {
            each: STAGGER_DELAY_EACH_CHAR,
            from: "start"
        }
    }, `>-${ANIMATION_DURATION_PER_CHAR_GLOW_OFF}`);

    return tl;
}
