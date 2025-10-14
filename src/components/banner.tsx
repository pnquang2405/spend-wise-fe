const Banner = () => {
  return (
    <div className="relative bg-green-700 rounded-lg overflow-hidden text-white p-6 md:p-8 flex flex-col items-center text-center shadow-lg max-w-4xl mx-auto">
      {/* Title */}
      <div className="absolute top-4 left-4 bg-green-900 text-sm px-3 py-1 rounded-full uppercase">
        Exclusive Tournament
      </div>

      {/* Main Content */}
      <h1 className="text-2xl md:text-4xl font-bold mb-4">Piggy Christmas Tap: €35,000 For Your Wins</h1>
      <p className="text-lg md:text-xl font-medium mb-6">Join the excitement and win big this holiday season!</p>

      {/* Button */}
      <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-full transition duration-300">
        Join and Win
      </button>
      {/* Decorative Elements */}
      {/* <div className="absolute -bottom-10 -left-16 w-52 h-52">
        <Image
          src="/images/piggy-bank.png" // Replace with the correct path to your image
          alt="Piggy Bank"
          width={208}
          height={208}
        />
      </div>
      <div className="absolute bottom-0 right-0 w-32 h-32">
        <Image
          src="/images/christmas-tree.png" // Replace with the correct path to your image
          alt="Christmas Tree"
          width={128}
          height={128}
        />
      </div> */}
    </div>
  )
}

export default Banner
