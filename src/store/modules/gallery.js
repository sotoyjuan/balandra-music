import api from '../../api';
import * as types from '../mutation-types';

// initial state
const state = {
  all: [],
  loaded: false,
};

// getters
const getters = {
  allGallery: state => {
    let galleryItems = state.all;
    return galleryItems;
  },

  galleryLoaded: state => state.loaded,
};

// actions
const actions = {
  getAllGalleryItems({ commit }) {
    api.getGalleryItems(items => {
      commit(types.STORE_FETCHED_GALLERY, { items });
      commit(types.GALLERY_LOADED, true);
      commit(types.INCREMENT_LOADING_PROGRESS);
    });
  },
};

// mutations
const mutations = {
  [types.STORE_FETCHED_GALLERY](state, { items }) {
    state.all = items;
  },

  [types.GALLERY_LOADED](state, val) {
    state.loaded = val;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
