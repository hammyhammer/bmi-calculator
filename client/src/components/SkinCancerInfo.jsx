import { Link } from 'react-router-dom';

export default function SkinCancerInfo() {
  return (
    <div>
      <h2 className="header">Why Do Skin Checks?</h2>
      <div className="horizontal"></div>
      <div className="body">
        <p>Skin checks help detect skin cancer in the earlier stages.
          <br />
          <br />A skin check is not used to diagnosis skin cancer<a className="reference" href="https://medlineplus.gov/lab-tests/skin-cancer-screening/#:~:text=The%20screening%20checks%20the%20skin,cell%20and%20squamous%20cell%20cancers.">[1].</a>.
          <br />

          It is suggested to do a self skin check once a month, and to have a skin examination once a year by a healthcare professional<a className="reference" href="https://my.clevelandclinic.org/health/diagnostics/8648-skin-self-exam#:~:text=You%20should%20perform%20a%20skin,well%20as%20a%20hand%20mirror.">[2]</a>.
        </p>
      </div>

      <div className="horizontal"></div>

      <div className="body">
        <p>Examples for certain risk factors of skin cancer include a history of sunburns, family history of skin cancer, and frequent exposure to the sun<a className="reference" href="https://medlineplus.gov/lab-tests/skin-cancer-screening/#:~:text=What%20is%20a%20skin%20cancer,be%20signs%20of%20skin%20cancer.">[3]</a>.</p>

        <Link
          to="/">
          <button className="info-button">Return Home</button>
        </Link>

      </div>
    </div>
  );
};
