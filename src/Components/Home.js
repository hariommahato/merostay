

import React from 'react';
import Banner from './Banner';
import Card from './Card';
import './Home.css'

const Home = () => {
  return (
    <div>
      <div className="home">
        <Banner />
        <div className="home__section">
          <Card 
          src="https://images.oyoroomscdn.com/uploads/hotel_image/35605/medium/3889d078c71c6661.jpg"
          title="Online Experience"
          description="Unique Activities we can do together,led by a world of hosts"
          />
          <Card
             src="https://images.oyoroomscdn.com/uploads/hotel_image/43978/medium/061cdd843c44e903.jpg"
          title="Online Experience"
          description="Unique Activities we can do together,led by a world of hosts"
          />
          <Card
             src="https://images.oyoroomscdn.com/uploads/hotel_image/48346/medium/17bb6399c71c0b08.jpg"
          title="Online Experience"
          description="Unique Activities we can do together,led by a world of hosts"
          />

        </div>
        <div className="home__section">
          <Card  src="https://images.oyoroomscdn.com/uploads/hotel_image/54835/medium/ac84a969fb5c9cc2.jpg"
          title="Online Experience"
          description="Unique Activities we can do together,led by a world of hosts"
            price="Rs.1000/Per Night"
          />
          <Card  src="https://images.oyoroomscdn.com/uploads/hotel_image/55745/medium/2a083680bf1e2f68.jpg"
          title="Online Experience"
          description="Unique Activities we can do together,led by a world of hosts"
          price="Rs.4000/Per Night"
          />
          <Card  src="https://images.oyoroomscdn.com/uploads/hotel_image/60090/medium/466ad83556864f4c.jpg"
          title="Online Experience"
          description="Unique Activities we can do together,led by a world of hosts"
          price="Rs.3000/Per Night"
          />

        </div>
      </div>
    </div>
  );
};

export default Home;
