import projects from '../../projects';
import Link from 'next/link';
import Image from 'next/image';

export default function ProjectDetailPage({ params }) {
    const { slug } = params;

    const projectData = projects.find((c) => c.slug === slug);

    if (!projectData) {
        return <div>project not found</div>;
    }

    return (
        <div className="max-w-4xl mx-auto p-8 pt-14 flex flex-col">
            {/* Left-aligned section */}
            <div className="w-full text-left">
                <h1 className="text-3xl font-bold mb-2">{projectData.name}</h1>
                <p className="text-lg">{projectData.year}</p>
                {projectData.length && <p className="pb-4 pt-2">TRT:{projectData.length}</p>}
            </div>

            {/* Centered image */}
            <div className="flex justify-center mb-6">
                <img
                    src={projectData.img}
                    alt={projectData.name}
                    className="w-full h-64 object-cover object-center rounded-xl"
                />
            </div>

            {/* Centered long description + metadata */}
            <div className="w-full space-y-4 mb-10 pt-10">
                {projectData.longDescription && <p>{projectData.longDescription}</p>}
            </div>

            {/* Site Link */}
            {projectData.siteLink && <Link href={projectData.siteLink} className="pt-10 text-lg hover:underline hover:decoration-wavy hover:cursor-pointer underline-offset-6">{projectData.siteLink}</Link>}


            {/* Centered videos */}
            {projectData.vidLinks &&
                projectData.vidLinks.map((id, index) => (
                    <div key={index} className="w-full aspect-video my-6">
                        <iframe
                            src={`https://player.vimeo.com/video/${id}?title=0&byline=0&portrait=0&badge=0&controls=1`}
                            className="w-full h-full pt-6"
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                ))}

            {/* Documentation Images */}
            <div className="w-full flex flex-col items-center gap-4 pt-10">
                {projectData.docImgs && projectData.docImgs.map((img, index) => (
                    <Image src={img} key={index} alt={projectData.name} height={500} width={500} className="rounded-xl" />
                ))}
            </div>

            {/* Screenings */}
            <div className="screening-list flex flex-col pt-10">
            {projectData.screenings && <p className="underline decoration-wavy underline-offset-6 pb-4">screenings:</p>}
            {projectData.screenings &&
            projectData.screenings.map((screening, index) => (
                <p>• {screening}</p>
            ))}
             </div>

            {/* Right-aligned back link */}
            <div className="w-full flex justify-end mt-8 pt-10 pb-10">
                <Link
                    href="/projects"
                    className="text-xl hover:underline hover:decoration-wavy hover:cursor-pointer"
                >
                    back
                </Link>
            </div>
        </div>
    );
}


// Optional: Generate metadata for each page
export function generateMetadata({ params }) {
    const { slug } = params;
    const projectData = projects.find(p => p.slug === slug);

    return {
        title: projectData ? projectData.name : 'Project Not Found',
        description: projectData?.shortDescription || 'Project details'
    };
}