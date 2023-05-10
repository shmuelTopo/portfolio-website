import "./LanguagesAndTools.css";
import TechBox, {techItems} from "./TechBox";

function LanguagesAndTools() {
  return (
    <>
      <ul className="languagesAndTools">
        {techItems.map((item) => (
          <TechBox key={item.name} name={item.name} size="lg" />
        ))}
      </ul>
    </>
  );
}

export default LanguagesAndTools;

