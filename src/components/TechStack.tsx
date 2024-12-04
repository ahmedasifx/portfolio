

const technologies = [
  { name: 'React', icon: '⚛️' },
  { name: 'TypeScript', icon: '📘' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Python', icon: '🐍' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'Docker', icon: '🐳' },
  { name: 'AWS', icon: '☁️' },
  { name: 'Git', icon: '📚' },
];

const TechStack = () => {
  return (
    <section id="tech" className="py-20 bg-s1">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-p1">Tech Stack</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="bg-s2 p-6 rounded-lg shadow-300 hover:shadow-200 transition-shadow duration-200"
            >
              <div className="text-4xl mb-4 text-center">{tech.icon}</div>
              <h3 className="text-xl font-semibold text-center text-p4">{tech.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;