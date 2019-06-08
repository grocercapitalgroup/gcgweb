var ContactPage = function () {
  return {
    //Basic Map
    initMap: function () {
      var map;
      $(document).ready(function () {
        map = new GMaps({
          div: '#map',
          scrollwheel: false,
          lat: 43.841457,
          lng: -79.385126
        });

        var marker = map.addMarker({
          lat: 43.841457,
          lng: -79.385126,
          title: 'Grocer Capictal Group',
          description: 'Suite 201, 175 Commerce Valley Drive West, Thornhill, Ontario L3T 7P6'
        });
      });
    },

    //Panorama Map
    initPanorama: function () {
      var panorama;
      $(document).ready(function () {
        panorama = GMaps.createPanorama({
          el: '#panorama',
          lat: 40.748866,
          lng: -73.988366
        });
      });
    }

  };
}();