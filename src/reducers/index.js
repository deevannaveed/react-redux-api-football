import {
  REQUEST_LEAGUES_LIST,
  RECEIVE_LEAGUES_LIST,
  REQUEST_LEAGUE_DETAIL,
  RECEIVE_LEAGUE_DETAIL
} from "../actions";

const initialState = {
  leaguesList: [],
  leagueDetail: [],
  isLeagueListLoading: false,
  isLeagueDetailLoading: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_LEAGUES_LIST:
      return {...state, isLeagueListLoading: true};
    case RECEIVE_LEAGUES_LIST:
      return {...state, leaguesList: action.json, isLeagueListLoading: false};
    case REQUEST_LEAGUE_DETAIL:
      return {...state, isLeagueDetailLoading: true};
    case RECEIVE_LEAGUE_DETAIL:
      return {...state, leagueDetail: action.json, isLeagueDetailLoading: false};
    default:
      return state;
  }
};

export default reducer;
