import React from "react";

function InventoryStatCard({ title, value, icon, color }) {
  return (
    <div className="inventory-stat" style={{ backgroundColor: color }}>
      <img src={icon} alt="Shopping cart icon" />
      <div>
        <p>{title}</p>
        <span>{value}</span>
      </div>
    </div>
  );
}

export default InventoryStatCard;
