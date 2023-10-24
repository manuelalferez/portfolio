export default function About() {
  return (
    <div className="mx-auto flex flex-col md:items-center">
      <div className="flex flex-col md:flex-row md:items-center">
        <img
          src="https://pbs.twimg.com/profile_images/1699038279566278656/FPm4vnr5_400x400.jpg"
          alt="manuel profile picture"
          className="w-40 rounded-full border-2 border-gray-300 p-1"
        />
        <div className="mt-5 flex flex-col md:mt-0 md:pl-4">
          <h2 className="text-2xl">
            Hi <span className="wave">👋</span>, I'm
          </h2>
          <h1 className="text-4xl">Manuel Alférez</h1>
        </div>
      </div>

      <p className="mt-8 lg:w-1/2">
        I'm a software developer and an open source enthusiast. I work as a
        Solutions Engineer at Hubtype and participate as a member of Google
        Developer Groups.
      </p>
    </div>
  );
}
