import '../viz.css';
export function WorkforceDev() {

    return (
        <div>
            <h1 className="block pl-3 text-gray-700 rounded text-xl">Workforce Development Programs</h1>
            <p className="block pl-3 text-gray-700 rounded text-sm">Examples of workforce education, training programs, and infrastructure development programs in life sciences in Oklahoma.</p>
            <div className="flex flex-wrap gap-8 px-10 justify-center p-2">
                <div className="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                    <a href="https://www.okcommerce.gov/doing-business/business-services/workforce-development/">
                        <h5 className=" text-center mb-2 text-2xl font-bold tracking-tight text-gray-700">
                            Training for Industry Program
                        </h5>
                        <p className=" text-center mb-3 font-normal text-gray-700">
                            Whether you’re an expanding Oklahoma company or new in our state, our nationally acclaimed Training for Industry Program (TIP) can help you create the quality workforce you need, all at little or no cost to you. TIP is delivered through Oklahoma’s system of 59 technology center campuses across the state. Services include job analysis, training needs assessment, pre-employment training, pre-production training, post-production training, instructional materials and development, training supplies, and more.
                        </p>
                    </a>
                </div>
                <div className="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                    <a href="https://businessfacilities.com/oklahoma-city-biomanufacturing-workforce-training-center/">
                        <h5 className=" text-center mb-2 text-2xl font-bold tracking-tight text-gray-700">
                            Biomanufacturing Workforce Training Center (BWTC) Program
                        </h5>
                        <p className=" text-center mb-3 font-normal text-gray-700 ">
                            The Oklahoma City Innovation District will soon welcome a new biomanufacturing workforce training center (BWTC) program. One of only a few of its kind in the U.S., the program will help create inclusive, non-degreed bioscience industry careers within the region. The Oklahoma Biotech Innovation Cluster (OBIC) was recently awarded $35 million through President Biden’s American Rescue Plan, which allotted $1 billion to the U.S. Department of Commerce Economic Development Administration to be administered through the Build Back Better Regional Challenge. The BWTC program will build on these efforts by training, retaining and attracting new talent to the OKC Innovation District.
                        </p>
                    </a>
                </div>
                <div className="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                    <div className="https://reachhigherok.org/dc_partners/oklahoma-works/">
                        <h5 className=" text-center mb-2 text-2xl font-bold tracking-tight text-gray-700">
                            Oklahoma Works
                        </h5>
                        <p className=" text-center mb-3 font-normal text-gray-700 ">
                            Dedicates WIOA training funds and individual supportive services based on eligibility criteria to help fund semester tuition, fees and books for six credit hours each semester for up to three semesters per year. Provides wraparound services as needed. Assists participants in finding a degree programs that leads to employment in a critical occupation. Assists institutions in listing degree programs on the agency’s approved training/provider list.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkforceDev;