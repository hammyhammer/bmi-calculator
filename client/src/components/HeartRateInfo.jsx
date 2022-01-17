export default function HeartRateInfo() {
  return (
    <div>
      <h2 className="why-header">Why Heartrate?</h2>
      <div className="why-top">
        <p>Our resting heart rate can provide some information regarding our fitness level, heart health and emotional health
          <a className="reference" href="https://www.sutterhealth.org/health/heart/get-to-know-your-heart-rate-it-might-save-your-life#:~:text=Track%20Your%20Heart%20Rate,dehydration%2C%20inactivity%20and%20persistent%20stress.">[1]</a>.
          <br />
          <br />
          Your heart rate by itself is not enough to determine if there is a health issue we ought to be aware of.
          Many factors such as having a fever, being under stress, or dehydration. <a className="reference" href="https://www.cdc.gov/healthyweight/assessing/bmi/adult_bmi/index.html">[2]</a>.
        </p>
      </div>

      <div className="met-results-horizontal"></div>

      <div className="why-middle">
        <p>Some examples of chronic diseases include such as hypertension, type II diabetes, heart diease, and certain cancers<a className="reference" href="https://www.cdc.gov/healthyweight/assessing/bmi/adult_bmi/index.html#Consequences">[3]</a>.</p>

        <div className="met-results-horizontal"></div>

        <div className="why-bottom">
          <p>There are 3 ranges associated with resting heart rate: <br />
            Below Normal: Less than 60 beats per minutes. <br />
            Normal: Between 60 to 100 beats per minute. <br />
            Above Normal: Above 100 beats per minute. <br />
            <a className="reference" href="https://www.cdc.gov/healthyweight/assessing/bmi/adult_bmi/index.html#InterpretedAdults">[4]</a>.</p>

        </div>


      </div>
    </div>
  )
}
