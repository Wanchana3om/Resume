import "./tools.css";

function Tools(props) {
  return (
    <div className="tools-container-cover">
      <div className="tool">
        <div className="tool-pic">
          <img className="tool-image" src={props.image} alt={props.alt} />
        </div>
        <div className="tool-title">
          <p7>{props.title}</p7>
        </div>
        <div className="tool-description">
          <p8>{props.description}</p8>
        </div>
      </div>
    </div>
  );
}

export default Tools;
