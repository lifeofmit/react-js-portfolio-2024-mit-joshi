import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      {/* <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="React JS" />
        <SkillList src={checkMarkIcon} skill="Redux" />
        <SkillList src={checkMarkIcon} skill="Framer Motion" />
        <SkillList src={checkMarkIcon} skill="Locomotive JS" />
        <SkillList src={checkMarkIcon} skill="Swiper JS" />
        <SkillList src={checkMarkIcon} skill="Movement JS" />
        <SkillList src={checkMarkIcon} skill="Emotion JS" />
        <SkillList src={checkMarkIcon} skill="GSAP" />
        <SkillList src={checkMarkIcon} skill="ScrollTrigger" />
      </div>
      <hr /> */}
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="SCSS" />
        <SkillList src={checkMarkIcon} skill="HTML DOM" />
        <SkillList src={checkMarkIcon} skill="Tailwind CSS" />
        <SkillList src={checkMarkIcon} skill="Bootstrap 5" />
        <SkillList src={checkMarkIcon} skill="Figma" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Photoshop" />
        <SkillList src={checkMarkIcon} skill="Illustrator" />
        <SkillList src={checkMarkIcon} skill="After Effects" />
        <SkillList src={checkMarkIcon} skill="Wordpress" />
        <SkillList src={checkMarkIcon} skill="Git & GitHub" />
        <SkillList src={checkMarkIcon} skill="Vite" />
        <SkillList src={checkMarkIcon} skill="NPM, Yarn" />
        <SkillList src={checkMarkIcon} skill="Zoho Connect" />
        <SkillList src={checkMarkIcon} skill="Vercel & Netlify" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="CorelDraw" />
        {/* <SkillList src={checkMarkIcon} skill="After Effects" /> */}
        {/* <SkillList src={checkMarkIcon} skill="Illustrator" /> */}
        <SkillList src={checkMarkIcon} skill="ProCreate" />
        {/* <SkillList src={checkMarkIcon} skill="Photoshop" /> */}
      </div>
    </section>
  );
}

export default Skills;
