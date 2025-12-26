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
            <div className="pt-10 md:pt-0 text-lg">
                <div>
                    <span id="about-name">k.stark</span> is an <span className="hover:underline hover:decoration-wavy hover:text-[#b71e1e] decoration-2 underline-offset-4">educator</span>, <span className="hover:underline hover:decoration-wavy hover:text-[#b71e1e] decoration-2 underline-offset-4">documentary filmmaker</span>, and <span className="hover:underline hover:decoration-wavy hover:text-[#b71e1e] decoration-2 underline-offset-4">software engineer</span> based in the Bay Area. They studied film at UC Berkeley, received an
                    MFA in Cinema from San Francisco State University, then studied fullstack software development at Rithm School. Over their 12 years (so far) as an educator, they&apos;ve taught and developed curriculum for middle, high school, and adult learners in filmmaking, photography, animation, and web development.
                    <br></br>
                    <br></br>
                    They&apos;re passionate about experimental documentary work (particularly the essay film) & projection in public space. Their curatorial positions have included Program Director/Curator at the <Link href="https://www.instagram.com/greatwallofoakland/">Great Wall of Oakland</Link>, Guest Curator at Frameline San Francisco LGBT Film Festival, and Creative Dissent Fellow (Arté Útil) at Yerba Buena Center for the Arts. Their films have screened widely and internationally at venues like the Pacific Film Archive, SFMOMA, McEvoy Foundation for the Arts, mixNYC, San Francisco Cinematheque, and the British Film Institute.
                    <br></br>
                    <br></br>
                    They currently lead Instructor Development programs at <Link href="https://www.thelastmile.org">The Last Mile</Link> and teach courses in web development & MERN stack for justice-impacted folks across the country.
                </div>
                <br></br>
                {/* <span className="pr-2">find them here to collaborate:</span>
                <Link href="https://www.linkedin.com/in/karlystark/" className="pl-2 hover:underline hover:decoration-wavy hover:cursor-pointer underline-offset-6">linkedin</Link>
                <Link href="https://github.com/karlystark" className="pl-2 hover:underline hover:decoration-wavy hover:cursor-pointer underline-offset-6">github</Link>
                <Link href="https://vimeo.com/karlystark" className="pl-2 hover:underline hover:decoration-wavy hover:cursor-pointer underline-offset-6">vimeo</Link> */}
            </div >
        </div >
    );
}
