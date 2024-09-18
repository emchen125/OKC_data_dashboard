import IndustryDynamicsViz from './viz/red/industry-dynamics.js';
import LaborDemandViz from './viz/red/labor-demand.js';
import EconDev from './viz/red/econ-dev.js';
import WorkforceDev from './viz/red/workforce-dev.js';
import ProjGrowthViz from './viz/red/projgrowth.js';
import Header from './Header.js';
import './output.css';

export function Business() {
  return (
    <div className="Business">
      <Header />
      <div className="justify-center items-center rounded-lg border border-gray-200">
        <h1 className="block pl-3 text-gray-700 rounded p-2 text-3xl text-center">Business Growth, Attraction, and Retention Metrics</h1>
      </div>
      <div className="p-2">
        <IndustryDynamicsViz />
      </div>

      <div className="p-2">
        <LaborDemandViz />
      </div>
      <div className="p-2">
        <ProjGrowthViz />
      </div>
      <EconDev />
      <WorkforceDev />

    </div>
  );
}

export default Business;
