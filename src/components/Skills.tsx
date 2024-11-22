import { Code2, Database, Wrench, Star } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Code2 className="h-6 w-6" />,
      skills: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      title: 'Backend',
      icon: <Database className="h-6 w-6" />,
      skills: ['JAVA', 'MySQL'],
    },
    {
      title: 'Tools',
      icon: <Wrench className="h-6 w-6" />,
      skills: ['Git', 'Docker', 'Terraform', 'Jenkins'],
    },
    {
      title: 'Other',
      icon: <Star className="h-6 w-6" />,
      skills: ['AWS', 'CI/CD', 'Test Automation', 'Test Regression'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-16">
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg shadow-lg p-6 transition-transform hover:scale-[1.02]"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white mx-auto">
                {category.icon}
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900 text-center">
                {category.title}
              </h3>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                  >
                    {skill}
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