import Header from './Header.js';
import Deals from './viz/yellow/deals.js';
import NewJobViz from './viz/yellow/job-gains01.js';
import Awards from './viz/yellow/awards.js';
import Incubators from './viz/yellow/incubator.js';

export function Entrepr() {
  return (
    <div className="Entrepr">
      <Header />
      <div className="justify-center items-center rounded-lg border border-gray-200">
        <h1 className="block pl-3 text-gray-700 rounded p-2 text-3xl text-center">Entrepreneurial and Innovation Ecosystem Development Metrics</h1>
      </div>
      <Deals />
      <NewJobViz />
      <Incubators />
      <Awards />
    </div>
  );
}

export default Entrepr;
