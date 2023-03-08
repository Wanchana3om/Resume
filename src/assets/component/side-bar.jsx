import "./side-bar.css";
import Contacts, { ContactsLink } from "./contact-box";

function SideBar() {
  return (
    <div className="sidebar-container-cover">
      <div className="profile-pic">
        <img
          className="my-profile"
          src="/image/Screenshot 2566-03-08 at 01.59.01.png"
          alt="profile"
        />
      </div>
      <div className="sidebar-container">
        <div className="profile">
          <div className="profile-name">
            <h1>Wanchana</h1>
            <h1>Inmasom</h1>
          </div>
          <div className="profile-moto">
            <div className="moto">
              <img
                className="Quotation1"
                src="/image/firstDouble.svg"
                alt="Quotation Mark"
              />
              <h3>
                Learning is the passport to a world of new possibilities and
                endless growth.
              </h3>
              <img
                className="Quotation2"
                src="/image/secondDouble.svg"
                alt="Quotation Mark"
              />
            </div>
          </div>
        </div>
        <div className="sidebar-content">
          <div className="contacts">
            <Contacts
              image="/image/email icon.svg"
              alt="email"
              title="Email"
              descript="windaywf@gmail.com"
            />
            <ContactsLink
              image="/image/github icon.svg"
              alt="github"
              title="Github"
              descript="My Website"
              link="https://www.google.com"
            />
            <Contacts
              image="/image/phone icon.svg"
              alt="phone"
              title="Phone"
              descript="(+66) 61-998-3569"
            />
            <Contacts
              image="/image/address icon.svg"
              alt="address"
              title="Address"
              descript="Ayutthaya,Wangnoi 13170"
            />
          </div>
          <div className="socials">
            <div className="socail-topic">
              <p1>Socails</p1>
            </div>
            <>
              <ContactsLink
                image="/image/Facebook_f_logo_(2021).svg.png"
                alt="Facebook"
                title="Facebook"
                descript="Wanchana Inmasom"
                link="https://www.facebook.com/wanchanaa.ang/"
              />
              <ContactsLink
                image="/image/Instargram.svg"
                alt="Instargram"
                title="Instargram"
                descript="bomb_wcn"
                link="https://www.instagram.com/bomb_wcn/"
              />
              <ContactsLink
                image="/image/twitter.png"
                alt="twitter"
                title="Twitter"
                descript="WindayZ #1418"
                link="https://twitter.com/1418Windayz"
              />
              <ContactsLink
                image="/image/github.svg"
                alt="github"
                title="Github"
                descript="Wanchana3om"
                link="https://github.com/Wanchana3om"
              />
              <ContactsLink
                image="/image/linkedin.png"
                alt="linkedin"
                title="Linkedin"
                descript="Wanchana Inmasom"
                link="https://www.google.com"
              />
            </>
          </div>
          <div className="softskills">
            <div className="softskill-topic">
              <p1>Soft Skill</p1>
            </div>
            <div className="softskill-list">
              <ul>
                <li>Fast Learning</li>
                <li>Team Player</li>
                <li>Team Orientated</li>
                <li>Eager To Learn</li>
                <li>Good Relationship</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
