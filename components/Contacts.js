var Contacts = React.createClass({
    propTypes: {
        items: React.PropTypes.array.isRequired,
    },
    //tworzenie listy kontaktów na podstawie przekazanych parametrów
    render: function() {
        //metoda map bierze element z tablicy this.props.items i przekształca za pomocą funkcji, tworząc nową listę elementów
        var contacts = this.props.items.map(function(contact) {
            return React.createElement(Contact, {item: contact, key: contact.id});
        });

        return (
            <ul className={'contactsList'} contacts></ul>
        );
    }
});