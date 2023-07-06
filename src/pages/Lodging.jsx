import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Slideshow from '../components/SlideShow';
import Hosts from '../components/Hosts';
import CollapseAbout from '../components/CollapseAbout';
import Stars from '../components/Stars';
import Tags from '../components/Tags';
import Data from '../logements.json';

function Lodging() {
  const tabPath = window.location.pathname.split('/');
  const id = tabPath[tabPath.length - 1];
  const infos = Data.find((elt) => elt.id === id);
  const navigate = useNavigate();

  useEffect(() => {
    if (!infos) {
      navigate('/Error404'); 
    }
  })
  
  if (!infos) {
    return null; 
  }


  return (
    <div>
      <Slideshow listImg={infos.pictures} />

      <div className="infos">
        <div>
          <h1 className="title">{infos.title}</h1>
          <em className="location">{infos.location}</em>
          <Tags tags={infos.tags} />
        </div>

        <div className="host">
          <Stars score={infos.rating} />
          <Hosts name={infos.host.name} picture={infos.host.picture} />
        </div>
      </div>

      <div className="dropDownContainer">
        <CollapseAbout title="Description">
          <p className="paragraph">{infos.description}</p>
        </CollapseAbout>
        <CollapseAbout title="Équipements">
          <ul className="list">
            {infos.equipments.map((eltListe, nb) => (
              <li className="eltListe" key={nb} value={eltListe}>
                {eltListe}
              </li>
            ))}
          </ul>
        </CollapseAbout>
      </div>
    </div>
  );
}

export default Lodging;
