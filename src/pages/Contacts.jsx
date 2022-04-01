import '../styles/_Contacts.scss';

import ContactsForm from '../components/ContactsPage/ContactsForm/ContactsForm';

function Contacts() {
    return (
        <>
            <div className='container'>
                <div className='White-Block-Contacts'></div>
                <ContactsForm />
            </div>
        </>
    )
}

export default Contacts;