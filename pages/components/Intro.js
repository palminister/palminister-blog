import Image from 'next/image'

const Intro = () => (
  <div className="max-w-xl px-5 pt-12 mx-auto text-center font-sourcecode py-14">
    <div className="relative">
      <div className="absolute top-0 left-0 m-0 ease-in-out animate-subfloat2">
        <Image
          src="/images/cup.png"
          width="1156"
          height="968"
          alt="cup"
        ></Image>
      </div>
      <div className="absolute top-0 left-0 m-0 ease-in-out animate-mainfloat3">
        <Image src="/images/pc.png" width="1156" height="968" alt="pc"></Image>
      </div>
      <div className="absolute top-0 left-0 m-0 ease-in-out animate-mainfloat4">
        <Image
          src="/images/bomb.png"
          width="1156"
          height="968"
          alt="bomb"
        ></Image>
      </div>
      <div className="absolute top-0 left-0 m-0 ease-in-out animate-mainfloat1">
        <Image
          src="/images/duck.png"
          width="1156"
          height="968"
          alt="duck"
        ></Image>
      </div>
      <div className="absolute top-0 left-0 m-0 ease-in-out animate-subfloat1">
        <Image
          src="/images/slate.png"
          width="1156"
          height="968"
          alt="slate"
        ></Image>
      </div>
      <div className="transition duration-700 ease-in-out animate-mainfloat2">
        <Image
          src="/images/cube.png"
          width="1156"
          height="968"
          alt="cube"
        ></Image>
      </div>
    </div>
    <h1 className="text-5xl font-bold text-black md:text-6xl">
      PALMINISTER <span className="text-black line-through">BLOCKS</span>{' '}
      <span className="text-purple-500">BLOG</span>
    </h1>
    <p className="pt-5 font-normal text-black">
      A journal of a duck that is learning how to fly... <br /> a spaceship.
    </p>
    <p className="pt-5 text-black">
      [data science <span className="px-2">x</span> film
      <span className="px-2"> x </span> art]
    </p>
  </div>
)
export default Intro
