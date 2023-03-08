import "./skills.css";

function Skills() {
  return (
    <>
      <div className="skills-grid-cover">
        <div className="development">
          <div>
            <img
              className="code-img"
              src="/image/code.jpg"
              alt="symbolCodeSkills"
            />
          </div>
          <p1>Development</p1>
        </div>
        <div className="react">
          <div>
            <p9>React</p9>
          </div>
        </div>
        <div className="emotion">
          <div className="emotion1">
            <div>
              <p9>ChaKra UI</p9>
            </div>
          </div>
          <div className="get-line">
            <div>
              <p9>Emotion</p9>
            </div>
          </div>
        </div>
        <div className="git">
          <div>
            <p9>Git</p9>
          </div>
        </div>
        <div className="html">
          <div className="get-cover">
            <div>
              <p9>HTML</p9>
            </div>
          </div>
          <div className="get-line2">
            <p9>CSS</p9>
          </div>
          <div className="get-line2">
            <p9>JS</p9>
          </div>
        </div>
      </div>

      <div className="skills-grid-cover2">
        <div className="development">
          <div>
            <img
              className="code-img"
              src="/image/adobe.png"
              alt="symbolAdobeSkills"
            />
          </div>
          <p1>PosonalSkills</p1>
        </div>
        <div className="canva">
          <div>
            <p10>Canva</p10>
          </div>
        </div>
        <div className="autocad">
          <div>
            <p10>AutoCAD</p10>
          </div>
        </div>
        <div className="adobe">
          <div className="get-cover">
            <div>
              <p10>Word</p10>
            </div>
          </div>
          <div className="get-line">
            <p10>Excel</p10>
          </div>
          <div className="get-line3">
            <p10>Power Point</p10>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
