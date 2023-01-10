import React from "react";

const Pricing = ({prices}) => {

  const priceItems = prices.map((price, index)=>{
    return <li className="pricing" key={index}><b>{price.level}</b>: £{price.cost}</li>
  })

  return (
    <div>
      <h4>Pricing</h4>
      <ul>
        {priceItems}
      </ul>
    </div>
  )
}

export default Pricing;
