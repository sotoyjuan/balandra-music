import api from '../../api';
import * as types from '../mutation-types';

// initial state
const state = {
  all: [],
  loaded: false,
};

// getters
const getters = {
  allShows: state => {
    let musicSheets = state.all;
    return musicSheets;
  },

  showsLoaded: state => state.loaded,
};

// actions
const actions = {
  getAllShows({ commit }) {
    api.getShows(shows => {
      commit(types.STORE_FETCHED_SHOWS, { shows });
      commit(types.SHOWS_LOADED, true);
      commit(types.INCREMENT_LOADING_PROGRESS);
    });
  },
};

// mutations
const mutations = {
  [types.STORE_FETCHED_SHOWS](state, { shows }) {
    state.all = shows;
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
