import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";

const Certifications = (props) => {
  return (
    <section id="certifications">
      <h2>Certifications</h2>

      {props.certifications.map((e) => {
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

            <p className="margin-bottom">
              <strong className="bright-color">{e.certification}:</strong>{" "}
              {e.description}
            </p>
          </article>
        );
      })}
    </section>
  );
};

export default Certifications;
