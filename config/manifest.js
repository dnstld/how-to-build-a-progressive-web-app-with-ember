'use strict';

module.exports = function(/* environment, appConfig */) {
  // See https://github.com/zonkyio/ember-web-app#documentation for a list of
  // supported properties

  return {
    name: "how-to-build-a-progressive-web-app-with-ember",
    short_name: "how-to-build-a-progressive-web-app-with-ember",
    description: "",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
    ],
    ms: {
      tileColor: '#fff'
    }
  };
}
