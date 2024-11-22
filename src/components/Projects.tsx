import { Github, ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      name: 'E-SERVICE - MetLife',
      description: 'Configured and maintained CI/CD pipelines with Jenkins, Docker, Git, and Apache Tomcat, implementing automated cloud deployments, and ensuring 24/7 application and server availability.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      github: 'https://github.com/ysivasai99/',
      technologies: ['AWS', 'Jenkins', 'Docker', 'Git', 'Apache Tomcat'],
    },
    {
      name: 'IoT Home Security System',
      description: 'A system that leverages AWS services to enhance home security through IoT devices and real-time monitoring.',
      image: 'https://images.unsplash.com/photo-1558002038-bb4237b50b11?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      github: 'https://github.com/ysivasai99/',
      technologies: ['AWS IoT', 'Lambda', 'DynamoDB', 'Node.js'],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-16">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-[1.02]"
            >
              <div className="relative h-48">
                <img
                  className="w-full h-full object-cover"
                  src={project.image}
                  alt={project.name}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{project.name}</h3>
                <p className="mt-2 text-gray-600">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-blue-600"
                  >
                    <Github className="h-5 w-5 mr-2" />
                    <span>View Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}