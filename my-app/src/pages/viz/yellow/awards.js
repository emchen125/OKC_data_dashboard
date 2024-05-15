import '../viz.css';
export function Awards() {

    return (
        <div>
            <h1 className="block pl-3 text-gray-700 rounded text-xl">Economic Development Targeted at Life Sciences</h1>
            <p className="block pl-3 text-gray-700 rounded text-sm">Examples of economic development incentives in life sciences such as infrastructure development, job creation, R&D tax, subsidies, job creation, etc in Oklahoma.</p>
            <div className="flex flex-wrap gap-8 px-10 justify-center p-2">
                <div className="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                    <a href="https://www.sbir.gov/node/1163527">
                        <h5 className=" text-center mb-2 text-2xl font-bold tracking-tight text-gray-700">
                            Transcutaneous Neuromodulation at Acupoint for Gastric Complications of Scleroderma
                        </h5>
                        <p className=" text-center mb-3 font-normal text-gray-700">
                            Year Issued: 2016 <br></br>
                            Award: SBIR <br></br>
                            Phase: Phase 1 <br></br>
                            Amount Awarded: $265,665.00 <br></br>
                            Department: Department of Health and Human Services
                        </p>
                    </a>
                </div>
                <div className="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                    <a href="https://www.sbir.gov/sbirsearch/detail/3729">
                        <h5 className=" text-center mb-2 text-2xl font-bold tracking-tight text-gray-700">
                            Ground Mobility and Landing Gear for a Bird-Sized Perching Micro Air Vehicle (MAV)
                        </h5>
                        <p className=" text-center mb-3 font-normal text-gray-700">
                            Year Issued: 2010 <br></br>
                            Award: SBIR <br></br>
                            Phase: Phase 1 <br></br>
                            Amount Awarded: $99,899.00 <br></br>
                            Department: Department of Defense
                        </p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Awards;