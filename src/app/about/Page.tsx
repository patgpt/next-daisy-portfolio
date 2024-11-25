import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import Image from 'next/image'

const BentoBox = ({ className, children }: { className?: string, children: React.ReactNode }) => (
    <div className={`p-6 rounded-xl backdrop-blur-xl bg-white/10 dark:bg-black/10 border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] ${className}`}>
        {children}
    </div>
)

export const AboutPage = () => {
    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Profile Picture */}
                <BentoBox className="flex justify-center items-center">
                    <div className="relative w-48 h-48 rounded-full overflow-hidden">
                        <Image
                            src="/pfp.webp"
                            alt="Profile picture"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                </BentoBox>

                {/* Availability Status */}
                <BentoBox className="lg:col-span-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </span>
                        <span className="text-sm">Currently available for new opportunities</span>
                    </div>
                    <button className="btn btn-primary">Get in Touch</button>
                </BentoBox>

                {/* Personal Story */}
                <BentoBox className="lg:col-span-2">
                    <h2 className="text-2xl font-bold mb-4">My Journey</h2>
                    <p>From my first Macintosh SE in 1988 to building custom PCs in the early 2000s,
                        and now leading major e-commerce projects—20 years of code, design, and exploration.</p>
                </BentoBox>

                {/* Social Links */}
                <BentoBox>
                    <h2 className="text-xl font-bold mb-4">Connect With Me</h2>
                    <div className="flex gap-4">
                        <a href="https://github.com/patgpt" className="text-3xl hover:text-primary"><FaGithub /></a>
                        <a href="https://twitter.com/AGIManifesto" className="text-3xl hover:text-primary"><FaXTwitter /></a>
                        <a href="https://linkedin.com/in/patgpt" className="text-3xl hover:text-primary"><FaLinkedin /></a>
                    </div>
                </BentoBox>

                {/* Tech Stack */}
                <BentoBox>
                    <h2 className="text-xl font-bold mb-4">My Stack</h2>
                    <div className="flex flex-wrap gap-2">
                        {["React", "Next.js", "TypeScript", "Node.js", "GraphQL", "Tailwind"].map((tech) => (
                            <span key={tech} className="badge badge-primary">{tech}</span>
                        ))}
                    </div>
                </BentoBox>

                {/* Current Projects */}
                <BentoBox>
                    <h2 className="text-xl font-bold mb-4">Currently Building</h2>
                    <ul className="list-disc list-inside">
                        <li>Developer Portfolio</li>
                        <li>Therapeutic Services App</li>
                        <li>Generative Art Projects</li>
                    </ul>
                </BentoBox>

                {/* Personal Interests */}
                <BentoBox>
                    <h2 className="text-xl font-bold mb-4">Beyond Code</h2>
                    <p>Passionate about music production, dogs, and exploring new cities.
                        Currently planning to take my remote work international!</p>
                </BentoBox>
            </div>
        </div>
    )
}

AboutPage.displayName = 'AboutPage';
export default AboutPage;