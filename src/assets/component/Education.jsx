import "./Education.css";

function Education(props) {
  return (
    <div className="education-container-cover">
      <div className="education-content">
        <div className="education-content-top">
          <div className="education-image">
            <img className="education-img" src={props.image} alt={props.alt} />
          </div>
          <div className="education-title">
            <div>
              <p6>{props.title}</p6>
            </div>
          </div>
        </div>
        <div className="education-content-below">
          <div>
            <p7>{props.description}</p7>
          </div>
          <div>
            <p8>{props.date}</p8>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
