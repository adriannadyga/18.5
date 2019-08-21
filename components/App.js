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
            <div className={'app'}>
                <h1>Dodaj kontakt</h1>
                <contactForm contact={contactForm}></contactForm>
                <Contacts items={contacts}></Contacts>
            </div>
        )
    }
});