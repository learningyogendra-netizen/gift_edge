import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/mockData';
import './style/productDetail.css';

// SVG Icons for Features
const Icons = {
    star: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>,
    gift: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path></svg>,
    building: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>,
    users: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>,
    truck: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
};

export default function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [activeImage, setActiveImage] = useState('');
    const [relatedProducts, setRelatedProducts] = useState([]);

    useEffect(() => {
        // Find product by ID
        const foundProduct = products.find(p => p.id === id) || products[0]; // Fallback to first if not found/for demo
        if (foundProduct) {
            setProduct(foundProduct);
            setActiveImage(foundProduct.images[0]);

            // Suggest related products from same category or random
            const related = products
                .filter(p => p.id !== foundProduct.id && p.categoryId === foundProduct.categoryId)
                .slice(0, 4);
            setRelatedProducts(related);
        }
    }, [id]);

    if (!product) return <div className="loading">Loading...</div>;

    const features = [
        { label: "Premium handpicked items", icon: "star" },
        { label: "Luxury packaging", icon: "gift" },
        { label: "Perfect for corporate festivals", icon: "building" },
        { label: "Bulk order support", icon: "users" },
        { label: "Quick dispatch", icon: "truck" }
    ];

    return (
        <div className="product-detail-container">
            {/* Breadcrumbs */}
            <div className="breadcrumbs">
                <Link to="/">Home</Link> <span>/</span>
                <Link to="/collection">Collections</Link> <span>/</span>
                <span>{product.name}</span>
            </div>

            <div className="product-main-content">
                {/* Left: Images */}
                <div className="product-images">
                    <div className="main-image-container">
                        <img src={activeImage} alt={product.name} />
                    </div>
                    {product.images.length > 1 && (
                        <div className="thumbnail-list">
                            {product.images.map((img, index) => (
                                <div
                                    key={index}
                                    className={`thumbnail ${activeImage === img ? 'active' : ''}`}
                                    onClick={() => setActiveImage(img)}
                                >
                                    <img src={img} alt={`Thumbnail ${index + 1}`} />
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Right: Info */}
                <div className="product-info">
                    <h1 className="product-title">{product.name}</h1>
                    <p className="product-subtitle">{product.description}</p>

                    <div className="info-section">
                        <h3>Customization Options</h3>
                        <ul>
                            {product.customizationOptions?.map((opt, idx) => (
                                <li key={idx}>{opt}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="info-section">
                        <h3>Product Details</h3>
                        <ul>
                            {product.productDetails?.map((detail, idx) => (
                                <li key={idx}>{detail}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="price-action-section">
                        <span className="price-label">starting from</span>
                        <span className="price-value">
                            {product.priceRange.currency}{product.priceRange.min} - {product.priceRange.currency}{product.priceRange.max}
                            <span className="price-note">{product.priceRange.note}</span>
                        </span>

                        <button className="btn-quote">Request a Quote ⬈</button>
                        <p className="additional-info">
                            Get a personalized quote based on quantity, custom branding, and packaging preferences.
                        </p>
                    </div>
                </div>
            </div>

            {/* Why Choose This Gift */}
            <div className="why-choose-section">
                <h2>Why Choose This Gift?</h2>
                <p>A corporate-friendly message highlighting quality & presentation for meaningful business relationships.</p>

                <div className="features-grid">
                    {features.map((feat, idx) => (
                        <div key={idx} className="feature-item">
                            <div className="feature-icon">
                                {Icons[feat.icon] || Icons.star}
                            </div>
                            <p>{feat.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* You May Also Like */}
            {relatedProducts.length > 0 && (
                <div className="related-products-section">
                    <h2>You May Also Like</h2>
                    <div className="related-grid">
                        {relatedProducts.map(rel => (
                            <Link to={`/product/${rel.id}`} key={rel.id} className="related-card-link" style={{ textDecoration: 'none' }}>
                                <div className="related-card">
                                    <img src={rel.images[0]} alt={rel.name} />
                                    <div className="related-card-details">
                                        <h4>{rel.name}</h4>
                                        <p>Starting from {rel.priceRange.currency}{rel.priceRange.min}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
