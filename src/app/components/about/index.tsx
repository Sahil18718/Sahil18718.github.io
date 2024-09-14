import Image from 'next/image';

import { data } from './aboutData'; // Adjust the path as necessary

const AboutSection = () => {
  return (
    <section id="about" className="py-12 bg-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-pink-500 mb-4">
          02. <span className="font-bold text-black">About Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p>{data.description}</p>
            <p>
              For more details on my skills and projects, please see below
              sections.
            </p>
            <p>At Masai School I have successfully completed the following:</p>
            <div className="flex justify-between items-center space-x-4">
              <div>
                <span className="block text-2xl font-bold text-pink-500">
                  {data.stats.hoursOfCoding}
                </span>
                <span className="block text-gray-600">Hours of coding</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-pink-500">
                  {data.stats.dsaProblems}
                </span>
                <span className="block text-gray-600">DSA Problems</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-pink-500">
                  {data.stats.projects}
                </span>
                <span className="block text-gray-600">Projects</span>
              </div>
            </div>
            <button className="mt-4 px-6 py-2 bg-pink-500 text-white font-semibold rounded-md shadow hover:bg-pink-600 transition-colors duration-300 ease-in-out">
              Download CV <span className="ml-2">↓</span>
            </button>
          </div>
          <div className="relative w-full h-96 md:h-auto">
            <Image
              src="/assets/img/profile.jpg"
              alt="Sahil Malviya"
              layout="fill"
              objectFit="contain"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
