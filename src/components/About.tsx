import { User, Mail, MapPin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-s2">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-p1">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80"
              alt="Profile"
              className="rounded-lg shadow-300 w-full"
            />
          </div>
          
          <div>
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <User className="w-5 h-5 text-p1" />
                <span className="text-p4">Ahmed Asif Macan Markar</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-p1" />
                <span className="text-p4">ahmedasifmm@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-p1" />
                <span className="text-p4">Colombo,Srilanka</span>
              </div>
            </div>

            <p className="mt-6 text-p5 leading-relaxed">
              I am a Computer Science Graduate from the University of Wollongong in Dubai with strong programming skills and experience in various technologies and frameworks. I have completed a noteworthy internship in research and development, which has further enriched my technical expertise. Proactive in acquiring and utilizing cutting-edge technologies, I have a special interest in game development, web development, and machine learning. I thrive at solving problems, value collaboration, and am dedicated to producing excellent results.

              Currently, I am working as an Associate Software Engineer specializing in Android Development at PickMe, one of the top ride-hailing companies in Sri Lanka. I am seeking opportunities to further enhance and broaden my skills in a professional environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;