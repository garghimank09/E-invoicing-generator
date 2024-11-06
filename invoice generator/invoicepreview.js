// components/InvoicePreview.js
import React from "react";

function InvoicePreview({ invoiceData }) {
  const calculateTotal = () => {
    return invoiceData.items.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
  };

  return (
    <div>
      <h2>Invoice Preview</h2>
      <p>Client: {invoiceData.clientName}</p>
      <p>Address: {invoiceData.clientAddress}</p>
      <h3>Items</h3>
      <ul>
        {invoiceData.items.map((item, index) => (
          <li key={index}>
            {item.description} - {item.quantity} x ${item.price} = $
            {item.quantity * item.price}
          </li>
        ))}
      </ul>
      <h3>Total: ${calculateTotal()}</h3>
    </div>
  );
}

export default InvoicePreview;
