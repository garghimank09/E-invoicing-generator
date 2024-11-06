// components/InvoiceForm.js
import React from "react";

function InvoiceForm({ invoiceData, setInvoiceData }) {
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const items = [...invoiceData.items];
    items[index][name] = value;
    setInvoiceData({ ...invoiceData, items });
  };

  const addItem = () => {
    setInvoiceData({
      ...invoiceData,
      items: [...invoiceData.items, { description: "", quantity: 1, price: 0 }],
    });
  };

  return (
    <div>
      <h2>Invoice Form</h2>
      <label>Client Name:</label>
      <input
        type="text"
        value={invoiceData.clientName}
        onChange={(e) => setInvoiceData({ ...invoiceData, clientName: e.target.value })}
      />
      <label>Client Address:</label>
      <input
        type="text"
        value={invoiceData.clientAddress}
        onChange={(e) => setInvoiceData({ ...invoiceData, clientAddress: e.target.value })}
      />

      <h3>Items</h3>
      {invoiceData.items.map((item, index) => (
        <div key={index}>
          <input
            name="description"
            type="text"
            placeholder="Item Description"
            value={item.description}
            onChange={(e) => handleInputChange(e, index)}
          />
          <input
            name="quantity"
            type="number"
            placeholder="Quantity"
            value={item.quantity}
            onChange={(e) => handleInputChange(e, index)}
          />
          <input
            name="price"
            type="number"
            placeholder="Price"
            value={item.price}
            onChange={(e) => handleInputChange(e, index)}
          />
        </div>
      ))}
      <button onClick={addItem}>Add Item</button>
    </div>
  );
}

export default InvoiceForm;
