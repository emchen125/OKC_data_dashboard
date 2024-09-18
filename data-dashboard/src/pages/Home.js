import Header from './Header.js';
import JobsChangeViz from './viz/home/jobs_overview.js';
import EmpChangeViz from './viz/home/emp_change.js';
import SnapViz from './viz/home/snapshot.js';
import './output.css';

// Biosciences # of Jobs (industrial biosciences - remove hospital sector)
// % employment growth (since 2015?) (total & subsector) yes
// # of Business Establishments (total & subsector)
// $ Average wages in the industrial biosciences (total & subsector) yes
// $ Annual bioscience-related University/Institution R&D expenditures yes
// Is there a way to label/categorize publications, clinical trials, research grants, and patent themes - like in Core Competencies slide 20?

export function Home() {
    return (
        <div className="Business">
            <Header />
            <div className="justify-center items-center rounded-lg border border-gray-200">
                <h1 className="block pl-3 text-gray-700 rounded p-2 text-3xl text-center">Oklahoma Biotech Snapshot Summary</h1>
            </div>
            <div className="p-2">
                <SnapViz />
            </div>
            <div className="p-2">
                <JobsChangeViz />
            </div>
            <div className="p-2">
                <EmpChangeViz />
            </div>
        </div>
    );
}

export default Home;
