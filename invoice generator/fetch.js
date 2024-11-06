// Example in React component to fetch invoices
import axios from "axios";
import React, { useEffect, useState } from "react";

function InvoiceList() {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/invoices")
      .then((response) => setInvoices(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Invoices</h1>
      <ul>
        {invoices.map((invoice) => (
          <li key={invoice._id}>{invoice.clientName}: ${invoice.total}</li>
        ))}
      </ul>
    </div>
  );
}

export default InvoiceList;
