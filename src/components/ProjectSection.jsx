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
    features,
    techStackIcons
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
                    start: "top 90%",
                    end: 'bottom 50%+=100px',
                },
            }
        );
    }, []);
    return (
    <div
        ref={sectionRef}
        className="opacity-0 flex flex-col items-start lg:flex-row justify-center gap-10 px-4 md:px-12 lg:px-20 max-w-screen-xl rounded-xl overflow-x-hidden"
    >
        <div className="max-w-[35rem] lg:w-[75rem] h-full mr-10 rounded-md">
            <video
                src={video}
                alt={title}
                className=""
                autoPlay
                loop
                muted
                playsInline
            />
        </div>

        <div className="flex flex-col  lg:mx-1/2 gap-3 w-auto">
            <h1 className="text-4xl md:text-5xl font-[Poppins] text-white">
            {title}
            </h1>
            <div className="text-gray-400 text-lg">
                {description.map((line, idx) => (
                <p key={idx}>{line}</p>
                ))}
            </div>

        <div className="mb-4 text-lg">
            {features.map((feature, index) => (
            <p key={index} className="flex items-center text-white">
                <span className="text-2xl text-pink-400 mr-2">✦</span>{feature}
            </p>
            ))}
        </div>
        {}
        <TechStack
            techStackIcons={techStackIcons}
        />
        </div>
    </div>
    );
}
