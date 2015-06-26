var React = require('react');
var _ = require('underscore');

var FilterButton = require('./filterButton.jsx');

var Filters = React.createClass({
  render: function() {
    var uniqueTypes = this.props.uniqueTypes;
    var activeFilters = this.props.activeFilters;
    var toggleFilter = this.props.toggleFilter;

    return (
      <div className="filters">
        {uniqueTypes.map(function(type) {
          return <FilterButton key={type} type={type} isActive={_.contains(activeFilters, type)} toggleFilter={toggleFilter}></FilterButton>;
        })}
      </div>
    );
  }
});

module.exports = Filters;
