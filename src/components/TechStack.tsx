import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import SectionHeading from './SectionHeading'

// Create a reusable SkillBar component
interface SkillBarProps {
  percentage: number
  icon: string | JSX.Element
  name: string
}

function SkillBar({ percentage, icon, name }: SkillBarProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div ref={ref} className="border-2 border-red-400 rounded-lg p-4 w-40 hover:scale-105 transition-transform duration-200">
      <div className="flex items-center gap-2 mb-2">
        {typeof icon === 'string' ? (
          <img src={icon} alt={name} className="w-6 h-6" />
        ) : (
          icon
        )}
        <span className="font-semibold">{name}</span>
      </div>
      <div className="bg-gray-200 h-2 rounded-full">
        <motion.div 
          className="bg-red-400 h-2 rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  )
}

export default function TechStack() {
  return (
    <section id="tech-stack">
      <SectionHeading title="Tech Stack" />
      
      {/* Frontend Technologies */}
      <div className="mb-8">
        <h3 className="text-xl mb-4 text-red-400">Frontend</h3>
        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          <SkillBar 
            icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            name="React"
            percentage={95}
          />
          <SkillBar 
            icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
            name="Next.js"
            percentage={90}
          />
          <SkillBar 
            icon={
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
              </svg>
            }
            name="Tailwind"
            percentage={92}
          />
        </div>
      </div>

      {/* Languages section */}
      <div className="mb-8">
        <h3 className="text-xl mb-4 text-red-400">Languages</h3>
        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          <SkillBar 
            icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
            name="TypeScript"
            percentage={95}
          />
          <SkillBar 
            icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            name="JavaScript"
            percentage={95}
          />
          <SkillBar 
            icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg"
            name="Ruby"
            percentage={65}
          />
          <SkillBar 
            icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elixir/elixir-original.svg"
            name="Elixir"
            percentage={60}
          />
        </div>
      </div>

      {/* Backend section */}
      <div>
        <h3 className="text-xl mb-4 text-red-400">Backend</h3>
        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          <SkillBar 
            icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/phoenix/phoenix-original.svg"
            name="Phoenix"
            percentage={55}
          />
          <SkillBar 
            icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
            name="PostgreSQL"
            percentage={85}
          />
          <SkillBar 
            icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
            name="MySQL"
            percentage={80}
          />
          <SkillBar 
            icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg"
            name="GCP"
            percentage={75}
          />
        </div>
      </div>
    </section>
  )
} 