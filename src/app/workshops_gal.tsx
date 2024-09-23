import React from 'react';
import Link from 'next/link';


interface TeamMember {
  name: string;
  role: string;
  imageSrc: string;
  link: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Jane Doe',
    role: 'CEO',
    imageSrc: '/images/etna placeholder.jpg', // Replace with actual image URL
    link: '/team/jane-doe', // Replace with actual URL
  },
  {
    name: 'John Smith',
    role: 'CTO',
    imageSrc: 'https://via.placeholder.com/400x300', // Replace with actual image URL
    link: '/team/john-smith', // Replace with actual URL
  },
  {
    name: 'Emily Johnson',
    role: 'Lead Developer',
    imageSrc: 'https://via.placeholder.com/400x300', // Replace with actual image URL
    link: '/team/emily-johnson', // Replace with actual URL
  },
  {
    name: 'Michael Brown',
    role: 'UI/UX Designer',
    imageSrc: 'https://via.placeholder.com/400x300', // Replace with actual image URL
    link: '/team/michael-brown', // Replace with actual URL
  },
];

const WorkshopsGrid = () => {
  return (
    <div id="workshops" className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mt-10">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Workshops</h2>
          <p className="mt-4 text-lg leading-6">
            Click on the team members to learn more about them.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-8 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <div key={member.name} className="text-center">
              <Link href={member.link}>
                <img
                  className="mx-auto w-full h-72 object-cover cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
                  src={member.imageSrc}
                  alt={member.name}
                />
              </Link>
              <h3 className="mt-6 text-lg font-medium">{member.name}</h3>
              <p className="">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkshopsGrid;
