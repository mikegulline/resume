import Fa from "./fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDotCircle } from "@fortawesome/free-regular-svg-icons";
import {
  faMapMarkerAlt,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";

const Education = ({ education }) => {
  return (
    <section id="education">
      <h2>Education</h2>

      {education.map((e) => {
        let citystate = e.state ? e.city + ", " + e.state : e.city;

        return (
          <article>
            <header>
              <h3>{e.institution}</h3>

              <ul>
                <li className="city">
                  <span className="exp">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                  </span>
                  {citystate}
                </li>

                <li>
                  <span className="exp">
                    <FontAwesomeIcon icon={faCalendarAlt} />
                  </span>
                  {e.start} to {e.end}
                </li>
              </ul>
            </header>

            <p>
              <strong className="bright-color">{e.degree}:</strong> {e.type}
            </p>

            <ul className="fa-ul">
              {e.honers.map((h) => (
                <li className="faDot">
                  <Fa i={faDotCircle} />
                  <b>{h[0]}:</b> {h[1]}
                </li>
              ))}
            </ul>
          </article>
        );
      })}
    </section>
  );
};

export default Education;
