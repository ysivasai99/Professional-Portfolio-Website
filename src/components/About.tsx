import { Code2, Brain, Rocket } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">About Me</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Enthusiastic about cloud computing, with a strong focus on AWS and DevOps
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white mx-auto">
                <Code2 className="h-6 w-6" />
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-medium text-gray-900 text-center">Expertise</h3>
                <p className="mt-2 text-base text-gray-500 text-center">
                  Specializing in AWS services, DevOps practices, and cloud infrastructure automation
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white mx-auto">
                <Brain className="h-6 w-6" />
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-medium text-gray-900 text-center">Main Skills</h3>
                <p className="mt-2 text-base text-gray-500 text-center">
                  AWS, DevOps, MySQL, CI/CD, Infrastructure as Code
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white mx-auto">
                <Rocket className="h-6 w-6" />
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-medium text-gray-900 text-center">Interests</h3>
                <p className="mt-2 text-base text-gray-500 text-center">
                  Cricket enthusiast, passionate about automation and cloud technologies
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}