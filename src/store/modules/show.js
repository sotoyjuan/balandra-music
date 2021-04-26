import api from '../../api';
import * as types from '../mutation-types';

// initial state
const state = {
  coming_shows: [],
  past_shows: [],
  past_loaded: false,
  loaded: false
};

// getters
const getters = {
  comingShows: state => {
    let shows = state.coming_shows;
    return shows;
  },
  pastShows: state => {
    let shows = state.past_shows;
    return shows;
  },
  pastShowsLoaded: state => state.past_loaded,
  showsLoaded: state => state.loaded,
};

// actions
const actions = {
  getComingShows({ commit }) {
    api.getShows(shows => {
      commit(types.STORE_FETCHED_SHOWS, { shows });
      commit(types.SHOWS_LOADED, true);
      commit(types.INCREMENT_LOADING_PROGRESS);
    });
  },
  getPastShows({commit}) {
    api.getPastShows(shows => {
      console.log(shows)
      commit(types.STORE_FETCHED_PAST_SHOWS, { shows })
      commit(types.PAST_SHOWS_LOADED, true);
    })
  }
};

// mutations
const mutations = {
  [types.STORE_FETCHED_SHOWS](state, { shows }) {
    state.coming_shows = shows;
  },
  [types.STORE_FETCHED_PAST_SHOWS](state, { shows }) {
    state.past_shows = shows;
  },
  [types.PAST_SHOWS_LOADED](state, val) {
    state.past_loaded = val
  },
  [types.SHOWS_LOADED](state, val) {
    state.loaded = val;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
