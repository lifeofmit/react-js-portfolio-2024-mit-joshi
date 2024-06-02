import styles from './ProjectsStyles.module.css';
import taskinfinity from '../../assets/takshinfinity.png';
import mightythread from '../../assets/mightythread.png';
import smallworld from '../../assets/smallworldimmigration.png';
import oss from '../../assets/osseous.png';
import curis from '../../assets/curisls.png';
import codexdrugs from '../../assets/codexdrugs.png';
import probal from '../../assets/probal.png';
import flyingbees from '../../assets/flyingbees.png';
import district98 from '../../assets/district98.png';
import hasten from '../../assets/hastensourcing.png';
import empire from '../../assets/empirecustomhomes.png';
import spaceship from '../../assets/spaceship.png';
import reactjobportal from '../../assets/reactjobportal.png';
import creativePort from '../../assets/creativePortfolio.png';
import creativePort2 from '../../assets/creativePortfolio2.png';
import eyeballs from '../../assets/eyeball.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={taskinfinity}
          link="https://takshinfinity.com/"
          h3="Live Project 1"
          p="Toy Store"
        />
        <ProjectCard
          src={mightythread}
          link="https://mightythread.com/"
          h3="Live Project 2"
          p="Clothing Store"
        />
        <ProjectCard
          src={smallworld}
          link="https://smallworldimmigration.ca/"
          h3="Live Project 3"
          p="Immigration Services"
        />
        <ProjectCard
          src={oss}
          link="https://osseous.in/"
          h3="Live Project 4"
          p="Orthopedic Manufacturer"
        />
        <ProjectCard
          src={curis}
          link="https://curisls.com/"
          h3="Live Project 5"
          p="Pharmaceutical Company"
        />
        <ProjectCard
          src={codexdrugs}
          link="https://codexdrugs.in/"
          h3="Live Project 6"
          p="Herbal (Ayurvedic) Online Store"
        />
        <ProjectCard
          src={probal}
          link="https://probal.in/"
          h3="Live Project 7"
          p="Compliance and CA Firm"
        />
        <ProjectCard
          src={flyingbees}
          link="https://flyingbees.in/"
          h3="Live Project 8"
          p="Digital Marketing Company"
        />
        <ProjectCard
          src={district98}
          link="https://district98.org/"
          h3="Live Project 9"
          p="Toastmasters International Club"
        />
        <ProjectCard
          src={hasten}
          link="https://hastensourcing.com/"
          h3="Live Project 10"
          p="Sourcing Company"
        />
        <ProjectCard
          src={empire}
          link="https://empirecustomhomes.ca/"
          h3="Live Project 11"
          p="Custom Home Building Services"
        />
        <ProjectCard
          src={spaceship}
          link="https://github.com/lifeofmit/3d-spaceship"
          h3="Practice Project 1"
          p="3D Spaceship"
        />
        <ProjectCard
          src={reactjobportal}
          link="https://github.com/lifeofmit/react-job-portal"
          h3="Practice Project 2"
          p="React Job Portal"
        />
        <ProjectCard
          src={creativePort}
          link="https://github.com/lifeofmit/react-job-portal"
          h3="Practice Project 3"
          p="Creative Portfolio"
        />
        <ProjectCard
          src={creativePort2}
          link="https://github.com/lifeofmit/react-job-portal"
          h3="Practice Project 4"
          p="Three JS Portfolio"
        />
        <ProjectCard
          src={eyeballs}
          link="https://github.com/lifeofmit/react-job-portal"
          h3="Practice Project 5"
          p="Magnetic Eyeballs"
        />
      </div>
    </section>
  );
}

export default Projects;
