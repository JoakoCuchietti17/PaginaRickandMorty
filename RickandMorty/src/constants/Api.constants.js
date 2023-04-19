export const APIRM = {
  URL: "https://rickandmortyapi.com/api",
  CHARACTES: function () {
    return `${this.URL}/character`
  },
  CHARACTES_BY_ID: function (id) {
    return `${this.URL}/character/${id}`
  },
};
