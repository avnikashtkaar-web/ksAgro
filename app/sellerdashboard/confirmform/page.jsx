"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import "jspdf-autotable";

const AddCustomer = () => {
  const [customerName, setCustomerName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [village, setVillage] = useState("");
  const [mobile, setMobile] = useState("");
  const [crop, setCrop] = useState("");
  const [area, setArea] = useState("");

  const [customers, setCustomers] = useState([]);
  const [showTable, setShowTable] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  const [search, setSearch] = useState(""); 
  const [seeAll, setSeeAll] = useState(false); // NEW STATE

  const handleSubmit = (e) => {
    e.preventDefault();

    const customerData = {
      customerName,
      fatherName,
      village,
      mobile,
      crop,
      area,
    };

    if (editingIndex !== null) {
      const updated = [...customers];
      updated[editingIndex] = customerData;
      setCustomers(updated);
      setEditingIndex(null);
    } else {
      setCustomers([...customers, customerData]);
    }

    setCustomerName("");
    setFatherName("");
    setVillage("");
    setMobile("");
    setCrop("");
    setArea("");
  };

  const handleDelete = (index) => {
    const filtered = customers.filter((_, i) => i !== index);
    setCustomers(filtered);
  };

  const handleEdit = (index) => {
    const cust = customers[index];
    setCustomerName(cust.customerName);
    setFatherName(cust.fatherName);
    setVillage(cust.village);
    setMobile(cust.mobile);
    setCrop(cust.crop);
    setArea(cust.area);
    setEditingIndex(index);
    setShowTable(false);
  };

  // Export to Excel
  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(customers);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Customers");
    XLSX.writeFile(wb, "customers.xlsx");
  };

  // Export to PDF
  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.text("Customer List", 14, 15);
    doc.autoTable({
      startY: 20,
      head: [["Customer Name", "Father Name", "Village", "Mobile", "Crop", "Area"]],
      body: customers.map((cust) => [
        cust.customerName,
        cust.fatherName,
        cust.village,
        cust.mobile,
        cust.crop,
        cust.area,
      ]),
    });
    doc.save("customers.pdf");
  };

  // Filter customers
  const filteredCustomers = seeAll
    ? customers // Show all if See All pressed
    : customers.filter(
        (cust) =>
          cust.customerName.toLowerCase().includes(search.toLowerCase()) ||
          cust.village.toLowerCase().includes(search.toLowerCase())
      );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-50 via-white to-green-100 px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-lg bg-white rounded-2xl shadow-2xl p-8"
      >
        <h2 className="text-3xl font-extrabold text-green-700 mb-6 text-center">
          {editingIndex !== null ? "✏️ Edit Customer" : "🌿 Add Customer"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Customer Name */}
          <div className="flex flex-col gap-1">
            <label className="font-medium" htmlFor="customer-name">
              Customer Name
            </label>
            <input
              id="customer-name"
              type="text"
              placeholder="Enter customer name"
              className="outline-none py-2.5 px-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              required
            />
          </div>

          {/* Father Name */}
          <div className="flex flex-col gap-1">
            <label className="font-medium" htmlFor="father-name">
              Father Name
            </label>
            <input
              id="father-name"
              type="text"
              placeholder="Enter father name"
              className="outline-none py-2.5 px-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition"
              value={fatherName}
              onChange={(e) => setFatherName(e.target.value)}
              required
            />
          </div>

          {/* Village */}
          <div className="flex flex-col gap-1">
            <label className="font-medium" htmlFor="village">
              Village
            </label>
            <input
              id="village"
              type="text"
              placeholder="Enter village name"
              className="outline-none py-2.5 px-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition"
              value={village}
              onChange={(e) => setVillage(e.target.value)}
              required
            />
          </div>

          {/* Mobile */}
          <div className="flex flex-col gap-1">
            <label className="font-medium" htmlFor="mobile">
              Mobile Number
            </label>
            <input
              id="mobile"
              type="tel"
              placeholder="Enter 10-digit mobile number"
              pattern="[0-9]{10}"
              className="outline-none py-2.5 px-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
          </div>

          {/* Crop */}
          <div className="flex flex-col gap-1">
            <label className="font-medium" htmlFor="crop">
              Crop
            </label>
            <input
              id="crop"
              type="text"
              placeholder="Enter crop name"
              className="outline-none py-2.5 px-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition"
              value={crop}
              onChange={(e) => setCrop(e.target.value)}
              required
            />
          </div>

          {/* Area */}
          <div className="flex flex-col gap-1">
            <label className="font-medium" htmlFor="area">
              Crop Area (in acres/hectares)
            </label>
            <input
              id="area"
              type="number"
              placeholder="Enter crop area"
              className="outline-none py-2.5 px-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              required
            />
          </div>

          {/* Add Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-300"
          >
            {editingIndex !== null ? "Update Customer ✅" : "Add Customer ➕"}
          </motion.button>
        </form>

        {/* Toggle & See All Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-4">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowTable(!showTable)}
            className="flex-1 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
          >
            {showTable ? "Hide Customers 👀" : "View Customers 📋"}
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setSeeAll(true);
              setShowTable(true);
            }}
            className="flex-1 px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition duration-300"
          >
            See All Customers 🌍
          </motion.button>
        </div>
      </motion.div>

      {/* Customers Table */}
      {showTable && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-10 w-full max-w-6xl bg-white rounded-2xl shadow-2xl p-6"
        >
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-4">
            <h3 className="text-xl font-bold text-green-700">📋 Customer List</h3>

            {/* Search */}
            {!seeAll && (
              <input
                type="text"
                placeholder="Search by name or village..."
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-200 focus:border-green-500 outline-none"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            )}
          </div>

          {/* Export Buttons */}
          <div className="flex gap-3 mb-4">
            <button
              onClick={exportToExcel}
              className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"
            >
              📊 Export Excel
            </button>
            <button
              onClick={exportToPDF}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              📄 Export PDF
            </button>
          </div>

          {filteredCustomers.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-200 rounded-lg shadow-md text-sm">
                <thead className="bg-green-100">
                  <tr>
                    <th className="p-3 border">Customer Name</th>
                    <th className="p-3 border">Father Name</th>
                    <th className="p-3 border">Village</th>
                    <th className="p-3 border">Mobile</th>
                    <th className="p-3 border">Crop</th>
                    <th className="p-3 border">Area</th>
                    <th className="p-3 border text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCustomers.map((cust, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="p-3 border">{cust.customerName}</td>
                      <td className="p-3 border">{cust.fatherName}</td>
                      <td className="p-3 border">{cust.village}</td>
                      <td className="p-3 border">{cust.mobile}</td>
                      <td className="p-3 border">{cust.crop}</td>
                      <td className="p-3 border">{cust.area}</td>
                      <td className="p-3 border flex gap-2 justify-center">
                        <button
                          onClick={() => handleEdit(index)}
                          className="px-3 py-1 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 text-xs"
                        >
                          ✏️ Edit
                        </button>
                        <button
                          onClick={() => handleDelete(index)}
                          className="px-3 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700 text-xs"
                        >
                          🗑 Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-gray-500 text-center">No customers found.</p>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default AddCustomer;
