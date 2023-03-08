import "./experience.css";
export const experienceData = [
  {
    title: "TechUp",
    content:
      "I have been actively developing my skills as a full-stack developer for the past four months.",
    time: "Present",
  },
  {
    title: "Product Engineer",
    content:
      "Experienced Product Engineer skilled in implementing data center rooms. Collaborated with cross-functional teams and conducted maintenance and troubleshooting to ensure uninterrupted data center operations.",
    time: "Sep 2021 - Dec 2022",
  },
  {
    title: "Studied General English",
    content:
      "Studied General English in Australia for one year, achieving upper-intermediate level proficiency.",
    time: "Jan 2020 - Mar 2021",
  },
  {
    title: "Internship at PTT",
    content:
      "Interned at PTT public company limited and maintenance block value station and gained experience in the gas chromatography process.",
    time: " Mar 2018 - Jul 2018",
  },
];

function Experience() {
  return (
    <>
      {experienceData.map((data, index) => {
        return (
          <div className="experience-box" key={index}>
            <div className="experience-box-cover">
              <div className="experience-box-title">
                <p3>{data.title}</p3>
              </div>
              <div className="experience-box-content">
                <p4>{data.content}</p4>
              </div>
            </div>
            <div className="experience-box-time">
              <div>
                <p5>{data.time}</p5>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Experience;
