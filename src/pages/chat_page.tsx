import React, { useEffect, useState } from 'react';
import LeftHeader from '../components/left_header'
import Filter from '../components/filter'
import Contacts from '../components/contacts'
import ContactHeader from '../components/contact_header'
import ChatSection from '../components/chat_section'
import InputBox from '../components/input_box'
import useContactStore from '../store/contact-store';

const ChatPage = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState<null | string>(null);
    const [isLoading, setIsLoading] = useState(true);
    const { contacts } = useContactStore()

    console.log(contacts)

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const token = localStorage.getItem('authToken'); // or sessionStorage.getItem('authToken');

                if (!token) {
                    setError('User is not authenticated');
                    return;
                }

                const response = await fetch('http://localhost:4000/api/auth/validate-user', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch user data');
                }

                const data = await response.json();
                setUser(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchUserData();
    }, []);

    console.log(user);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <main className="w-full h-screen bg-[#fefeff] flex">
                <div className="w-1/4 h-full flex flex-col border-r-gray-300 border">
                    <div>
                        <LeftHeader />
                        <Filter />
                    </div>
                    <div className=" flex-1 overflow-y-auto">
                        <Contacts />
                    </div>
                </div>
                <div className="w-3/4 h-full flex flex-col">
                    <ContactHeader avatar="/images/avatar.jpeg" isTyping="Typing..." name="Antony Jaison" key="1" />
                    <ChatSection />
                    <InputBox />
                </div>
            </main>
        </>
    )
}

export default ChatPage