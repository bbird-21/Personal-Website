import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TechStack from "./ProjectTechStack"

gsap.registerPlugin(ScrollTrigger);

export function ProjectSection({
    title,
    imagePath,
    description,
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
        <div ref={sectionRef}
             className="opacity-0 flex flex-col md:flex-row justify-center gap-10 ml-50 mr-50 md:ml-[600px] md:mr-[500px] rounded-xl">
            <div className="bg-slate-950 p-2 flex-shrink-0">
                <img
                    src={imagePath}
                    alt={title}
                    className="block w-160 h-120 object-cover rounded-md aspect-video"
                />
            </div>
            <div className="project-text-content flex flex-col gap-3 w-full md:w-2/3 lg:w-3/4">
                <div className="project-title">
                    <h1 className="text-5xl md:text-4xl font-[Poppins] text-white">
                        {title}
                    </h1>
                </div>
                <div className="text-gray-400 leading-relaxed text-lg">
                    {description.map((line, idx) => (
                        <p key={idx}>
                            {line}
                        </p>
                    ))}
                </div>
                <div className="mb-4 text-lg">
                    <p className="flex items-center text-white"><span className="text-2xl text-pink-400  mr-2">✦</span> Robust backend powered by Django.</p>
                    <p className="flex items-center text-white"><span className="text-2xl text-pink-400  mr-2">✦</span> Security enhanced by JWT and 2FA.</p>
                    <p className="flex items-center text-white"><span className="text-2xl text-pink-400  mr-2">✦</span> Full Dockerized Application.</p>
                </div>
                <TechStack></TechStack>
            </div>
        </div>
    );
}
