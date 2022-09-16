import React from 'react';
import rainImg from '../../../images/Rainy.png';
import ProductSale from './ProductSale';
import TotalSale from './TotalSale';

export default function DashboardHome() {
  return (
    <div className='p-3'>
        <h6>Redgreen Sales</h6>
        <div className="h-notification">
            <img src={rainImg} alt="" />
            <div className="mx-3">
            <p>Notification</p>
            <span>You dont have enough stock for the next campaign.</span>
            </div>
        </div>
      <TotalSale />
      <ProductSale />
    </div>
  )
}
