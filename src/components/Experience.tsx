import { Building2, Calendar } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Software Engineer',
      company: 'Capgemini Technology Services India Limited',
      client: 'MetLife',
      period: '2021 - Present',
      description: 'Working on E-SERVICE project, focusing on AWS and DevOps practices, including CI/CD pipeline configuration and maintenance.',
      technologies: ['AWS', 'DevOps', 'MySQL'],
    },
    {
      title: 'Software Engineer',
      company: 'Genis Logical Software Systems Pvt Ltd',
      period: '2019 - 2021',
      description: 'Worked on E-Commerce projects, implementing AWS solutions and Java applications.',
      technologies: ['AWS', 'Java', 'DevOps'],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-16">
          Professional Experience
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg shadow-lg p-8 transition-transform hover:scale-[1.02]"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{exp.title}</h3>
                  <div className="mt-2 flex items-center text-gray-600">
                    <Building2 className="h-5 w-5 mr-2" />
                    <span>{exp.company}</span>
                  </div>
                  {exp.client && (
                    <p className="mt-1 text-gray-600">Client: {exp.client}</p>
                  )}
                </div>
                <div className="mt-4 md:mt-0 flex items-center text-gray-600">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>{exp.period}</span>
                </div>
              </div>
              <p className="mt-4 text-gray-600">{exp.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}