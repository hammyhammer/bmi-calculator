import { Link } from 'react-router-dom';
import whybmicss from './WhyBmi.module.css';

export default function WhyBmi() {
  return (
    <div className={whybmicss.why}>
      <h2 className={whybmicss.header}>Why BMI?</h2>
      <div className="horizontal"></div>
      <br />
      <div className={whybmicss.body}>
        <p>It is important to note that BMI is a not a diagnosis of any illness<a className={whybmicss.reference} href="https://www.cdc.gov/healthyweight/assessing/bmi/adult_bmi/index.html#Used" target="_blank" rel="noopener noreferrer">[1]</a>.
          <br />
          However, BMI is correlated with chronic diseases that are closely related body composition<a className={whybmicss.reference} href="https://www.cdc.gov/healthyweight/assessing/bmi/adult_bmi/index.html" target="_blank" rel="noopener noreferrer">[2]</a>.
        </p>
      </div>
      <div className={whybmicss.body}>
        <p>Some examples of chronic diseases include such as hypertension, type II diabetes, heart diease, and certain cancers<a className={whybmicss.reference} href="https://www.cdc.gov/healthyweight/assessing/bmi/adult_bmi/index.html#Consequences" target="_blank" rel="noopener noreferrer">[3]</a>.</p>
      </div>
      <div className="horizontal"></div>

      <div className={whybmicss.body}>
        <p>BMI has 4 categories: <br />
          Underweight: Less than 18.5%. <br />
          Normal: 18.5% to less than 25%. <br />
          Overweight: 25% to less than 30%. <br />
          Obese: 30.0% or higher<a className={whybmicss.reference} href="https://www.cdc.gov/healthyweight/assessing/bmi/adult_bmi/index.html#InterpretedAdults" target="_blank" rel="noopener noreferrer">[4]</a>.</p>

      </div>
      <Link
        to="/">
        <button className={whybmicss.info_button}>Return Home</button>
      </Link>


    </div>
  );
};
