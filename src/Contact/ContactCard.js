import React from "react";

const ContactCard = ({ contacts }) => {
  return (
    <div>
      <div className="user">
        <img src={contacts.avatar} alt="avatar" className="image" />
        <div className="userDetails">
          <h3 style={{ margin: "0px" }}>
            {contacts.first_name + " " + contacts.last_name}
          </h3>
          <h5 style={{ margin: "0px" }}>{contacts.email}</h5>
        </div>
      </div>
    </div>
  );
};
export default ContactCard;
