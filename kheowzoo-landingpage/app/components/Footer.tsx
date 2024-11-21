import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 mt-12 py-8 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-6 text-gray-300 flex flex-col md:flex-row justify-between items-center">
        {/* Logo and Description */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h2 className="text-color-primary font-bold text-2xl">Kheowzoo</h2>
          <p className="mt-2 text-sm max-w-xs">
            Bridging the gap between nature and digital innovation. Join us in creating a sustainable future through technology.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="mb-4 md:mb-0">
          <nav className="space-x-4 text-sm">
            <Link href="/" className="hover:text-color-primary">
              Home
            </Link>
            <Link href="/about" className="hover:text-color-primary">
              About Us
            </Link>
            <Link href="/gallery" className="hover:text-color-primary">
              Gallery
            </Link>
            <Link href="/news" className="hover:text-color-primary">
              Community News
            </Link>
            <Link href="/contact" className="hover:text-color-primary">
              Contact
            </Link>
          </nav>
        </div>

        {/* Social Media Links */}
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
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-6 text-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} Kheowzoo. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
