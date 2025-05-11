import gsap from "gsap";

export function outro() {
    const tl = gsap.timeline()

    tl.from(".buttons-wrapper", {
      autoAlpha: 0,
      duration: 1,
      delay: 1,
      opacity: 1
    })
    .from(".arrow-container", {
      delay: 1,
      autoAlpha: 0
    });

    return tl;
}

