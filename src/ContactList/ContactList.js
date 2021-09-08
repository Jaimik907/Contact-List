import axios from "axios";
import React, { useState, useEffect } from "react";
import ContactCard from "../Contact/ContactCard";
import "./ContactList.css";

const ContactList = ({ result }) => {
  console.log("result: ", result);
  const [contactListData, setContactListData] = useState(null);
  const [search, setSearch] = useState("");
  const [filteredContacts, setFilteredContacts] = useState([]);

  const renderContactData = () => {
    if (contactListData) {
      return filteredContacts.map((contacts, index) => {
        return <ContactCard contacts={contacts} key={index} />;
      });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://reqres.in/api/users");
      setContactListData(res.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filteredData = async () => {
      if (contactListData) {
        setFilteredContacts(
          contactListData.data.filter((contacts) =>
            contacts.first_name.toLowerCase().includes(search.toLowerCase())
          )
        );
      }
    };
    filteredData();
  }, [search, contactListData]);

  return (
    <div>
      <h1>Contact List</h1>
      <input
        type="text"
        placeholder="Search Countries"
        onChange={(e) => setSearch(e.target.value)}
      />
      {renderContactData()}
    </div>
  );
};

export default ContactList;
