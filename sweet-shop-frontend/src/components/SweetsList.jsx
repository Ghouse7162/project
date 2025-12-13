import { useState } from 'react'
import laddooImg from '../assets/laddoo.jpg'
import kajukatliImg from '../assets/kajukatli.jpg'
import basantiImg from '../assets/basanti.jpg'
import mysurpakImg from '../assets/mysurpak.jpg'
import peddaImg from '../assets/pedda.jpg'
import khalakhanImg from '../assets/khalakhan.jpg'
import jalebiImg from '../assets/jalebi.jpg'
import barfiImg from '../assets/barfi.jpg'
import rasgullaImg from '../assets/rasgulla.jpg'
import chocolateImg from '../assets/chocolate.jpg'
import lollipopImg from '../assets/lollipop.jpg'
import gummyImg from '../assets/gummy.jpg'
import './SweetsList.css' // We'll create this CSS file next

function SweetsList() {
  const [sweets, setSweets] = useState([
    { id: 1, name: 'Laddoo', price: 10, quantity: 20, image: laddooImg },
    { id: 2, name: 'Kaju Katli', price: 15, quantity: 15, image: kajukatliImg },
    { id: 3, name: 'Basanti', price: 8, quantity: 10, image: basantiImg },
    { id: 4, name: 'Mysurpak', price: 12, quantity: 12, image: mysurpakImg },
    { id: 5, name: 'Pedda', price: 9, quantity: 14, image: peddaImg },
    { id: 6, name: 'Khalakhan', price: 20, quantity: 8, image: khalakhanImg },
    { id: 7, name: 'Jalebi', price: 6, quantity: 18, image: jalebiImg },
    { id: 8, name: 'Barfi', price: 11, quantity: 16, image: barfiImg },
    { id: 9, name: 'Rasgulla', price: 7, quantity: 20, image: rasgullaImg },
    { id: 10, name: 'Chocolate', price: 2, quantity: 10, image: chocolateImg },
    { id: 11, name: 'Lollipop', price: 1, quantity: 5, image: lollipopImg },
    { id: 12, name: 'Gummy Bears', price: 3, quantity: 8, image: gummyImg },
  ])

  return (
    <div className="sweets-grid">
      {sweets.map((sweet) => (
        <div className="sweet-card" key={sweet.id}>
          <img src={sweet.image} alt={sweet.name} className="sweet-image" />
          <div className="sweet-info">
            <span className="sweet-name">{sweet.name}</span>
            <span className="sweet-price">${sweet.price}</span>
          </div>
          <div className="sweet-footer">
            <span>Quantity: {sweet.quantity}</span>
            <button disabled={sweet.quantity === 0}>Purchase</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SweetsList
