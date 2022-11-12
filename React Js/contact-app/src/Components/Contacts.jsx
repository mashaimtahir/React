import React, { Component } from 'react'
import Contact from './Contact';

class contacts extends Component {
    render() {
        const { contact } = this.props;
        console.log('contacts', contact);
        return (
            <div>
                {
                    contact.map(
                        contact =>
                            <Contact
                                key={contact.id}
                                contact={contact}
                                selected />
                    )
                }
            </div>
        );
    }
}
 
export default contacts;