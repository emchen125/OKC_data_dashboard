import '../viz.css';
export function Incubators() {

    return (
        <div>
            <h1 className="block pl-3 text-gray-700 rounded text-xl">Regional Incubator/ Accelerator Throughput, Funding Programs</h1>
            <p className="block pl-3 text-gray-700 rounded text-sm">Example of Oklahoma-based life sciences companies that received support from an accelerator or incubator program. </p>
            <div className="flex flex-wrap gap-8 px-10 justify-center p-2">
                <div className="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                    <a href="https://ok-duncan.com/site-selection/business-incubator/">
                        <h5 className=" text-center mb-2 text-2xl font-bold tracking-tight text-gray-700">
                            Dream Team Prosthetics Duncan Center for Business Development
                        </h5>
                        <p className=" text-center mb-3 font-normal text-gray-700">
                            Startup accelerator that Provides tax abatements and office space for smaller companies with addition benefits. Supported companies such as Dream Team Prosthetics, which specializes in "designing custom solutions for individuals with limb loss, especially challenging limb conditions". Also supported company A3 Environmental Consultants, employing a variety of methods to support positive environmental change.
                        </p>
                    </a>
                </div>

                <div className="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                    <a href="https://www.gener8tor.com/gbeta/life-science">
                        <h5 className=" text-center mb-2 text-2xl font-bold tracking-tight text-gray-700">
                            gBeta
                        </h5>
                        <p className=" text-center mb-3 font-normal text-gray-700 ">
                            gBeta is an accelerator program stemming from the greater Oklahoma City area. They have a program dedicated to life sciences and are well involved in that area, providing individualized coaching and mentorship on company growth and investor readiness.
                        </p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Incubators;

