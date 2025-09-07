import projects from '../../projects';
import Link from 'next/link';
import Image from 'next/image';

export default function ProjectDetailPage({ params }) {
    const { slug } = params;

    // Find the class by slug
    const projectData = projects.find(c => c.slug === slug);

    // Handle case where class is not found
    if (!projectData) {
        return <div>Class not found</div>;
    }

    return (
        <main className="max-w-4xl mx-auto p-8 pt-30">
            <h1 className="text-3xl font-bold mb-4">{projectData.name}</h1>
            <p className="text-lg mb-4">{projectData.year}</p>
            <img src={projectData.img} alt={projectData.name} className="w-full h-64 object-cover mb-6 object-center" />
            <p>{projectData.shortDescription}</p>
             <p>k.stark</p>
            <br></br>
            {projectData.longDescription && <p>{projectData.longDescription}</p>}
            <br></br>
            <p>{projectData.length}</p>
            <p>{projectData.format}</p>
            <p>{projectData.type}</p>
            <br></br>
            <br></br>
            <div className="flex justify-end">
            <Link href="/projects" className="text-xl hover:underline hover:decoration-wavy hover:cursor-pointer">back</Link>
            </div>
        </main>
    );
}

// Optional: Generate metadata for each page
export function generateMetadata({ params }) {
    const { slug } = params;
    const projectData = projects.find(p => p.slug === slug);

    return {
        title: projectData ? projectData.name : 'Class Not Found',
        description: projectData?.shortDescription || 'Class details'
    };
}