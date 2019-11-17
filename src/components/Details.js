import React, {useEffect} from "react";
import {connect} from "react-redux";

let Details = ({leaguesDetail, loading}) => {
  let details = "";

  if (leaguesDetail.length) {
    details = leaguesDetail.map((item, index) => (
      <div key={`${item.team_id}`} className="col-sm-6">
        <div className="card detail-card border-0 rounded-0 bg-transparent">
          <div className="card-body text-decoration-none text-secondary">
            <h5>{item.country}</h5>
            <h3>{item.name}</h3>
            <div className="ellipsis font-weight-bold">
              <span className="ellipsis venue mr-1">{item.venue_name},</span>
              <span className="ellipsis venue mr-1">{item.venue_address},</span>
              <span className="ellipsis venue mr-1">{item.venue_city}</span>
            </div>
          </div>
        </div>
      </div>
    ));
  }

  if (loading) {
    details = (
      <div className="col-12">
        <div className="card border-0 rounded-0">
          <div className="card-body">
            <h3 className="text-center">Loading...</h3>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="row no-gutters details-wrapper">
      {details}
    </div>
  );
};

const mapStateToProps = state => ({
  leaguesDetail: state.leagueDetail,
  loading: state.isLeagueDetailLoading
});

Details = connect(
  mapStateToProps,
  null
)(Details);

export default Details;
