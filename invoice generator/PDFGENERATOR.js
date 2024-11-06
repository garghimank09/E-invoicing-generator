// components/PDFGenerator.js
import React from "react";
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: { padding: 30 },
  section: { marginBottom: 10 },
  header: { fontSize: 20, marginBottom: 20 },
});

function PDFDocument({ invoiceData }) {
  const calculateTotal = () =>
    invoiceData.items.reduce((total, item) => total + item.quantity * item.price, 0);

  return (
    <Document>
      <Page style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.header}>Invoice</Text>
          <Text>Client: {invoiceData.clientName}</Text>
          <Text>Address: {invoiceData.clientAddress}</Text>
        </View>

        <View style={styles.section}>
          <Text>Items:</Text>
          {invoiceData.items.map((item, index) => (
            <Text key={index}>
              {item.description} - {item.quantity} x ${item.price} = ${item.quantity * item.price}
            </Text>
          ))}
        </View>

        <View style={styles.section}>
          <Text>Total: ${calculateTotal()}</Text>
        </View>
      </Page>
    </Document>
  );
}

function PDFGenerator({ invoiceData }) {
  return (
    <div>
      <PDFDownloadLink
        document={<PDFDocument invoiceData={invoiceData} />}
        fileName="invoice.pdf"
      >
        {({ loading }) => (loading ? "Generating PDF..." : "Download Invoice")}
      </PDFDownloadLink>
    </div>
  );
}

export default PDFGenerator;
