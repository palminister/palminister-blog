import nightwind from 'nightwind/helper'
const Dark = () => (
  <button
    onClick={() => nightwind.toggle()}
    className="absolute z-20 top-5 right-5 sm:top-10 sm:right-16 focus:outline-none"
    aria-label="Enable Dark Mode"
  >
    <svg
      className="w-12 h-12 text-black transition duration-500 fill-current dark:text-yellow-300 hover:text-gray-700"
      fill="currentColor"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      ></path>
    </svg>
  </button>
)
export default Dark
