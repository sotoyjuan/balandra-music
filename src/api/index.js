import axios from 'axios';
import SETTINGS from '../settings';

export default {
  getCategories(cb) {
    axios
      .get(
        SETTINGS.API_BASE_PATH +
          'categories?sort=name&hide_empty=true&per_page=50'
      )
      .then(response => {
        cb(response.data.filter(c => c.name !== 'Uncategorized'));
      })
      .catch(e => {
        cb(e);
      });
  },

  getPages(cb) {
    axios
      .get(SETTINGS.API_BASE_PATH + "pages?per_page=10" + "&_embed")
      .then((response) => {
        cb(response.data);
      })
      .catch((e) => {
        cb(e);
      });
  },

  getPage(id, cb) {
    if(!Number.isInteger(id) || !id)
      return false;

    axios
      .get(SETTINGS.API_BASE_PATH + "pages/" + id + "?_embed")
      .then((response) => {
        cb(response.data);
      })
      .catch((e) => {
        cb(e);
      });
  },

  getPosts(limit = 5, cb) {
    axios
      .get(SETTINGS.API_BASE_PATH + "posts?per_page=" + limit + "&_embed")
      .then((response) => {
        cb(response.data);
      })
      .catch((e) => {
        cb(e);
      });
  },
  
  getAlbums(cb) {
    axios
      .get(SETTINGS.API_BASE_PATH + 'album?_embed')
      .then((response) => {
        cb(response.data);
      })
      .catch((e) => {
        cb(e);
      });
  },
  getMusicSheets(cb) {
    axios
      .get(SETTINGS.API_BASE_PATH + 'musicsheet?_embed')
      .then((response) => {
        cb(response.data);
      })
      .catch((e) => {
        cb(e);
      });
  },
  getGalleryItems(cb) {
    axios
      .get(SETTINGS.API_BASE_PATH + 'gallery?_embed')
      .then((response) => {
        cb(response.data);
      })
      .catch((e) => {
        cb(e);
      });
  },
  getShows(cb) {
    axios
      .get(SETTINGS.API_BASE_PATH + 'show?_embed')
      .then((response) => {
        cb(response.data);
      })
      .catch((e) => {
        cb(e);
      });
  },
};

