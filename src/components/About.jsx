import profilePic from "../../public/IMG_0863.jpg";

function About() {
  return (
    <div>
      <h1 className="mx-4 mt-2">About</h1>
      {/* styling for About Me section- using flex wrap on mobile devices so picture and text sections stack. Desktop screens will see my picture and text side by side. */}
      <div className="flex flex-wrap lg:flex-nowrap p-3">
      <img src={profilePic} alt="Anders Newgard" className="w-1/2 lg:w-1/5 rounded-lg shadow-lg m-4" />
        <div className="m-3 text-xl font-medium leading-loose p-1">
          <p><strong>Hi everybody!</strong> My name is Anders Newgard but most people just call me Ders. I grew up in Chapel Hill, North Carolina and spent most of my life thinking I was going to be a veterinarian. I went to Colorado University and graduated with a degree in Pre-Veterinarian Sciences. I moved back to NC after graduating, and worked in a lab for animal behavior for a bit. After about 3 months of this, I quit, and got a job as a barista! I've been in the specialty coffee industry ever since, and now I manage a coffee shop in Chapel Hill.</p>

          <p className="indent-8 mt-4">I love coffee, animals, technology, and a bunch of other things. I grew up a huge PC gamer, overall nerd, and have wanted to break into coding for along time now. I am extremely excited to have the opportunity to be apart of this program, and look forward to learning and mastering the necessary tools to become a professional developer.</p>

        </div>
      </div>
    </div>
  );
}

export default About;