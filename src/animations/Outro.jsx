import gsap from "gsap";

export function outroTimeline() {
    const outroTimeline = gsap.timeline()

    outroTimeline.from(".my-buttons-wrapper", {
      autoAlpha: 0,
      duration: 1,
      delay: 1,
      opacity: 1
    })
    .from(".arrow-container", {
      delay: 1,
      autoAlpha: 0
    });

    return outroTimeline;
}

