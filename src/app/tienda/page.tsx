"use client";
import React, { useState } from "react";
import HeroShop from "../components/HeroShop";
import ProductList from "../components/ProductList";
import { productsData as initialProducts } from "../assets/products";
import { Product } from "../assets/types";

const Tienda: React.FC = () => {
  const [productsData, setProductsData] = useState<Product[]>(initialProducts);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedBrand, setSelectedBrand] = useState<string>("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
    filterProducts(newSearchTerm, selectedBrand);
  };

  const handleBrandFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSelectedBrand = e.target.value;
    setSelectedBrand(newSelectedBrand);
    filterProducts(searchTerm, newSelectedBrand);
  };

  const filterProducts = (searchTerm: string, selectedBrand: string) => {
    let filteredProducts = initialProducts;

    if (searchTerm) {
      filteredProducts = filteredProducts.filter(item =>
        item.model.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedBrand && selectedBrand !== "Filtrar por marca") {
      filteredProducts = filteredProducts.filter(item =>
        item.brand.toLowerCase() === selectedBrand.toLowerCase()
      );
    }

    setProductsData(filteredProducts);
  };

  return (
    <section className="mt-0">
      <HeroShop />
      <div className="filters-container">
        <div className="filter__widget p-4">
          <select className="p-2 rounded-md" onChange={handleBrandFilter}>
            <option>Filtrar por marca</option>
            <option value="Apple">Apple</option>
            <option value="Samsung">Samsung</option>
            <option value="Motorola">Motorola</option>
            <option value="Xiaomi">Xiaomi</option>
            <option value="Google">Google</option>
            <option value="Oneplus">Oneplus</option>
            <option value="tcl">TCL</option>
            <option value="nothing">Nothing Phone</option>
          </select>
        </div>
        <div className="search__box">
          <input
            type="text"
            placeholder="Buscar..."
            onChange={handleSearch}
            className="p-2 border rounded-lg"
          />
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto">
        <ProductList products={productsData} />
      </div>
    </section>
  );
};

export default Tienda;
