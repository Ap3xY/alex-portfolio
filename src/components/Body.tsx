export default function Body() {
  return (
    <div className="flex flex-col mt-20 gap-20 p-2 text-center mx-auto">
      <section>
        <h2 className="text-2xl mb-10 w-1/2 mx-auto font-bold bg-red-400 p-2 rounded-lg">Tech Stack</h2>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <div className="bg-red-400 p-2 rounded-lg">React</div>
              <div className="bg-red-400 p-2 rounded-lg">Next.js</div>
              <div className="bg-red-400 p-2 rounded-lg">Tailwind CSS</div>
              <div className="bg-red-400 p-2 rounded-lg">TypeScript</div>
              <div className="bg-red-400 p-2 rounded-lg">JavaScript</div>
            </div>
            <div className="flex gap-2"></div>
          </div>
        </div>
      </section>
    </div>
  )
}

