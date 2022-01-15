import { Link } from 'react-router-dom';

export default function WhyBmi() {
  return (
    <div>
      <h2 className="why-header">Why BMI?</h2>
      <div className="why-top">
        <p>BMI is a simple and easy to do calculation that allows insight to any potential health issues.
          It is important to note that BMI is a not a diagnosis of any illness<a className="reference" href="https://www.cdc.gov/healthyweight/assessing/bmi/adult_bmi/index.html#Used">[1]</a>.
          <br />
          <br />
          However, BMI is correlated with chronic diseases that are closely related body composition<a className="reference" href="https://www.cdc.gov/healthyweight/assessing/bmi/adult_bmi/index.html">[2]</a>.
        </p>
      </div>

      <div className="met-results-horizontal"></div>

      <div className="why-middle">
        <p>Some examples of chronic diseases include such as hypertension, type II diabetes, heart diease, and certain cancers<a className="reference" href="https://www.cdc.gov/healthyweight/assessing/bmi/adult_bmi/index.html#Consequences">[3]</a>.</p>

        <div className="met-results-horizontal"></div>

        <div className="why-bottom">
          <p>BMI has 4 categories: <br />
            Underweight: less than 18.5%. <br />
            Normal: 18.5% to less than 25%. <br />
            Overweight: 25% to less than 30%. <br />
            Obese: 30.0% or higher<a className="reference" href="https://www.cdc.gov/healthyweight/assessing/bmi/adult_bmi/index.html#InterpretedAdults">[4]</a>.</p>

        </div>


      </div>
    </div>
  )
}
