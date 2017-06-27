var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 40.7050,
            lng: -74.009
        },
        zoom: 16,
        zoomControl: true,
        scrollwheel: false
    });

        var iconURLs = {
        hotel: '/images/lodging_0star.png',
        restaurant: '/images/restaurant.png',
        activity: '/images/star-3.png'
    };

    function drawMarker (type, coords) {
        console.log('draw marker');
        var latLng = new google.maps.LatLng(coords[0], coords[1]);
        var iconURL = iconURLs[type];
        var marker = new google.maps.Marker({
            icon: iconURL,
            position: latLng
            });
        marker.setMap(map);
        }

    // console.log($('#hotel-list'));
    // console.log(hotels);
    // console.log($('hotel-options').data.location);
    // drawMarker('hotel', [$('hotel-options').data.location.latitude, $('hotel-options').data.location.longitude]);
    drawMarker('restaurant', [40.705137, -74.013940]);
    drawMarker('activity', [40.716291, -73.995315]);
}
