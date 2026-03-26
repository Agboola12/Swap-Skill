import UserNavBar from "../../component/UserNavBar"


const DashBoard = () => {
    return (
        <>
            <UserNavBar />

            <div className="w-[90%] lg:w-[80%] mt-10 py-9 px-6 mb-14 items-center justify-center mx-auto bg-gray-100 shadow-2xl">
                <div>
                    <p className="text font-bold text-2xl">Your Teaching Skills</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mt-10 gap-10">

                        <div className="w-full bg-white shadow-2xl px-4 py-5 rounded-[12px]">
                            <div className="flex gap-7 text-center items-center justify-center mx-auto ">
                                <div>
                                    <i className="fa-solid fa-database  text-7xl text "></i>
                                </div>
                                <div>
                                    <p className="font-bold text-xl ">Data Analysis</p>
                                </div>
                            </div>
                            <p className=" text-sm mx-auto w-[60%] mr-1 mt-1">Track which questions are most frequently opened success rates</p>

                        </div>
                        <div className="w-full items-center justify-center mx-auto bg-white shadow-2xl px-4 py-5 rounded-[12px]">
                            <div className="flex gap-7 items-center justify-center mx-auto ">
                                <div>
                                    <i className="fa-solid fa-earth-africa  text-7xl text "></i>
                                </div>
                                <div>
                                    <p className="font-medium text-xl mb-1">Public Speaking</p>
                                </div>
                            </div>
                            <p className=" text-sm mx-auto w-[60%] mr-1 mt-1">Track which questions are most frequently opened success rates</p>

                        </div>

                    </div>
                </div>
                <div className="mt-10">
                    <p className="text font-bold text-2xl"> Skills You Want To Learn</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mt-10 gap-10">

                        <div className="w-full bg-white shadow-2xl px-4 py-5 rounded-[12px]">
                            <div className="flex gap-7 text-center items-center justify-center mx-auto ">
                                <div>
                                    <i className="fa-solid fa-database  text-7xl text "></i>
                                </div>
                                <div>
                                    <p className="font-bold text-xl ">Data Analysis</p>
                                </div>
                            </div>
                            <p className=" text-sm mx-auto w-[60%] mr-1 mt-1">Track which questions are most frequently opened success rates</p>

                        </div>
                        <div className="w-full items-center justify-center mx-auto bg-white shadow-2xl px-4 py-5 rounded-[12px]">
                            <div className="flex gap-7 items-center justify-center mx-auto ">
                                <div>
                                    <i className="fa-solid fa-earth-africa  text-7xl text "></i>
                                </div>
                                <div>
                                    <p className="font-medium text-xl mb-1">Public Speaking</p>
                                </div>
                            </div>
                            <p className=" text-sm mx-auto w-[60%] mr-1 mt-1">Track which questions are most frequently opened success rates</p>

                        </div>

                    </div>
                </div>


            </div>


        </>
    )
}

export default DashBoard
