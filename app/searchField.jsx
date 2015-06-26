var React = require('react');
var Select = require('react-select');

var _ = require('underscore');

var Search = React.createClass({
  createOption: function (cityName) {
    return {value: cityName, label: cityName};
  },

  render: function() {
    var options = _.map(this.props.uniqueCities, this.createOption);
    var sortedOptions = _.sortBy(options, 'label');

    return (
      <Select
          value={this.props.selectedCity}
          placeholder="Choose city"
          options={sortedOptions}
          onChange={this.props.setSelectedCity}
      />
    );
  }
});

module.exports = Search;
