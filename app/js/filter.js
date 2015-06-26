var _ = require('underscore');

function getUniques(spots, value) {
  return _.uniq(_.pluck(spots, value));
}

function getUniqueTypes(spots) {
  return getUniques(spots, 'type');
}

function getUniqueCities(spots) {
  return getUniques(spots, 'city');
}

function filterSpots(spots, filters, city) {
  var filteredByType;

  if(filters.length > 0) {
    filteredByType = spots.filter(spot => {return _.contains(filters, spot.type)});
  } else {
    filteredByType = spots;
  }

  if(city) {
    return filteredByType.filter(spot => {return spot.city == city});
  } else {
    return filteredByType;
  }
}

exports.getUniqueTypes = getUniqueTypes;
exports.getUniqueCities = getUniqueCities;
exports.filterSpots = filterSpots;
