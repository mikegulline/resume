import React from 'react';
import Switch from "./common/switch";
import Info from './common/info';
import Work from './common/work';
import Education from './common/education';
import Certifications from './common/certifications';
import Skills from './common/skills';
import resume from './data/data';
import './App.scss';

class App extends React.Component {
  render() {
    const {work, education, certifications, skills} = resume;
    return (
      <>
        <article id="resume"  class="container bubble">

          <Info resume={resume} />

          <Skills skills={skills} />

          <Work work={work} />

          <Education education={education} />

          <Certifications certifications={certifications} />

          <Switch />

        </article>
        <div id="background"></div> 
      </>
    );
  }
}

export default App;
