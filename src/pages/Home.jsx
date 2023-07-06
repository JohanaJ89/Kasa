import React from 'react';
import TopBannerH from '../components/TopBannerH';
import CardHouse from '../components/CardHouse';
import Data from '../logements.json';

const Home = () => {
    return (
      <div>
        <div>
          <TopBannerH />
        </div>
        <div className="bgCards">
            {Data.map((item) => (
              <CardHouse key={item.id} data={item} link={'Lodging/' + item.id} />
            ))}
          </div>
        </div>
    );
};

export default Home;