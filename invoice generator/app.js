import React, { useState } from "react";
import InvoiceForm from "./components/InvoiceForm";
import InvoicePreview from "./components/InvoicePreview";
import PDFGenerator from "./components/PDFGenerator";

function App() {
  const [invoiceData, setInvoiceData] = useState({
    clientName: "",
    clientAddress: "",
    items: [{ description: "", quantity: 1, price: 0 }],
  });

  return (
    <div className="App">
      <h1>E-Invoice Generator</h1>
      <InvoiceForm invoiceData={invoiceData} setInvoiceData={setInvoiceData} />
      <InvoicePreview invoiceData={invoiceData} />
      <PDFGenerator invoiceData={invoiceData} />
    </div>
  );
}

export default App;
