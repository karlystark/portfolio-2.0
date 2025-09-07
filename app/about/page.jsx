import Image from "next/image";

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
                    <b>k.stark</b> is an <span className="hover:underline hover:decoration-wavy hover:text-[#b71e1e] decoration-2 underline-offset-4">educator</span>, <span className="hover:underline hover:decoration-wavy hover:text-[#b71e1e] decoration-2 underline-offset-4">experimental filmmaker</span>, and <span className="hover:underline hover:decoration-wavy hover:text-[#b71e1e] decoration-2 underline-offset-4">software engineer</span> based in the bay area. They studied film at uc berkeley and received an
                    mfa in cinema from san francisco state university, then got a fullstack software development bootcamp certificate from rithm school. over their 11 year career as an educator, they&apos;ve taught middle, high school, and adult learners filmmaking, photography, animation, and web development.
                    <br></br>
                    <br></br>
                    they&apos;re passionate about lyrical experimental documentary work (particularly the essay film), the possibilities inherent in projecting in public space, and critical trans & queer thought/experience. their curatorial positions have included program director/curator at the great wall of oakland, guest curator at frameline san francisco lgbt film festival, and ybca critical dissent & arté útil fellow. their films have screened widely and internationally at venues like the british film institute, mcEvoy foundation for the arts, mixnyc, san francisco
                    cinematheque, sfmoma, and the pacific film archive.
                    <br></br>
                    <br></br>
                    they currently lead a team of remote instructors at the last mile, direct programs in instructional learning & development, and teach courses in web development & MERN stack for justice-impacted folks across the country. they love building accessible websites & apps that bring people closer to their communities.
                </div>
            </div >
        </div >
    );
}
