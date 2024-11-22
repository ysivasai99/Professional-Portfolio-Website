import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  const contacts = [
    {
      type: 'Email',
      value: 'ysivasai99@gmail.com',
      icon: <Mail className="h-6 w-6" />,
      href: 'mailto:ysivasai99@gmail.com',
    },
    {
      type: 'GitHub',
      value: 'github.com/ysivasai99',
      icon: <Github className="h-6 w-6" />,
      href: 'https://github.com/ysivasai99/',
    },
    {
      type: 'LinkedIn',
      value: 'linkedin.com/in/ysivasai99',
      icon: <Linkedin className="h-6 w-6" />,
      href: 'https://linkedin.com/in/ysivasai99',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-16">
          Get in Touch
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center transition-transform hover:scale-[1.02]"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                {contact.icon}
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">{contact.type}</h3>
              <p className="mt-2 text-base text-gray-500">{contact.value}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}