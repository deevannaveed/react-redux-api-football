import React from "react";
import Leagues from './components/Leagues';
import Details from './components/Details';

function App() {
  return (
    <div className="container">
      <div className="row mt-1 mt-sm-4 justify-content-center">
        <Leagues/>
      </div>
      <div className="row mt-1 mt-sm-1 justify-content-center mb-5">
        <div className="col-12 px-sm-1 col-lg-9 col-xl-8">
          <div className="card rounded-0 border-0 mx-2">
            <div className="card-header card-custom-header rounded-0 border-0 h5 py-3">
              Lịch phát sóng trực tiếp
            </div>
            <Details/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
