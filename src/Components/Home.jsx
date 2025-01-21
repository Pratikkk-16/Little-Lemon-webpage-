import React from 'react';
import pasta from '../assets/pasta.jpg'
import greek from '../assets/greek.jpg'
import turkish from '../assets/turkish.jpg'

function Home() {
  return (
    <section id="home" className="home">
      <div className="welcome">
        <h2>Welcome to Little Lemon</h2>
        <p>Your destination for authentic international cuisines!</p>
      </div>
      <div className="cuisines">
        <div className="cuisine">
          <img src={pasta} alt="Italian Cuisine" className="cuisine-image" />
          <h3>Italian Cuisine</h3>
          <p>Enjoy the rich flavors of Italy with our pasta, pizza, and more.</p>
        </div>
        <div className="cuisine">
          <img src={turkish} alt="Turkish Cuisine" className="cuisine-image" />
          <h3>Turkish Cuisine</h3>
          <p>Delight in the savory and sweet tastes of Turkish delicacies.</p>
        </div>
        <div className="cuisine">
          <img src={greek} alt="Greek Cuisine" className="cuisine-image" />
          <h3>Greek Cuisine</h3>
          <p>Experience the fresh and vibrant dishes of Greece.</p>
        </div>
      </div>
    </section>
  );
}

export default Home;
