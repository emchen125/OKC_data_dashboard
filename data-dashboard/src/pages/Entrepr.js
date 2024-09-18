import Header from './Header.js';
import Deals from './viz/yellow/deals.js';
import NewJobViz from './viz/yellow/job-gains01.js';
import Incubators from './viz/yellow/incubator.js';
import ProdViz from './viz/yellow/productivity.js';
import SBIRViz from './viz/yellow/sbir.js';

export function Entrepr() {
  return (
    <div className="Entrepr">
      <Header />
      <div className="justify-center items-center rounded-lg border border-gray-200">
        <h1 className="block pl-3 text-gray-700 rounded p-2 text-3xl text-center">Entrepreneurial and Innovation Ecosystem Development Metrics</h1>
      </div>
      <NewJobViz />
      <Incubators />
      <SBIRViz />
      <ProdViz />
      <Deals />
    </div>
  );
}

export default Entrepr;
