export default function About() {
  return (
    <section id="about" className="py-16 px-4">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
        <figure className="shrink-0">
          <img 
            src="https://via.placeholder.com/160" 
            alt="Mert Saritop vesikalik fotografi" 
            className="w-40 h-40 rounded-full object-cover shadow-lg" 
          />
        </figure>
        <div>
          <h2 className="text-3xl font-bold mb-4 text-center md:text-left text-gray-900 dark:text-white">
            Hakkimda
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
            Yazilim Muhendisligi ogrencisiyim. Modern web teknolojileriyle erisilebilir ve kullanici dostu arayuzler gelistiriyorum.
          </p>
        </div>
      </div>
    </section>
  );
}
