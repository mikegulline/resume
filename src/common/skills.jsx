const Skills = ({ skills }) => {
  return (
    <section id="skills">
      <h2>Skills</h2>

      {skills.map((s) => (
        <article>
          <header>
            <h3>{s[0]}</h3>
          </header>

          <ul className="skills">
            {s[1].map((i) => (
              <li>{i}, </li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
};

export default Skills;
