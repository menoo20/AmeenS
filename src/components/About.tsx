import React from 'react'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A passionate educator and developer, bridging the gap between technology and learning
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Story */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">My Journey</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Welcome to my digital home! I'm an educator at heart with a deep passion for technology 
                and continuous learning. My journey has taken me through the realms of teaching, 
                programming, and personal development.
              </p>
              <p>
                As a teacher, I've had the privilege of shaping young minds and witnessing the 
                transformative power of education. This experience has taught me the importance of 
                clear communication, patience, and the joy of seeing others succeed.
              </p>
              <p>
                My love for technology led me to explore programming and development, where I've 
                gained skills in various languages and frameworks. I believe in the power of 
                technology to create positive change and solve real-world problems.
              </p>
              <p>
                This website serves as my digital portfolio, showcasing my work, sharing my thoughts 
                through blog posts, and connecting with fellow learners and educators from around the world.
              </p>
            </div>
          </div>
          
          {/* Skills & Interests */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Skills & Interests</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium text-gray-900 mb-3">Education</h4>
                <div className="flex flex-wrap gap-2">
                  {['Curriculum Development', 'Student Engagement', 'Assessment Design', 'Educational Technology'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-medium text-gray-900 mb-3">Technology</h4>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'JavaScript', 'React', 'Next.js', 'Node.js', 'Database Design'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-medium text-gray-900 mb-3">Personal Interests</h4>
                <div className="flex flex-wrap gap-2">
                  {['Photography', 'Travel', 'Reading', 'Writing', 'Continuous Learning', 'Community Building'].map((interest) => (
                    <span key={interest} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}