export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 text-center py-6 px-4 text-gray-500 dark:text-gray-400 text-sm">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-2">
        <p>&copy; {new Date().getFullYear()} Mert Saritop. Tum haklari saklidir.</p>
      </div>
    </footer>
  );
}
