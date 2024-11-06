// routes/invoices.js
const express = require("express");
const router = express.Router();
const Invoice = require("../models/Invoice");

// Create a new invoice
router.post("/", async (req, res) => {
  try {
    const invoice = new Invoice({
      clientName: req.body.clientName,
      clientAddress: req.body.clientAddress,
      items: req.body.items,
      total: req.body.items.reduce((sum, item) => sum + item.quantity * item.price, 0),
    });
    await invoice.save();
    res.status(201).json(invoice);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all invoices
router.get("/", async (req, res) => {
  try {
    const invoices = await Invoice.find();
    res.json(invoices);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a specific invoice by ID
router.get("/:id", async (req, res) => {
  try {
    const invoice = await Invoice.findById(req.params.id);
    if (!invoice) return res.status(404).json({ message: "Invoice not found" });
    res.json(invoice);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
