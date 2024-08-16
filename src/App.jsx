import ChatSection from "./components/chat_section"
import ContactHeader from "./components/contact_header"
import Contacts from "./components/contacts"
import Filter from "./components/filter"
import InputBox from "./components/input_box"
import LeftHeader from "./components/left_header"

function App() {

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

export default App
