import { GraduationCap, Calendar } from 'lucide-react';

const educationData = [

  {
    degree: "Bachelor's in Computer Science",
    school: "University of Wollongon in Dubai",
    year: "2020 - 2023",
    description: "Focus on Full Stack Development and Systems Design"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-s2">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-p1">Education</h2>
        
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-s1 p-6 rounded-lg shadow-300 hover:shadow-200 transition-shadow duration-200"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-s3 p-3 rounded-full">
                  <GraduationCap className="w-6 h-6 text-p1" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-p4">{edu.degree}</h3>
                  <p className="text-p5 mb-2">{edu.school}</p>
                  <div className="flex items-center text-p5 mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{edu.year}</span>
                  </div>
                  <p className="text-p5">{edu.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;