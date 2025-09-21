import React from 'react'

export default function Experience() {
  const experiences = [
    {
      title: "Educator & Teacher",
      organization: "Educational Institution",
      period: "Present",
      description: "Passionate about shaping young minds and fostering a love for learning. Developing innovative teaching methods and curriculum that engage students and prepare them for the future.",
      achievements: [
        "Developed interactive teaching methodologies",
        "Mentored students in academic and personal growth",
        "Integrated technology into classroom learning",
        "Achieved high student satisfaction rates"
      ]
    },
    {
      title: "Programming & Development",
      organization: "Self-Directed Learning",
      period: "Ongoing",
      description: "Continuous journey in software development, exploring various technologies and building practical applications. Focus on modern web development and educational technology.",
      achievements: [
        "Completed CS50x Computer Science course",
        "Built multiple web applications",
        "Learned modern frameworks and tools",
        "Contributed to open-source projects"
      ]
    },
    {
      title: "Digital Content Creator",
      organization: "Personal Projects",
      period: "2020 - Present",
      description: "Creating educational content and sharing knowledge through various digital platforms. Focus on making complex topics accessible to learners of all levels.",
      achievements: [
        "Created educational blog posts",
        "Developed tutorial content",
        "Built learning resources",
        "Engaged with online learning community"
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My journey through education, technology, and continuous learning
          </p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">{exp.title}</h3>
                  <p className="text-lg text-purple-600 font-medium">{exp.organization}</p>
                </div>
                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full mt-2 md:mt-0">
                  {exp.period}
                </span>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">{exp.description}</p>
              
              <div>
                <h4 className="text-lg font-medium text-gray-900 mb-3">Key Achievements:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}