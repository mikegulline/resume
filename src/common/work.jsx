import Fa from "./fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDotCircle } from "@fortawesome/free-regular-svg-icons";
import {
  faUser,
  faExternalLinkAlt,
  faMapMarkerAlt,
  faCalendarAlt,
  faCircle,
  faAdjust,
} from "@fortawesome/free-solid-svg-icons";

const Work = ({ work }) => {
  return (
    <section id="work">
      <h2>Work History</h2>

      {work.map((w) => {
        let citystate = w.state ? w.city + ", " + w.state : w.city;

        let onsite = w.onsite ? "In-house" : "Remote";

        let onsiteI = w.onsite ? faUser : faExternalLinkAlt;

        let type = w.type === "Full-Time" ? faCircle : faAdjust;

        return (
          <article>
            <header>
              <h3>{w.title}</h3>

              <ul>
                <li className="city">
                  <span className="exp">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                  </span>
                  {citystate}
                </li>
                <li className="type">
                  <span className="exp">
                    <FontAwesomeIcon icon={type} />
                  </span>
                  {w.type}
                </li>
                <li className="onsite">
                  <span className="exp">
                    <FontAwesomeIcon icon={onsiteI} />
                  </span>
                  {onsite}
                </li>
                <li className="startend">
                  <span className="exp">
                    <FontAwesomeIcon icon={faCalendarAlt} />
                  </span>
                  {w.start} to {w.end}
                </li>
              </ul>
            </header>

            <p>
              <strong className="bright-color">{w.company}: </strong>
              {w.description}
            </p>

            <Properties properties={w.properties} />

            <ul className="fa-ul">
              {w.notes.map((n) => (
                <li className="faDot">
                  <Fa i={faDotCircle} />

                  <span dangerouslySetInnerHTML={{ __html: n }} />
                </li>
              ))}
            </ul>
          </article>
        );
      })}
    </section>
  );
};

const Properties = ({ properties }) => {
  if (typeof properties === "object")
    return (
      <p className="properties">
        <strong>Properties: </strong>

        {properties.map((p, i) => (
          <>
            {i > 0 ? ", " : ""}
            <a href={p[1]} target="_blank" rel="noreferrer">
              {p[0]}
            </a>
          </>
        ))}
      </p>
    );

  return <></>;
};

export default Work;
