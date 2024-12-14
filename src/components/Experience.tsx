import { Briefcase } from 'lucide-react';

const experiences = [
  {
    company: "Pick Me",
    position: "Associate software engineer",
    period: "October 2024 - Present",
    description: "Leading the development of cloud-based solutions and implementing scalable microservices architecture."
  },
  {
    company: "Pick Me",
    position: "Software Engineer Intern",
    period: "March 2024 - October 2024",
    description: "Implemented POC "
  },
  {
    company: "the Assembly",
    position: "RND intern",
    period: "Sep 2022 -Nov 2022",
    description: "Researching on different tools and frame works and built Project based on them tools Like " +
        "React js ,fire base, Three js ,Django, Unity "
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-s1">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-p1">Experience</h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-s2 p-6 rounded-lg shadow-300 hover:shadow-200 transition-shadow duration-200"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-s3 p-3 rounded-full">
                  <Briefcase className="w-6 h-6 text-p1" />
                </div>
                
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-p4">{exp.position}</h3>
                    <span className="text-p5">{exp.period}</span>
                  </div>
                  <p className="text-p1 mb-2">{exp.company}</p>
                  <p className="text-p5">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;