export default function Stats() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center py-12 bg-zinc-950 text-white px-4 sm:px-6">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl font-bold">70k+</h2>
        <p className="text-gray-400 mt-1 sm:mt-2">customers</p>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl font-bold">50%</h2>
        <p className="text-gray-400 mt-1 sm:mt-2">of the Fortune 500</p>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl font-bold">11,000+</h2>
        <p className="text-gray-400 mt-1 sm:mt-2">models</p>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl font-bold">200+</h2>
        <p className="text-gray-400 mt-1 sm:mt-2">services</p>
      </div>
    </section>
  );
}
