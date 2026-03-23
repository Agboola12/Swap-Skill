import NavBar from "../component/NavBar"
import school from "../assets/01.jpg"
import { Link } from "react-router"


const Home = () => {
  return (
    <>
      <NavBar />

      <div className="bg-white">
        <div className="container px-10 lg:pt-0 pt-[10em] mx-auto items-center flex flex-col md:flex-row gap-10 min-h-screen ">
          <div className="md:w-1/2  items-center justify-center  ">
            <p className="leading-relaxed text text-[45px] mb-5 font-bold ">
              Exchange Skills. Grow Together.
            </p>
            <p className="text-[18px] ">
              A peer-to-peer learning platform exclusively for Adeleke University students.
            </p>

            <div className="flex items-center justify-center gap-5 text-center mt-8 mx-auto">
              <Link to="/signup"
                className="background w-[100%] rounded-[12px] py-4 px-5 mx-auto text-white font-semibold text-[16px]">
                Get Started

              </Link>

              <Link to="/signup"
                className="border-2 w-[100%] border-[#7C33FF]  bg-white rounded-[12px] py-4 px-5 text-[#7C33FF] font-semibold text-[16px]">
                Browse Skills

              </Link>
            </div>



          </div>

          <div className="md:w-1/2  rounded-lg lg:mt-[4em] mx-auto items-center">
            <img src={school} alt="school" className="text-center mx-auto items-center w-full rounded-[29px]" />
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="container px-10 pt-[2em] lg:pt-0 pb-10 mx-auto items-center  ">
          <p className="text text-[3em] text-center font-bold">How It Works</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 gap-10">
            <div className="background text-white py-10 px-4 rounded-[12px]">
              <p className="text font-bold mb-3 text-xl mx-auto w-[12%] bg-white rounded-full p-2 text-center">1</p>
              <p className="text-center font-bold text-2xl mb-5">Create Profile</p>
              <p className="text-center">
                Set up your account
              </p>
            </div>

            <div className="bg-[#3693FF] text-white py-10 px-4 rounded-[12px]">
              <p className="text-[#3693FF] font-bold mb-3 text-xl mx-auto w-[12%] bg-white rounded-full p-2 text-center">2</p>
              <p className="text-center font-bold text-2xl mb-5">List Your Skills</p>
              <p className="text-center">
                Add your skills and interests
              </p>
            </div>

            <div className="bg-[#F39322] text-white py-10 px-4 rounded-[12px]">
              <p className="text-[#F39322] font-bold mb-3 text-xl mx-auto w-[12%] bg-white rounded-full p-2 text-center">3</p>
              <p className="text-center font-bold text-2xl mb-5">Request a Swap</p>
              <p className="text-center">
                Connect and exchange skills
              </p>
            </div>
          </div>

        </div>
      </div>

      <div className="bg-gray-100 py-10 text-center font-medium ">
       <p>2026 Adeleke Skill Swap. All Rights Reserved | <span className="text">Privacy Policy</span></p>

      </div>

    </>
  )
}

export default Home
