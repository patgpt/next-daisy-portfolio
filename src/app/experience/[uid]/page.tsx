
// import Badge from '@/app/components/Badge';
// import { experiences } from '../../../../data/experiences';
// import Image from 'next/image';
// import Link from 'next/link';
// import { notFound } from 'next/navigation';

// export function generateStaticParams() {
//   return experiences.map((experience) => ({
//     slug: experience.slug,
//   }));
// }

// export default function ExperiencePage({ params }: { params: { slug: string } }) {
//   const experience = experiences.find((exp) => exp.slug === params.slug);

//   if (!experience) {
//     notFound();
//   }

//   return (
//     <div className="min-h-screen p-8">
//       <Link href="/experience" className="btn btn-ghost mb-8">
//         ← Back to Experiences
//       </Link>

//       <div className="card bg-base-100 shadow-xl max-w-3xl mx-auto">
//         <div className="card-body">
//           <div className="flex items-center gap-4">
//             {experience.logo && (
//               <Image
//                 src={experience.logo}
//                 alt={experience.company}
//                 width={64}
//                 height={64}
//                 className="rounded-xl"
//               />
//             )}
//             <div>
//               <h1 className="text-3xl font-bold">{experience.title}</h1>
//               <h2 className="text-xl text-primary">{experience.company}</h2>
//             </div>
//           </div>

//           <div className="mt-4">
//             <p className="text-base-content/70">{experience.location}</p>
//             <p className="text-base-content/70">{experience.date}</p>
//           </div>

//           <p className="mt-6">{experience.description}</p>

//           {experience.skills && (
//             <div className="flex flex-wrap gap-2 mt-6">
//               {experience.skills.map((skill, index) => (
//                 <Badge key={index} badgeText={skill} />
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }



import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

type Params = { uid: string };

export default async function Page({ params }: { params: Promise<Params> }) {
  const { uid } = await params;
  const client = createClient();
  const page = await client.getByUID("project", uid).catch(() => notFound());

  return <SliceZone slices={page.data.slices} components={components} />;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { uid } = await params;
  const client = createClient();
  const page = await client.getByUID("project", uid).catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("project");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}