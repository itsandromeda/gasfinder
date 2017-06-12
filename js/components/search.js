/*global $, filterByDistrict, state*/
const search = (update) => {
    const wrapper = $('<div class="search-wrapper"></div>'),
        stations = $('<div class="station-list"></div>'),
        input = $('<input type="search" placeholder="Ingresa tu distrito a buscar">'),
        icon = $('<i class="fa fa-search""></i>');

    wrapper.append(icon);
    wrapper.append(input);
    wrapper.append(stations);

    input.on('keyup', (e) => {
        if (input.val().trim() !== "") {
            const filter = filterByDistrict(state.stations, input.val());
            reRender(stations, filter, update);
        }
    });
    return wrapper;
};

const reRender = (container, filter, update) => {
    container.empty();
    filter.forEach(district => {
        container.append(stationList(district, update));
    });
};