import Header from './Header.js';
import FacultyEnrollViz from './viz/blue/faculty-and-enrollment.js';
import IndExpendViz from './viz/blue/industry-expenditures.js';
export function Research() {

    return (

        <div>
            <Header />
            <div className="justify-center items-center rounded-lg border border-gray-200">
                <h1 className="block pl-3 text-gray-700 rounded p-2 text-3xl text-center">Research and Talent Pipeline Metrics</h1>
            </div>
            <FacultyEnrollViz />
            <IndExpendViz />
        </div>

    );

}

export default Research;
