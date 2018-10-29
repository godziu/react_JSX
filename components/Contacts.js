var Contacts = React.createClass({
  propTypes: {
    item: React.PropTypes.array.isRequired,
  },

  render: function() {
    var contacts = this.props.item.map(function(contact) {
        return (
          <Contact item={contact} key={contact.id} /> 
          );
    });

    return (
      <ul className={"contactList"}>{contacts}</ul>
    );
  }
});
