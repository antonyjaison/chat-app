import { create } from 'zustand'

const useContactStore = create((set) => ({
    contacts: [],
    setContacts: (contacts) => set({ contacts }),
}))

export default useContactStore