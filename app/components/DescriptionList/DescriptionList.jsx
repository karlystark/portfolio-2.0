import Link from 'next/link';
import projects from '../../projects';

export default function DescriptionList() {

    const descriptions = projects.map(project => project.shortDescription);

    return (
        <div className="DescriptionList px-10 py-10 md:pt-10 md:pb-20">
            {descriptions.map((description, index) => (
                <span key={index} className="text-lg md:text-6xl">{description} // </span>
             ))}
        </div>
    );
}