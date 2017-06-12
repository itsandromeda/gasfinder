/*global $, state*/
const stationList = (station, update) => {
    const boxStation = $('<div class="box-station"></div>'),
        detalils = $('<div class="station-details"></div>'),
        title = $('<h3>' + station.name + '</h3>'),
        address = $('<p>' + station.address + '</p>'),
        district = $('<p>' + station.district + '</p>'),
        icon = $('<i class="fa fa-map"></i>');

    detalils.append(title);
    detalils.append(address);
    detalils.append(district);
    boxStation.append(detalils);
    boxStation.append(icon);
    boxStation.on('click', () => {
        state.selectedStation = station;
        update();
        $('.prevIcon').show();
    });

    return boxStation;
};

const StationDetails = (update) => {
    const station = $('<section class="station-data"></section>'),
        mapWrap = $('<div id="map"></div>'),
        detailsWrap = $('<div class="station-wrap"></div>'),
        details = $('<div class="details"></div>'),
        gasWrap = $('<div class="gas-wrap"></div>'),
        distanceWrap = $('<div class="distance"></div>'),
        h3 = $('<h3>' + state.selectedStation.name + '</h3>'),
        hr = $('<hr>'),
        address = $('<p>' + state.selectedStation.address + '</p>');

    station.append(mapWrap);
    station.append(detailsWrap);
    detailsWrap.append(h3);
    detailsWrap.append(hr);
    detailsWrap.append(address);

    state.selectedStation.products.forEach((e) => {
        const gasType = $('<div class="gas-type">' + e + '</div>');
        gasWrap.append(gasType);
    });

    details.append(gasWrap);
    details.append(distanceWrap);
    detailsWrap.append(details);
    station.append(detailsWrap);

    var latitud,
        longitud,
        position = {
            lat: state.selectedStation.lat,
            lng: state.selectedStation.long
        };

    $(_ => {
        var styles = [{
            "featureType": "administrative",
            "stylers": [{
                "saturation": "-100"
            }]
        }, {
            "featureType": "administrative.province",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "landscape",
            "stylers": [{
                "saturation": -100
            }, {
                "lightness": 65
            }, {
                "visibility": "on"
            }]
        }, {
            "featureType": "poi",
            "stylers": [{
                "saturation": -100
            }, {
                "lightness": "50"
            }, {
                "visibility": "simplified"
            }]
        }, {
            "featureType": "road",
            "stylers": [{
                "saturation": "-100"
            }]
        }, {
            "featureType": "road.highway",
            "stylers": [{
                "visibility": "simplified"
            }]
        }, {
            "featureType": "road.arterial",
            "stylers": [{
                "lightness": "30"
            }]
        }, {
            "featureType": "road.local",
            "stylers": [{
                "lightness": "40"
            }]
        }, {
            "featureType": "transit",
            "stylers": [{
                "saturation": -100
            }, {
                "visibility": "simplified"
            }]
        }, {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "hue": "#ffff00"
            }, {
                "lightness": -25
            }, {
                "saturation": -97
            }]
        }, {
            "featureType": "water",
            "elementType": "labels",
            "stylers": [{
                "lightness": -25
            }, {
                "saturation": -100
            }]
        }];

        const map = new google.maps.Map(document.getElementById('map'), {
                center: position,
                zoom: 18,
                styles: styles,
                mapTypeControl: false
            }),
            marker = new google.maps.Marker({
                position: position,
                map: map,
                title: state.selectedStation.name,
                animation: google.maps.Animation.BOUNCE
            }),
            infowindow = new google.maps.InfoWindow({
                content: '<b>' + state.selectedStation.name + '</b><br><p>' + 
                            state.selectedStation.address + '</p>'
            });

        marker.addListener('click', function () {
            infowindow.open(map, marker);
        });
    });
    return station;
}