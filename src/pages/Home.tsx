import NavBar from "../component/NavBar"
import school from "../assets/01.jpg"


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

            <div className="flex gap-3">

            </div>
            
            </p>

          </div>

          <div className="md:w-1/2  rounded-lg lg:mt-[4em] mx-auto items-center">
            <img src={school} alt="school" className="text-center mx-auto items-center w-full rounded-[29px]" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
