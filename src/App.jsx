import ContactCard from "./components/contact_card"
import ContactHeader from "./components/contact_header"
import Contacts from "./components/contacts"
import Filter from "./components/filter"
import LeftHeader from "./components/left_header"

function App() {

  return (
    <>
      <main className="w-full h-screen bg-slate-100 flex">
        <div className="w-1/4 h-full flex flex-col border-r-gray-300 border">
          <div>
            <LeftHeader />
            <Filter />
          </div>
          <div className=" flex-1 overflow-y-auto">
            <Contacts />
          </div>
        </div>
        <div className="w-3/4 h-full">
          <ContactHeader avatar="/images/avatar.jpeg" isTyping="Typing..." name="Antony Jaison" key="1"/>

        </div>
      </main>
    </>
  )
}

export default App
