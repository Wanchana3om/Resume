import Experience, { experienceData } from "./experience";
import Education from "./Education";
import Skills from "./skills";
import Tools from "./tools";
import "./content.css";

function Content() {
  return (
    <>
      <div className="content-container-cover">
        <div className="experience">
          <div className="content-topic">
            <div>
              <h2>Experience</h2>
            </div>
          </div>
          <div className="content-experience">
            <Experience />
          </div>
        </div>
      </div>
      <div className="content-container-cover2">
        <div className="education">
          <div className="content-topic">
            <div>
              <h2>Education</h2>
            </div>
          </div>
          <div className="content-education">
            <Education
              image="/image/RsuL.png"
              title="Rangsit University"
              alt="Rangsit University logo"
              description="Bachaelor of Degree in College of Electrical Engineering"
              date="Graduated 2019, GPA 3.02"
            />
            <Education
              image="/image/Techup.png"
              title="TechUp"
              alt="TechUp logo"
              description="I am currently enrolled in a four-month full-stack course at TechUp."
              date="Still Leaning"
            />
            <Education
              image="/image/greenwichlogo.png"
              title="Greenwich English College"
              alt="Greenwich logo"
              description="Studied General English in Australia on Upper-intermediate level"
              date="Graduated 2021"
            />
          </div>
        </div>
      </div>
      <div className="content-container-cover3">
        <div className="skills">
          <div className="content-topic">
            <div>
              <h2>Skills</h2>
            </div>
          </div>
          <div className="content-skills">
            <Skills />
          </div>
        </div>
      </div>
      <div className="content-container-cover">
        <div className="tools">
          <div className="content-topic">
            <div>
              <h2>Tools</h2>
            </div>
          </div>
          <div className="content-tools">
            <div className="content-organize-box">
              <Tools
                image="/image/figma.webp"
                alt="figma"
                title="Figma"
                description="UI Disign"
              />
              <Tools
                image="/image/notion.png"
                alt="notion"
                title="Notion"
                description="Project Management"
              />
              <Tools
                image="/image/vscode.ico"
                alt="vscode"
                title="VS Code"
                description="Code editor"
              />
              <Tools
                image="/image/xcode.png"
                alt="xcode"
                title="Xcode"
                description="iOS development"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
