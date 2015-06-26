var React = require('react');

var SpotItem = React.createClass({
  render: function() {
    var spot = this.props.spot;

    return (
      <div className="spotItem">
        <div className="imagePanel">
          <h2 className="typeIcon">{spot.type}</h2>
          <img className="image" src={spot.imgUrl} />
        </div>
        <div className="infoPanel">
          <div className="name">{spot.name}</div>
          <div className="address">{spot.address}</div>
          <div className="description">{spot.description}</div>

        </div>
      </div>
    );
  }
});

module.exports = SpotItem;
