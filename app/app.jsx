var React = require('react');
var _ = require('underscore');

var Header = require('./header.jsx');
var Filters = require('./filters.jsx');
var SpotList = require('./spotList.jsx');

var spotStorage = require('./js/spotStorage.js');
var filter = require('./js/filter.js');

var App = React.createClass({
  getInitialState: function() {
    return { activeFilters: [], selectedCity: undefined };
  },

  toggleFilter: function(type) {
    if(_.contains(this.state.activeFilters, type)){
      this.setState({activeFilters: _.without(this.state.activeFilters, type)});
    } else {
      this.setState({activeFilters: this.state.activeFilters.concat(type)});
    }
  },

  setSelectedCity: function(selectedCity) {
    this.setState({selectedCity: selectedCity});
  },

  render: function() {
    var spots = filter.filterSpots(this.props.spots, this.state.activeFilters, this.state.selectedCity);

    return (
      <div className="container">
        <Header uniqueCities={filter.getUniqueCities(this.props.spots)} setSelectedCity={this.setSelectedCity} selectedCity={this.state.selectedCity}/>
        <h1>Showing spots in <span className="city">{this.state.selectedCity ? this.state.selectedCity : "all cities"}</span></h1>
        <Filters uniqueTypes={filter.getUniqueTypes(this.props.spots)} toggleFilter={this.toggleFilter} activeFilters={this.state.activeFilters} />
        <SpotList spots={spots} />
      </div>
    );
  }
});

React.render(<App spots={spotStorage.getSpots()} />, document.body);
