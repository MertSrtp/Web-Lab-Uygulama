export default function Skills() {
  const skills = ["React", "TypeScript", "Tailwind CSS", "Next.js", "Node.js", "Vite"];

  return (
    <section id="skills" className="py-16 px-4 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-4xl mx-auto text-center md:text-left text-gray-900 dark:text-white">
        <h2 className="text-3xl font-bold mb-6 text-center">Yetenekler</h2>
        <ul className="flex flex-wrap gap-3 justify-center">
          {skills.map(skill => (
            <li key={skill} className="bg-blue-600 text-white px-4 py-2 rounded-full font-medium shadow-sm">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
