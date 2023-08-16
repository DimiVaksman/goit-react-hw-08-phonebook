
import { Phonebook } from "components/Phonebook/Phonebook"
import { FilterContacts } from "components/FilterContacts/FilterContacts"
import { Contacts } from "components/Contacts/Contacts"
import { Link } from 'react-router-dom';

export const ContactsApp = () => {
    return (
        <div>
                            <Link to="/">
          <button>
            back
          </button>
        </Link>
            <Phonebook />
            <FilterContacts />
            <Contacts />
        </div>
    )
}