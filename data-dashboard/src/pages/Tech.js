import Header from './Header.js';
import ClinTrialsViz from './viz/purple/clinical-trials.js';
import RDViz from './viz/purple/r-and-d.js';
import RDViz2 from './viz/purple/industryrd.js';
export function Tech() {
  return (
    <div className="Tech">
      <Header />
      <div className="justify-center items-center rounded-lg border border-gray-200">
        <h1 className="block pl-3 text-gray-700 rounded p-2 text-3xl text-center">Tech Transfer, Commercialization, Clinical Assessment Metrics</h1>
      </div>
      <ClinTrialsViz />
      <RDViz2 />
      <RDViz />
    </div>
  );
}

export default Tech;
