import React from 'react';
import Image from 'next/image';

const AboutMe = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-12 gap-8 items-center">
        {/* Image Section - 4 columns */}
        <div className="col-span-12 md:col-span-4">
          <Image 
            src="/images/slika-dejan.jpg" 
            alt="About Me" 
            width={400} 
            height={500} 
            className="rounded-lg shadow-lg object-cover w-full h-auto"
          />
        </div>

        {/* Text Section - 8 columns */}
        <div className="col-span-12 md:col-span-8">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              I'm a passionate logistics professional with over 10 years of experience 
              in global freight forwarding and supply chain management.
            </p>
            <p>
              My expertise spans sea, air, and rail freight solutions, helping businesses 
              optimize their international shipping strategies and reduce transportation costs.
            </p>
            <p>
              With a deep understanding of international trade regulations and a commitment 
              to innovative logistics solutions, I've helped numerous companies streamline 
              their global supply chains.
            </p>
            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-2">Key Specialties:</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Global Logistics Strategy</li>
                <li>Multimodal Transportation</li>
                <li>Supply Chain Optimization</li>
                <li>Customs Compliance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;