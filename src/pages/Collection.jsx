import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/mockData';
import './style/collection.css';

export default function Collection() {
  const [showMobFilter, setShowMobFilter] = useState(false);

  const [activeFilter, setActiveFilter] = useState({
    categories: [],
    budget: [],
    occasion: []
  });

  const [tempFilter, setTempFilter] = useState({
    categories: [],
    budget: [],
    occasion: []
  });

  const [sortType, setSortType] = useState('relevant');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 6;

  const categoryMap = {
    "Rewards & Recognition": 1,
    "Creative Gifting": 2,
    "Seasonal Gifting": 3,
    "Luxury Hampers": 4,
    "Branded Merchandise": 5,
    "Eco-friendly Gifts": 6,
  };

  const toggleFilter = (e) => {
    const { name, value, checked } = e.target;
    setTempFilter(prev => {
      if (checked) {
        return { ...prev, [name]: [...prev[name], value] };
      } else {
        return { ...prev, [name]: prev[name].filter(item => item !== value) };
      }
    });
  };

  const handleApplyFilters = () => {
    setActiveFilter(tempFilter);
    setCurrentPage(1);
    setShowMobFilter(false);
  };

  const handleResetFilters = () => {
    const resetState = { categories: [], budget: [], occasion: [] };
    setTempFilter(resetState);
    setActiveFilter(resetState);
    setCurrentPage(1);
  };

  const isBudgetMatch = (price, budgetFilters) => {
    if (budgetFilters.length === 0) return true;
    return budgetFilters.some(range => {
      if (range === "Under ₹500") return price < 500;
      if (range === "₹500 - ₹1000") return price >= 500 && price <= 1000;
      if (range === "₹1000 - ₹2500") return price > 1000 && price <= 2500;
      if (range === "₹2500 - ₹5000") return price > 2500 && price <= 5000;
      if (range === "Premium (₹5000+)") return price > 5000;
      return false;
    });
  };

  const applyFilters = () => {
    let temp = [...products];

    if (activeFilter.categories.length > 0) {
      const selectedIds = activeFilter.categories.map(cat => categoryMap[cat]).filter(id => id !== undefined);
      if (selectedIds.length > 0) {
        temp = temp.filter(prod => selectedIds.includes(prod.categoryId));
      }
    }

    if (activeFilter.budget.length > 0) {
      temp = temp.filter(prod => {
        return isBudgetMatch(prod.priceRange.min, activeFilter.budget);
      });
    }

    if (activeFilter.occasion.length > 0) {
      temp = temp.filter(prod =>
        activeFilter.occasion.some(occ =>
          prod.name.includes(occ) ||
          prod.subtitle.includes(occ) ||
          prod.description.includes(occ) ||
          (prod.features && prod.features.some(f => f.label.includes(occ)))
        )
      );
    }

    if (sortType === 'low-high') {
      temp.sort((a, b) => a.priceRange.min - b.priceRange.min);
    } else if (sortType === 'high-low') {
      temp.sort((a, b) => b.priceRange.min - a.priceRange.min);
    }

    setFilteredProducts(temp);
  };

  useEffect(() => {
    applyFilters();
  }, [activeFilter, sortType]);

  useEffect(() => {
    setFilteredProducts(products);
  }, []);

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentProducts = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const categories = [
    "Rewards & Recognition", "Creative Gifting", "Seasonal Gifting",
    "Luxury Hampers", "Branded Merchandise", "Eco-friendly Gifts",
    "Bespoke Packaging", "Festive Collections"
  ];

  const budgets = [
    "Under ₹500", "₹500 - ₹1000", "₹1000 - ₹2500",
    "₹2500 - ₹5000", "Premium (₹5000+)"
  ];

  const occasions = [
    "Onboarding", "Festivals", "Leadership Gifts",
    "Team Celebration", "Appreciation & Milestones"
  ];

  return (
    <>
      <div className="collection-banner">

         <span><img src="/assets/collection/Frame-9.png" alt="" className='collection-banner-section-left-image' /></span>
        <span><img src="public/assets/collection/top-design.png" alt="" className='top-design' /></span>
        <h1>Product Categories Collections</h1>

        <p>Explore premium gifting categories thoughtfully created for every corporate need.</p>
        <br />
        <span>A collection designed to inspire thoughtful corporate gifting — from festive hampers <br /> to bespoke curated sets tailored for rewards, recognition, and celebrations.</span>
      </div>

      <div className="collection-container">
        <span><img src="/assets/collection/Frame 5.png" alt="" className='collection-section-bottom-right-image' /></span>
     {/* <span><img src="public/assets/collection/top-design.png" alt="" className='bottom-design' /></span> */}
        <span><img src="/assets/home/category_dots.png" alt="" className='collection-section-left-image' /></span>
        <div className={`filter-sidebar ${showMobFilter ? 'show' : ''}`}>
          <div className="filter-header">
            <h2>Filter Collections</h2>
            <button className="close-filter" onClick={() => setShowMobFilter(false)}>×</button>
          </div>

          <div className="filter-group filter-group-category">
            <h3>Categories</h3>
            {categories.map((cat, index) => (
              <label key={index} className="checkbox-container">
                <input
                  type="checkbox"
                  name="categories"
                  value={cat}
                  checked={tempFilter.categories.includes(cat)}
                  onChange={toggleFilter}
                />
                {cat}
              </label>
            ))}
          </div>

          <div className="filter-group filter-group-budget">
            <h3>Budget</h3>
            {budgets.map((bud, index) => (
              <label key={index} className="checkbox-container">
                <input
                  type="checkbox"
                  name="budget"
                  value={bud}
                  checked={tempFilter.budget.includes(bud)}
                  onChange={toggleFilter}
                />
                {bud}
              </label>
            ))}
          </div>

          <div className="filter-group filter-group-occasion">
            <h3>Occasion</h3>
            {occasions.map((occ, index) => (
              <label key={index} className="checkbox-container">
                <input
                  type="checkbox"
                  name="occasion"
                  value={occ}
                  checked={tempFilter.occasion.includes(occ)}
                  onChange={toggleFilter}
                />
                {occ}
              </label>
            ))}
          </div>

          <div className="filter-actions">
            <button className="btn-primary" onClick={handleApplyFilters}>Apply Filters</button>
            <button className="btn-secondary" onClick={handleResetFilters}>Reset</button>
          </div>
        </div>

        <div className="collection-content">
          {/* Mobile Filter Toggle Button */}
          <div className="mobile-filter-bar">
            <button
              className="filter-toggle-custom"
              onClick={() => setShowMobFilter(true)}
            >
              <span>Filter Collections</span>
              <div className="diamond-arrow">
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L5 5L9 1" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </button>
          </div>

          <div className="collection-grid">
            {currentProducts.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`} className="collection-card">
                <div className="card-image">
                  <img src={product.images[0]} alt={product.name} />
                </div>
                <div className="card-details">
                  <h3>{product.name}</h3>
                  <p className="subtitle">{product.subtitle}</p>
  
                  <span className="view-link">View Details →</span>
                </div>
              </Link>
            ))}
            {filteredProducts.length === 0 && (
              <p className="no-results">No products found matching your filters.</p>
            )}
          </div>

          {filteredProducts.length > ITEMS_PER_PAGE && (
            <div className="pagination">
              <button
                className="page-btn prev"
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
              >
                &lt;
              </button>
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => paginate(i + 1)}
                  className={`page-btn ${currentPage === i + 1 ? 'active' : ''}`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                className="page-btn next"
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                &gt;
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
