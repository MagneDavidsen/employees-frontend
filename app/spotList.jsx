var React = require('react');
var SpotItem = require('./spotItem.jsx');

var SpotList = React.createClass({
  render: function() {
    var spots = this.props.spots;

    return (
      <div>
        {spots.map(function(spot) {
          return <SpotItem spot={spot}></SpotItem>;
        })}
      </div>
    );
  }
});

module.exports = SpotList;
