var Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      <div className={'contactItem'}>
        <i className= {"fa fa-user-tie"} src = {"http://icons.veryicon.com/ico/System/100%20Flat%20Vol.%202/contacts.ico"}></i>
        <p className= {"contactLabel"}>
          Imię: {this.props.item.firstName}
        </p>
        <p className= {"contactLabel"}>
          Nazwisko: {this.props.item.lastName}
        </p>
        <a className = {"contactEmail"} href = {"mailto" + this.props.item.email}>
          {this.props.item.emial}
        </a>
      </div>
    )
  },
});

      