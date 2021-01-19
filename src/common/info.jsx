import React, { Component } from "react";
import Fa from "./fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faMobileAlt,
  faEnvelopeOpen,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

//===========================
// INFO =====================
//===========================

class Info extends Component {
  handelSwitch = (e) => {
    e.target.checked
      ? document.getElementById("root").classList.remove("dark")
      : document.getElementById("root").classList.add("dark");
  };

  render() {
    let info = this.props.resume.info;
    let contact = this.props.resume.contact;
    // get # years experience
    let careerLen =
      new Date().getFullYear() -
      this.props.resume.work
        .map((a) => a.start)
        .sort()
        .shift();
    // format city, state
    let citystate = contact.address.state
      ? contact.address.city + ", " + contact.address.state
      : contact.address.city;

    return (
      <section id="info">
        <div class="toggleX">
          <input type="checkbox" id="switch" onChange={this.handelSwitch} />
          <label for="switch" aria-hidden="true">
            Toggle
          </label>
        </div>

        <header>
          <h1>
            {info.first} {info.last}
          </h1>
          <h3>{info.title}</h3>
          <ul>
            <li className="city">
              <span className="exp">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </span>
              {citystate}
            </li>
            <li>
              <span className="exp">{careerLen}</span>Years Experience
            </li>
          </ul>
        </header>

        <p
          className="margin-bottom"
          dangerouslySetInnerHTML={{ __html: info.summary }}
        />

        <Contact contact={contact} />
      </section>
    );
  }
}

//===========================
// CONTACT ==================
//===========================
const Contact = (props) => {
  let contact = props.contact;

  let phone = contact.phone && (
    <li>
      <Fa i={faPhone} />
      <strong>Phone: </strong>
      {contact.phone}
    </li>
  );

  let cell = contact.cell && (
    <li>
      <Fa i={faMobileAlt} />
      <strong>Cell: </strong>
      {contact.cell}
    </li>
  );

  let email = contact.email && (
    <li>
      <Fa i={faEnvelopeOpen} />
      <strong>Email: </strong>
      {contact.email}
    </li>
  );

  let address = (contact.address.address || contact.address.city) && (
    <li>
      <Fa i={faMapMarkerAlt} />
      <strong>Address: </strong>
      <Address contact={contact} />
    </li>
  );

  let qr = (
    <li className="qr">
      <img
        alt=""
        src="https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=http://mikegulline.com/"
      />
    </li>
  );
  let hidden = contact.hidden;

  if (hidden) return <></>;

  return (
    <ul id="contact" className="fa-ul">
      {phone}

      {cell}

      {email}

      {address}

      {qr}
    </ul>
  );
};
//===========================
// ADDRESS ==================
//===========================
const Address = (props) => {
  let contact = props.contact;
  let address = contact.address;

  // if hidden only show city state zip
  if (contact.hidden) {
    return (
      <>
        {address.city}, {address.state} {address.zip}
      </>
    );
  }

  return (
    <>
      {address.city}, {address.state} {address.zip}
    </>
  );
};

export default Info;
