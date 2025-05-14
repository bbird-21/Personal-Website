export function ProjectSection({
    title,
    imagePath,
    description,
}) {

    return (
        <div className="flex flex-col md:flex-row justify-center gap-10 ml-50 mr-50 md:ml-[600px] md:mr-[600px] rounded-xl">
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
                <div className="project-description">
                    <p className="text-xl text-gray-200 leading-relaxed">
                        {description.split('\n').map((line, index) => (
                            <span key={index}>
                            {line}
                            <br />
                            </span>
                        ))}
                    </p>
                </div>
            </div>
        </div>
    );
}
