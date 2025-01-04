interface TimelineItemProps {
  date: string;
  title: string;
  organization: string;
  description: string;
}

function TimelineItem({ date, title, organization, description }: TimelineItemProps) {
  return (
    <div className="relative pl-8 sm:pl-12 py-6 group">
      {/* Timeline line */}
      <div className="absolute left-0 sm:left-0 h-full w-[2px] bg-red-200 group-last:h-6"></div>
      
      {/* Timeline circle */}
      <div className="absolute left-[-5px] sm:left-[-5px] w-3 h-3 bg-red-400 rounded-full mt-2"></div>
      
      {/* Content */}
      <div className="flex flex-col items-start">
        <span className="text-sm sm:text-base text-red-400 font-medium">{date}</span>
        <h3 className="text-lg sm:text-xl font-semibold mt-1">{title}</h3>
        <p className="text-base sm:text-lg text-gray-600 font-medium">{organization}</p>
        <p className="text-sm sm:text-base text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
}

export default function Timeline() {
  return (
    <section id="timeline" className="max-w-2xl mx-auto px-4">
      <div className="relative">
        <TimelineItem
          date="2023 - Present"
          title="Junior Full Stack Developer"
          organization="PChoice (Pretoria, South Africa)"
          description="Working on the Celbux vouchering system using Next.js and modern web technologies. Developing and maintaining full-stack features while collaborating in an agile startup environment."
        />
        <TimelineItem
          date="2022"
          title="IT Hardware Technician (Part-time)"
          organization="Mojo ICT (Pretoria)"
          description="Installed and configured servers and WiFi systems for schools and large corporate clients while completing my final year of studies."
        />
        <TimelineItem
          date="2019 - 2022"
          title="Bachelor of Information Science"
          organization="University of Pretoria"
          description="Completed degree with Cum Laude in 3 years, focusing on information technology and computer science fundamentals. Developed strong problem-solving skills and technical foundations."
        />
      </div>
    </section>
  );
} 