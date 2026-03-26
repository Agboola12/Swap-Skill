import { Link } from "react-router"
import UserNavBar from "../../component/UserNavBar"

const Skill = () => {
    return (
        <>
            <UserNavBar />

            <div className="w-[90%] lg:w-[80%] mt-10 py-9 px-6 items-center justify-center mx-auto bg-gray-100 shadow-2xl">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-5 mx-auto">
                    <select name="" id="" className="w-full px-4 py-2 border rounded-lg focus:ring-purple-500 focus:border-purple-500 outline-none">
                        <option value="">Categories</option>
                        <option value="computer-science">Computer Science</option>
                        <option value="engineering">Engineering</option>
                        <option value="mathematics">Mathematics</option>
                        <option value="physics">Physics</option>
                    </select>

                    <select name="" id="" className="w-full px-4 py-2 border rounded-lg focus:ring-purple-500 focus:border-purple-500 outline-none">
                        <option value="">Department</option>
                        <option value="computer-science">Computer Science</option>
                        <option value="engineering">Engineering</option>
                        <option value="mathematics">Mathematics</option>
                        <option value="physics">Physics</option>
                    </select>

                    <input type="text" name="" id="" placeholder="Search For Skill" className="w-full px-4 py-2 border rounded-lg focus:ring-[#7C33FF] focus:border-[#7C33FF] outline-none transition-colors" />
                </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 gap-10">

                    <div className=" w-full items-center justify-center mx-auto bg-white shadow-2xl px-4 py-5 rounded-[12px]">
                        <div className="flex gap-7 items-center justify-center mx-auto ">
                              <div>
                                <i className="fa-solid fa-camera  text-7xl text "></i>
                                </div>  
                            <div> 
                                <p className="font-bold text-xl mb-1">Photography</p>
                                <p className="text-sm">Taught by : David, Mass Comm</p>
                            </div>
                        </div>
                        <hr className="my-5" />
                        <button
                        className="bg-[#6036E1] float-right font-semibold border-2 border-[#6036E1] text-white rounded-[12px] hover:shadow-2xl hover:shadow-[#6036E1] px-3 py-2 hover:text-[#6036E1] hover:bg-white "
                    >
                       Request Swap
                    </button>

                    </div>
                    <div className="w-full items-center justify-center mx-auto bg-white shadow-2xl px-4 py-5 rounded-[12px]">
                        <div className="flex gap-7 items-center justify-center mx-auto ">
                              <div>
                                <i className="fa-solid fa-database  text-7xl text "></i>
                                </div>  
                            <div> 
                                <p className="font-bold text-xl mb-1">Data Analysis</p>
                                <p className="text-sm">Taught by : David, Mass Comm</p>
                            </div>
                        </div>
                        <hr className="my-5" />
                        <button
                        className="bg-[#6036E1] float-right font-semibold border-2 border-[#6036E1] text-white rounded-[12px] hover:shadow-2xl hover:shadow-[#6036E1] px-3 py-2 hover:text-[#6036E1] hover:bg-white "
                    >
                       Request Swap
                    </button>

                    </div>
                    <div className="w-full items-center justify-center mx-auto bg-white shadow-2xl px-4 py-5 rounded-[12px]">
                        <div className="flex gap-7 items-center justify-center mx-auto ">
                              <div>
                                <i className="fa-solid fa-earth-africa  text-7xl text "></i>
                                </div>  
                            <div> 
                                <p className="font-medium text-xl mb-1">Public Speaking</p>
                                <p className="text-sm">Taught by : David, Mass Comm</p>
                            </div>
                        </div>
                        <hr className="my-5" />
                        <button
                        className="bg-[#6036E1] float-right font-semibold border-2 border-[#6036E1] text-white rounded-[12px] hover:shadow-2xl hover:shadow-[#6036E1] px-3 py-2 hover:text-[#6036E1] hover:bg-white "
                    >
                       Request Swap
                    </button>

                    </div>

            </div>
            
            
            </div>

        </>
    )
}

export default Skill
