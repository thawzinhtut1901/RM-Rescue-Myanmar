import React, { useEffect, useState } from "react";
import emergency_contacts from "./data/contact.json";
import ContactList from "./pages/personList";
import EmergencyContactList from "./pages/personList";

const App = () => {
  console.log(emergency_contacts);
  return (
    <div>
      <EmergencyContactList />
    </div>
  );
};

export default App;
