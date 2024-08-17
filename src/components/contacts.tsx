import React, { useEffect } from 'react'
import ContactCard from './contact_card'
import { BASE_URL } from '../utils/constants'
import useContactStore from '../store/contact-store'

const Contacts = () => {

    const { setContacts, contacts } = useContactStore()

    const authToken = localStorage.getItem('authToken') // or sessionStorage.getItem('authToken')

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await fetch(`${BASE_URL}/api/contacts/get-all-contacts`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${authToken}` // or sessionStorage.getItem('authToken')
                    },
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch contacts');
                }

                const data = await response.json();
                setContacts(data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchContacts();
    }, [])

    console.log(contacts)

    return (
        <div>
            {contacts.map(contact => (
                <ContactCard avatar={contact.avatar || "https://i.pravatar.cc/300"} message={contact.message} name={contact.name} timeAgo={contact.timeAgo} key={contact.id} />
            ))}
        </div>
    )
}

export default Contacts