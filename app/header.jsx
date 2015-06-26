var React = require('react');
var Search = require('./searchField.jsx');

var Header = React.createClass({

  render: function() {
    return (
      <header>
        <h2>hipadvisor.com</h2>
        <Search
          uniqueCities={this.props.uniqueCities}
          setSelectedCity={this.props.setSelectedCity}
          selectedCity={this.props.selectedCity}
          />
      </header>
    );
  }
});

module.exports = Header;
