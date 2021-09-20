import Link from "next/link";
import Image from "next/image";

function others() {
  return (
    <section className="px-4 py-24 mx-auto max-w-7xl">
      <div className="grid items-center w-full grid-cols-1 gap-10 mx-auto md:w-4/5 lg:grid-cols-2 xl:gap-32">
        <div>
          <p className="mb-2 text-s font-semibold tracking-wide text-gray-500 uppercase">
            Under Construction 💻
          </p>
          <h1 className="mb-4 text-xl font-extrabold leading-tight tracking-tight text-left text-gray-900 md:text-4xl">
            Oops! The page you are looking for <span className="block w-full text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-500 lg:inline">
            is not built yet</span>
          </h1>
          <p className="mb-5 text-base text-left text-gray-800 md:text-xl">
            Stay tuned for further updates on features of our site, We wish to
            see you back soon 🤝
          </p>
          <Link href="/">
            <a className="bg-green-400 hover:bg-green-800 text-white font-bold mt-15 py-2 px-4 rounded-full">Back to home
            </a>
          </Link>
        </div>
        <div className="fill-current">
            <Image 
              src={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.colourbox.com%2Fpreview%2F30746471-programming-and-coding.jpg&f=1&nofb=1"}
              height={350}
              width={500}
              alt="not built"
              className="h-full w-full cover"
            />
        </div>
      </div>
    </section>
  );
}

export default others;

