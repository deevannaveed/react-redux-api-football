import axios from "axios";

export const REQUEST_LEAGUES_LIST = "REQUEST_LEAGUES_LIST";
export const RECEIVE_LEAGUES_LIST = "RECEIVE_LEAGUES_LIST";
export const REQUEST_LEAGUE_DETAIL = "REQUEST_LEAGUE_DETAIL";
export const RECEIVE_LEAGUE_DETAIL = "RECEIVE_LEAGUE_DETAIL";

export const requestLeaguesList = () => ({
  type: REQUEST_LEAGUES_LIST
});

export const receivedLeaguesList = json => ({
  type: RECEIVE_LEAGUES_LIST,
  json: json
});

export const requestLeagueDetail = (leagueId) => ({
  type: REQUEST_LEAGUE_DETAIL,
  leagueId
});

export const receivedLeagueDetail = json => ({
  type: RECEIVE_LEAGUE_DETAIL,
  json: json
});

export function fetchLeaguesList() {
  return function (dispatch) {
    dispatch(requestLeaguesList());
    dispatch(requestLeagueDetail());
    return axios
      .get("https://www.api-football.com/demo/api/v2/leagues")
      .then(res => {
        let leagues = res.data.api.leagues
        dispatch(receivedLeaguesList(leagues));
        /** To initially load the first league details into the details component */
        dispatch(getLeagueDetailById(leagues[0].league_id));
      })
      .catch(e => {
        console.log(e);
      });
  };
}

export function getLeagueDetailById(id) {
  return function (dispatch) {
    dispatch(requestLeagueDetail());
    return axios
      .get(`https://www.api-football.com/demo/api/v2/teams/league/${id}`)
      .then(res => {
        dispatch(receivedLeagueDetail(res.data.api.teams));
      })
      .catch(e => {
        console.log(e);
      });
  };
}
