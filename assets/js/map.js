function initMap() {
    var uluru = {lat: 50.465891, lng: 4.877500000000055};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}