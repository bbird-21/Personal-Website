import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TechStack from "./ProjectTechStack"

gsap.registerPlugin(ScrollTrigger);

export function ProjectSection({
    title,
    video,
    description,
    features
}) {

    const sectionRef = useRef(null);
    useGSAP(() => {
        gsap.fromTo(
            sectionRef.current,
            { autoAlpha: 0, opacity: 0 },
            {
                autoAlpha: 1,
                opacity: 1,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    toggleActions: "play none none reverse",
                    start: "top 93%",
                },
            }
        );
    }, []);
    return (
    <div
        ref={sectionRef}
        className="opacity-0 flex flex-col lg:flex-row justify-center gap-10 px-4 md:px-12 lg:px-20 max-w-screen-xl mx-auto rounded-xl"
    >
        <div className="flex-shrink-0 w-full md:w-3/4">
        <video
            src={video}
            alt={title}
            className="w-full h-auto object-contain rounded-md aspect-video"
            autoPlay
            loop
            muted
            playsInline
        />
        </div>

        <div className="project-text-content flex flex-col gap-3 w-full md:w-1/2">
        <div className="project-title">
            <h1 className="text-4xl md:text-5xl font-[Poppins] text-white">
            {title}
            </h1>
        </div>

        <div className="text-gray-400 leading-relaxed text-lg">
            {description.map((line, idx) => (
            <p key={idx}>{line}</p>
            ))}
        </div>

        <div className="mb-4 text-lg">
            {features.map((feature, index) => (
            <p key={index} className="flex items-center text-white">
                <span className="text-2xl text-pink-400 mr-2">✦</span>
                {feature}
            </p>
            ))}
        </div>

        <TechStack />
        </div>
    </div>
    );
}
