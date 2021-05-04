const HomeButton = () => {
  return (
    <div className="max-w-xl px-5 pt-24 mx-auto text-center py-14">
      <span className="block pb-5 text-5xl transition duration-200 transform cursor-default md:text-6xl lg:text-7xl hover:scale-125">
        <a href="/" target="_self">
          🚀
        </a>
      </span>
      <a
        href="/"
        target="_self"
        className="p-2 text-blue-600 transition duration-200 bg-blue-100 rounded-full hover:opacity-70 font-sourcecode"
      >
        Home
      </a>
    </div>
  )
}
export default HomeButton
