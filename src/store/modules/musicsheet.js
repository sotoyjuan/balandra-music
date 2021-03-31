import api from '../../api';
import * as types from '../mutation-types';

// initial state
const state = {
  all: [],
  loaded: false,
};

// getters
const getters = {
  allMusicSheets: state => {
    let musicSheets = state.all;
    return musicSheets;
  },

  musicSheetsLoaded: state => state.loaded,
};

// actions
const actions = {
  getAllMusicSheets({ commit }) {
    api.getMusicSheets(sheets => {
      commit(types.STORE_FETCHED_MUSIC_SHEETS, { sheets });
      commit(types.MUSIC_SHEETS_LOADED, true);
      commit(types.INCREMENT_LOADING_PROGRESS);
    });
  },
};

// mutations
const mutations = {
  [types.STORE_FETCHED_MUSIC_SHEETS](state, { sheets }) {
    state.all = sheets;
  },

  [types.MUSIC_SHEETS_LOADED](state, val) {
    state.loaded = val;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
