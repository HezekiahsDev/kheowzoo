import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 mt-12 py-8 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-6 text-gray-300 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h2 className="text-color-primary font-bold text-2xl">Kheowzoo</h2>
          <p className="mt-2 text-sm max-w-xs">
            Bridging the gap between nature and digital innovation. Join us in creating a sustainable future through technology.
          </p>
        </div>

        <div className="mb-4 md:mb-0">
          <nav className="space-x-4 text-sm">
            <Link href="/" className="hover:text-color-primary">Home</Link>
            <Link href="/about" className="hover:text-color-primary">About Us</Link>
            <Link href="/gallery" className="hover:text-color-primary">Gallery</Link>
            <Link href="/news" className="hover:text-color-primary">Community News</Link>
            <Link href="/contact" className="hover:text-color-primary">Contact</Link>
          </nav>
        </div>

        <div className="flex space-x-4 text-color-primary">
          <Link
            href="https://x.com/kheowzooFROMSOL"
            aria-label="Twitter"
            target="_blank"
          >
            <svg
              className="w-5 h-5 hover:text-white"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M23.05 4.57a9.3 9.3 0 0 1-2.68.73 4.7 4.7 0 0 0 2.05-2.6 9.33 9.33 0 0 1-2.95 1.13 4.66 4.66 0 0 0-7.92 4.25 13.26 13.26 0 0 1-9.62-4.87 4.66 4.66 0 0 0 1.45 6.22 4.64 4.64 0 0 1-2.1-.58v.06a4.66 4.66 0 0 0 3.74 4.57 4.65 4.65 0 0 1-2.1.08 4.66 4.66 0 0 0 4.35 3.22 9.35 9.35 0 0 1-6.9 1.93 13.24 13.24 0 0 0 7.16 2.1c8.59 0 13.28-7.11 13.28-13.28 0-.2 0-.39-.02-.58A9.52 9.52 0 0 0 23.05 4.57z" />
            </svg>
          </Link>
          <Link
            href="http://kzoo.fun/"
            aria-label="Fanpage"
            target="_blank"
          >
            <svg
              className="w-5 h-5 hover:text-white"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-13h4v2h-2v6h-2V7zm2 10c-1.1 0-2-.9-2-2h2v-2h2v4h-2z" />
            </svg>
          </Link>
          <Link
            href="https://www.instagram.com/kheowzoo/"
            aria-label="Instagram"
            target="_blank"
          >
            <svg
              className="w-5 h-5 hover:text-white"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.16c3.59 0 6.48 2.89 6.48 6.48s-2.89 6.48-6.48 6.48c-3.59 0-6.48-2.89-6.48-6.48S8.41 2.16 12 2.16zm0 10.76c2.34 0 4.26-1.91 4.26-4.26s-1.91-4.26-4.26-4.26-4.26 1.91-4.26 4.26 1.91 4.26 4.26 4.26zM18.41 6.5c.4 0 .73.33.73.73s-.33.73-.73.73-.73-.33-.73-.73.33-.73.73-.73zM12 7.65c-2.38 0-4.29 1.91-4.29 4.29s1.91 4.29 4.29 4.29 4.29-1.91 4.29-4.29-1.91-4.29-4.29-4.29zM18.5 4.5C18.5 4.5 19.5 6 20.5 7s1-1.5 1-1.5z" />
            </svg>
          </Link>
          <Link
            href="https://www.facebook.com/kheowzoo"
            aria-label="Facebook"
            target="_blank"
          >
            <svg
              className="w-5 h-5 hover:text-white"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M22.7 0H1.3C.6 0 0 .6 0 1.3v21.4c0 .7.6 1.3 1.3 1.3h11.3v-9.4h-3v-3.7h3v-2.7c0-3.3 2.6-5.4 5.6-5.4 1.6 0 3.1.1 3.5.1v3.9h-2c-1.6 0-2.1.8-2.1 2.1v2.9h4.2l-.6 3.7h-3.6v9.4h7.3c.7 0 1.3-.6 1.3-1.3V1.3c0-.7-.6-1.3-1.3-1.3z" />
            </svg>
          </Link>
          <Link
            href="https://t.me/kheowzoo001"
            aria-label="Telegram"
            target="_blank"
          >
            <svg
              className="w-5 h-5 hover:text-white"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 17.627 0 12 5.373 0 12 0zm0 22c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zm4.596-12.896l-7.658 3.85 2.75-4.524c.487-.822.75-1.814.75-2.784 0-.929-.324-1.839-.898-2.568-.574-.728-1.417-1.156-2.368-1.156-.866 0-1.666.292-2.324.833l-.848.718-1.724-1.722 1.702-1.708c.948-.94 2.189-1.476 3.478-1.476 1.58 0 3.016.601 4.091 1.688 1.075 1.087 1.663 2.481 1.663 3.974 0 1.72-.689 3.29-1.804 4.493z" />
            </svg>
          </Link>
          <Link
            href="https://t.me/kheowzooCHINA"
            aria-label="Telegram"
            target="_blank"
          >
            <svg
              className="w-5 h-5 hover:text-white"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 17.627 0 12 5.373 0 12 0zm0 22c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zm4.596-12.896l-7.658 3.85 2.75-4.524c.487-.822.75-1.814.75-2.784 0-.929-.324-1.839-.898-2.568-.574-.728-1.417-1.156-2.368-1.156-.866 0-1.666.292-2.324.833l-.848.718-1.724-1.722 1.702-1.708c.948-.94 2.189-1.476 3.478-1.476 1.58 0 3.016.601 4.091 1.688 1.075 1.087 1.663 2.481 1.663 3.974 0 1.72-.689 3.29-1.804 4.493z" />
            </svg>
          </Link>
        </div>
      </div>

      <div className="mt-6 text-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} Kheowzoo. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
