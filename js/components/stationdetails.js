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

    return boxStation;
};