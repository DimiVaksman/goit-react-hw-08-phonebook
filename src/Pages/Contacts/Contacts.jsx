
import { Phonebook } from "components/Phonebook/Phonebook"
import { FilterContacts } from "components/FilterContacts/FilterContacts"
import { Contacts } from "components/Contacts/Contacts"

export const ContactsApp = () => {
    return (
        <div>
            <Phonebook />
            <FilterContacts />
            <Contacts />
        </div>
    )
}