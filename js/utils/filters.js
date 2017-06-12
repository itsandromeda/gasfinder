const filterByDistrict = (stations, query) => {
    'use strict';
    const districtFiltered = stations.filter((e) => {
        return e.district.toLowerCase().indexOf(query.toLowerCase()) != -1;
    });
    return districtFiltered;
};