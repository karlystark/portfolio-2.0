import Image from 'next/image';
import projects from '../../projects';

export default function ImageGrid(){

    const imgs = projects.map(project => project.img);

    return (
        <div className="ImageGrid flex gap-6 flex-wrap justify-center py-10 pb-20">
            {imgs.map(img => <Image src={img} alt="project grid" width={400} height={400} className="rounded-xl"/>)}
        </div>
    )
}