import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";

function InventoryItems({ items, itemsPerPage }) {
  const navigate = useNavigate();

  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;

  console.log(`Loading items from ${itemOffset} to ${endOffset}`);

  const currentItems = items.slice(itemOffset, endOffset);

  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="inventory-items">
        <h3>Inventory Items</h3>
        <table className="inventory-items-table">
          <thead>
            <tr>
              <th style={{ width: "5%" }}>S/no</th>
              <th style={{ width: "35%" }}>Name</th>
              <th style={{ width: "20%" }}>Category</th>
              <th>Price</th>
              <th style={{ width: "10%" }}>Quantity</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.length > 0 ? (
              currentItems.map((product, index) => {
                return (
                  <tr
                    key={index}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/app/product", {
                        state: product,
                      });
                    }}
                  >
                    <td>{index + 1 + itemOffset}</td>
                    <td>{product.name}</td>
                    <td>{product.categoryName}</td>
                    <td>${product.price.toFixed(2)}</td>
                    <td>{product.quantity}</td>
                    <td>${(product.price * product.quantity).toFixed(2)}</td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="6">No Products Found !</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="paginator-container">
        <ReactPaginate
          breakLabel="..."
          nextLabel="Next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< Prev"
          renderOnZeroPageCount={null}
        />
      </div>
    </>
  );
}

export default InventoryItems;
