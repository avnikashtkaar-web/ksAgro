"use client";
import React, { useState } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const AddProduct = () => {
  const [files, setFiles] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Earphone");
  const [price, setPrice] = useState("");
  const [offerPrice, setOfferPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex-1 min-h-screen flex flex-col justify-center items-center bg-green-50">
      <form
        onSubmit={handleSubmit}
        className="md:p-10 p-6 space-y-6 max-w-xl w-full bg-green-100 rounded-3xl shadow-md border border-green-200 transition-all duration-300 hover:shadow-lg"
      >
        <h2 className="text-3xl font-bold text-green-800 text-center">
          Add New Product
        </h2>

        {/* Product Images */}
        <div>
          <p className="text-base font-semibold text-green-800 mb-2">
            Product Images
          </p>
          <div className="flex flex-wrap items-center gap-4">
            {[...Array(4)].map((_, index) => (
              <label key={index} htmlFor={`image${index}`} className="cursor-pointer">
                <input
                  type="file"
                  id={`image${index}`}
                  hidden
                  onChange={(e) => {
                    const updatedFiles = [...files];
                    updatedFiles[index] = e.target.files[0];
                    setFiles(updatedFiles);
                  }}
                />
                <Image
                  className="rounded-lg border border-green-300 object-cover hover:scale-105 hover:border-green-400 transition-transform duration-200"
                  src={
                    files[index]
                      ? URL.createObjectURL(files[index])
                      : assets.upload_area
                  }
                  alt={`Product image ${index + 1}`}
                  width={100}
                  height={100}
                />
              </label>
            ))}
          </div>
        </div>

        {/* Product Name */}
        <div className="flex flex-col gap-1">
          <label
            htmlFor="product-name"
            className="text-base font-semibold text-green-800"
          >
            Product Name
          </label>
          <input
            id="product-name"
            type="text"
            placeholder="Enter product name"
            className="outline-none py-2.5 px-3 rounded-lg border border-green-300 focus:ring-2 focus:ring-green-400 bg-green-50 hover:bg-green-100 transition-all duration-200"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        {/* Description */}
        <div className="flex flex-col gap-1">
          <label
            htmlFor="product-description"
            className="text-base font-semibold text-green-800"
          >
            Product Description
          </label>
          <textarea
            id="product-description"
            rows={4}
            placeholder="Write about your product..."
            className="outline-none py-2.5 px-3 rounded-lg border border-green-300 focus:ring-2 focus:ring-green-400 bg-green-50 hover:bg-green-100 resize-none transition-all duration-200"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>

        {/* Category and Prices */}
        <div className="flex flex-wrap gap-5">
          <div className="flex flex-col gap-1 w-40">
            <label
              htmlFor="category"
              className="text-base font-semibold text-green-800"
            >
              Category
            </label>
            <select
              id="category"
              className="outline-none py-2.5 px-3 rounded-lg border border-green-300 focus:ring-2 focus:ring-green-400 bg-green-50 hover:bg-green-100 transition-all duration-200"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Earphone">Earphone</option>
              <option value="Headphone">Headphone</option>
              <option value="Watch">Watch</option>
              <option value="Smartphone">Smartphone</option>
              <option value="Laptop">Laptop</option>
              <option value="Camera">Camera</option>
              <option value="Accessories">Accessories</option>
            </select>
          </div>

          <div className="flex flex-col gap-1 w-36">
            <label
              htmlFor="product-price"
              className="text-base font-semibold text-green-800"
            >
              Price
            </label>
            <input
              id="product-price"
              type="number"
              placeholder="₹0"
              className="outline-none py-2.5 px-3 rounded-lg border border-green-300 focus:ring-2 focus:ring-green-400 bg-green-50 hover:bg-green-100 transition-all duration-200"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col gap-1 w-36">
            <label
              htmlFor="offer-price"
              className="text-base font-semibold text-green-800"
            >
              Offer Price
            </label>
            <input
              id="offer-price"
              type="number"
              placeholder="₹0"
              className="outline-none py-2.5 px-3 rounded-lg border border-green-300 focus:ring-2 focus:ring-green-400 bg-green-50 hover:bg-green-100 transition-all duration-200"
              value={offerPrice}
              onChange={(e) => setOfferPrice(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-400 focus:ring-4 focus:ring-green-300 transition-all duration-300"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
