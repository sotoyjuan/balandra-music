import api from '../../api';
import * as types from '../mutation-types';

// initial state
const state = {
  all: [],
  loaded: false,
};

// getters
const getters = {
  allAlbums: state => {
    let albums = state.all;
    return albums;
  },

  albumsLoaded: state => state.loaded,
};

// actions
const actions = {
  getAllAlbums({ commit }) {
    api.getAlbums(albums => {
      commit(types.STORE_FETCHED_ALBUMS, { albums });
      commit(types.ALBUMS_LOADED, true);
      commit(types.INCREMENT_LOADING_PROGRESS);
    });
  },
};

// mutations
const mutations = {
  [types.STORE_FETCHED_ALBUMS](state, { albums }) {
    state.all = albums;
  },

  [types.ALBUMS_LOADED](state, val) {
    state.loaded = val;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
