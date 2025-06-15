
import Projects from "./components/Projects";
export default function Home() {
  return (
    <>
      <section className="mt-3  fade-in flex-col h-72  justify-center items-center text-center bg-gray-900 max-w-screen-xl mx-auto   text-white delay-1" >
        <h1 className="text-4xl md:text-6xl font-bold fade-in mt-5">Hi, I&apos;m Prince Bidhuri</h1>
        <p className="text-lg md:text-2xl text-gray-300 mt-4 fade-in delay-1">
          A Full Stack MERN Developer passionate about building fast, secure, and user-friendly web applications.
        </p>
        <div className="mt-6 flex gap-4 fade-in delay-2 items-center justify-center">
          <a
            href="/resume.pdf"
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow"
          >
            View Resume
          </a>
          
        </div>
      </section>
      <Projects/>

    </>
  );
}
