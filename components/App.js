//lista z kontaktami
var contacts = [
    {
        id: 1,
        firstName: 'Jan',
        lastName: 'Nowak',
        email: 'jan.nowak@example.com',
    },
    {
        id: 2,
        firstName: 'Adam',
        lastName: 'Kowalski',
        email: 'adam.kowalski@example.com'
    },
    {
        id: 3,
        firstName: 'Zbigniew',
        lastName: 'Koziol',
        email: 'zbigniew.koziol@example.com'
    }
];

//obiekt z kontaktem (contactForm) który jest połączony z formularzem
var contactForm = {
    firstName: '',
    lastName: '',
    email: ''
};

var App = React.createClass({
    render: function() {
        return (
            //parametr className odpowiednik class na elemencie HTML
            React.createElement('div', {className: 'app'},
                //nagłówek
                React.createElement('h1', {}, 'Dodaj kontakt'),
                //przekazanie obiektów przez ich propsy
                //do komponentu ContactForm obiekt contactForm
                React.createElement(ContactForm, {contact: contactForm}),
                //nagłówek
                React.createElement('h1', {}, 'Kontakty'),
                //do komponentu Contacts obiekt contacts
                React.createElement(Contacts, {items: contacts}, {})
            )
        );
    }
});