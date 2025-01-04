interface SectionHeadingProps {
  title: string;
}

export default function SectionHeading({ title }: SectionHeadingProps) {
  return (
    <h2 className="text-xl sm:text-2xl mb-6 sm:mb-10 w-64 sm:w-72 mx-auto font-bold border-2 border-red-400 p-2 rounded-lg">
      {title}
    </h2>
  );
} 