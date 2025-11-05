import Image from "next/image";
import Link from 'next/link';

export default function About() {
    return (
        <div className="flex flex-col md:gap-20 md:flex-row items-center px-6 lg:px-20 py-10">
            <Image
                src="/me.jpg"
                width={400}
                height={400}
                alt="k.stark"
                className="rounded-xl self-center md:self-start"
            />
            <div className="pt-10 md:pt-0">
                <div>
                    <b>k.stark</b> is an <span className="hover:underline hover:decoration-wavy hover:text-[#b71e1e] decoration-2 underline-offset-4">educator</span>, <span className="hover:underline hover:decoration-wavy hover:text-[#b71e1e] decoration-2 underline-offset-4">documentary filmmaker</span>, and <span className="hover:underline hover:decoration-wavy hover:text-[#b71e1e] decoration-2 underline-offset-4">software engineer</span> based in the bay area. they studied film at uc berkeley, received an
                    mfa in cinema from san francisco state university, then got a fullstack software development certificate from rithm school. over their 12 years (so far) as an educator, they&apos;ve taught and developed curriculum for middle, high school, and adult learners in filmmaking, photography, animation, and web development.
                    <br></br>
                    <br></br>
                    they&apos;re passionate about experimental documentary work (particularly the essay film) & projection in public space. their curatorial positions have included program director/curator at the great wall of oakland, guest curator at frameline san francisco lgbt film festival, and ybca critical dissent & arté útil fellow. their films have screened widely and internationally at venues like the pacific film archive, sfmoma, mcEvoy foundation for the arts, mixnyc, san francisco
                    cinematheque, and the british film institute.
                    <br></br>
                    <br></br>
                    they currently lead programs in instructor development & instructional design at the last mile and teach courses in web development & MERN stack for justice-impacted folks across the country.
                </div>
                <br></br>
                <span className="pr-2">find them here to collaborate:</span>
                <Link href="https://www.linkedin.com/in/karlystark/" className="pl-2 hover:underline hover:decoration-wavy hover:cursor-pointer underline-offset-6">linkedin</Link>
                <Link href="https://github.com/karlystark" className="pl-2 hover:underline hover:decoration-wavy hover:cursor-pointer underline-offset-6">github</Link>
                <Link href="https://vimeo.com/karlystark" className="pl-2 hover:underline hover:decoration-wavy hover:cursor-pointer underline-offset-6">vimeo</Link>
            </div >
        </div >
    );
}
