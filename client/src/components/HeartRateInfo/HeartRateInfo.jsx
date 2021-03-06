import { Link } from 'react-router-dom';
import heartinfocss from './HeartRateInfo.module.css'

export default function HeartRateInfo() {
  return (
    <div className={heartinfocss.whole}>
      <h2 className={heartinfocss.header}>Why Heart Rate?</h2>
      <div className="horizontal"></div>
      <br />
      <div className={heartinfocss.body}>
        <p>Our resting heart rate can provide some information regarding our fitness level, heart health and emotional health
          <a className={heartinfocss.reference} href="https://www.sutterhealth.org/health/heart/get-to-know-your-heart-rate-it-might-save-your-life#:~:text=Track%20Your%20Heart%20Rate,dehydration%2C%20inactivity%20and%20persistent%20stress." target="_blank" rel="noopener noreferrer">[1]</a>.
          <br />
          <br />
          Your heart rate by itself is not enough to determine if there is a health issue we ought to be aware of.
          Many factors such as having a fever, being under stress, or dehydration can affect your resting heart rate<a className={heartinfocss.reference} href="https://www.cdc.gov/healthyweight/assessing/bmi/adult_bmi/index.html" target="_blank" rel="noopener noreferrer">[2]</a>.
        </p>
      </div>

      <div className="horizontal"></div>


      <div className={heartinfocss.body}>
        <p>There are 3 ranges associated with resting heart rate: <br />
          Below Normal: Less than 60 beats per minutes. <br />
          Normal: Between 60 to 100 beats per minute. <br />
          Above Normal: Above 100 beats per minute<a className={heartinfocss.reference} href="https://www.mayoclinic.org/healthy-lifestyle/fitness/expert-answers/heart-rate/faq-20057979#:~:text=A%20normal%20resting%20heart%20rate%20for%20adults%20ranges%20from%2060,to%2040%20beats%20per%20minute" target="_blank" rel="noopener noreferrer">[3]</a>.</p>

      </div>
      <div className={heartinfocss.test}>
        <Link
          to="/">
          <button className={heartinfocss.info_button}>Return Home</button>
        </Link>
      </div>
    </div>

  );
};
