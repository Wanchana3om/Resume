import "./contact-box.css";
function Contacts(props) {
  return (
    <div className="contact">
      <div className="content-logo">
        <img src={props.image} alt={props.alt} />
      </div>
      <div className="content-descript">
        <div>
          <p1>{props.title}</p1>
        </div>
        <div>
          <p2>{props.descript}</p2>
        </div>
      </div>
    </div>
  );
}

export function ContactsLink(props) {
  return (
    <div className="contact">
      <div className="content-logo">
        <img src={props.image} alt={props.alt} />
      </div>
      <div className="content-descript">
        <div>
          <p1>{props.title}</p1>
        </div>
        <div>
          <a href={props.link}>{props.descript}</a>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
