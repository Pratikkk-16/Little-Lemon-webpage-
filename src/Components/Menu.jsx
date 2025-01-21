import React from 'react';

function Menu() {
  return (
    <section id="menu" className="menu">
      <h2>Our Menu</h2>
      <div className="menu-section">
        <h3>Italian Cuisine</h3>
        <ul>
          <li>Margherita Pizza - $12.99</li>
          <li>Spaghetti Carbonara - $14.99</li>
          <li>Tiramisu - $6.99</li>
        </ul>
      </div>
      <div className="menu-section">
        <h3>Turkish Cuisine</h3>
        <ul>
          <li>Doner Kebab - $10.99</li>
          <li>Lahmacun - $8.99</li>
          <li>Baklava - $7.99</li>
        </ul>
      </div>
      <div className="menu-section">
        <h3>Greek Cuisine</h3>
        <ul>
          <li>Moussaka - $13.99</li>
          <li>Greek Salad - $9.99</li>
          <li>Spanakopita - $7.99</li>
        </ul>
      </div>
    </section>
  );
}

export default Menu;
