import "./About.css";
import LanguagesAndTools from "../components/LanguagesAndTools";

const About = () => {
  return (
    <div>
      <h2>About me</h2>
      <p>
        Hello! I'm Shmuel Toporowitch, a junior full-stack developer who has a
        deep passion for learning. I have a high logical problem-solving skills,
        and I'm able to quickly grasp new concepts. In 2022, I completed my
        studies at The School of Evolving Technology in Lakewood, NJ, I'm
        actively seeking opportunities to put my skills to use in the real world
        and make a meaningful contribution to the field. If you're looking for a
        dedicated and hard-working developer who is eager to learn and grow,
        look no further!
      </p>
      <h2>Technologies and Tools</h2>
      <LanguagesAndTools />
    </div>
  );
};

export default About;
