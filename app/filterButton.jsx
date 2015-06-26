var React = require('react');

var FilterButton = React.createClass({
  handleClick: function(event) {
    this.props.toggleFilter(this.props.type);
  },

  render: function() {
    var type = this.props.type;
    return (
      <span onClick={this.handleClick} className={(this.props.isActive ? "active " : "") + "filterButton"} >#{type.toLowerCase()}</span>
    );
  }
});

module.exports = FilterButton;
