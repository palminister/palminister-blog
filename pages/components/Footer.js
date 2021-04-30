const Footer = () => (
  <div className="p-5 font-sourcecode">
    <div className="flex justify-center space-x-6">
      <a
        href="https://github.com/palminister"
        className="text-gray-400 hover:text-gray-500"
        target="_blank"
        rel="noreferrer"
        title="GitHub"
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
      <a
        href="https://www.linkedin.com/in/thanapat-jumnongrat/"
        className="m-auto text-gray-400 hover:text-gray-500"
        target="_blank"
        rel="noreferrer"
        title="LinkedIn"
      >
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="m5.2 21.6v-14.5h-4.8v14.5zm-2.4-16.5c1.7 0 2.7-1.1 2.7-2.5s-1-2.5-2.7-2.5c-1.6 0-2.7 1.1-2.7 2.5s1 2.5 2.7 2.5zm5.1 16.5h4.8v-8.1c0-.4 0-.9.2-1.2.3-.9 1.1-1.8 2.5-1.8 1.7 0 2.4 1.3 2.4 3.3v7.8h4.8v-8.3c0-4.5-2.4-6.5-5.5-6.5-2.6 0-3.7 1.5-4.4 2.4v-2.1h-4.8z"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </div>
    <p className="flex justify-center pt-2 text-sm text-gray-500">
      © 2021 Palm Jumnongrat
      <span className="hidden sm:flex">. All rights reserved.</span>
    </p>
  </div>
)

export default Footer
