const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="flex flex-col md:flex-row items-cente md:gap-5 justify-center">
          <p className="mb-4 md:mb-0">© 2024 Omah Nyemil Website</p>
          <ul className="flex justify-center space-x-4">
            <li>
              <a
                href="/"
                className="hover:text-gray-400 underline underline-offset-4"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/menu"
                className="hover:text-gray-400 underline underline-offset-4"
              >
                Menu
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-400 underline underline-offset-4"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-4 text-sm text-center">
          <p>
            Made with{" "}
            <span role="img" aria-label="Love">
              ❤️
            </span>{" "}
            by Omah Nyemil
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
