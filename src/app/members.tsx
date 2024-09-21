import React from 'react';

interface TeamMember {
  name: string;
  role: string;
  imageSrc: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Jane Doe',
    role: 'CEO',
    imageSrc: 'https://via.placeholder.com/300', // Replace with actual image URL
  },
  {
    name: 'John Smith',
    role: 'CTO',
    imageSrc: 'https://via.placeholder.com/300', // Replace with actual image URL
  },
  {
    name: 'Emily Johnson',
    role: 'Lead Developer',
    imageSrc: 'https://via.placeholder.com/300', // Replace with actual image URL
  },
  {
    name: 'Michael Brown',
    role: 'UI/UX Designer',
    imageSrc: 'https://via.placeholder.com/300', // Replace with actual image URL
  },
];

const TeamGrid = () => {
  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Meet Our Team</h2>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            We are a group of professionals dedicated to delivering the best service.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-8 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <div key={member.name} className="text-center">
              <img
                className="mx-auto h-48 w-48 rounded-full object-cover"
                src={member.imageSrc}
                alt={member.name}
              />
              <h3 className="mt-6 text-lg font-medium text-gray-900">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamGrid;
