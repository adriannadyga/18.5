var ContactForm = React.createClass({
    propTypes: {contact: React.PropTypes.object.isRequired},

    render: function() {
        return (
            <div>
                <form className={'contactForm'}>
                    <input type={'text'} placeholder={'Imię'} value={this.props.contact.firstName}></input>
                </form>
                <form className={'contactForm'}>
                    <input type={'text'} placeholder={'Imię'} value={this.props.contact.firstName}></input>
                </form>
                <input type={'email'} placeholder={'email'} value={this.props.contact.email}></input>
                <button type={'submit'}>Dodaj kontakt</button>
            </div>
        )
    },
})