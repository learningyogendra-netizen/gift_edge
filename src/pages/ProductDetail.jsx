import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../data/mockData'
import './style/productDetail.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faStar, faGift, faBuilding, faUsers, faTruck, faBox, faUser, faMicrochip, faHeart, faGem, faAward, faBolt, faSmile, faMusic, faLeaf, faSun, faCalendar, faDroplet, faGlobe, faCoffee, faCheck, faUserPlus, faPlane, faWifi, faCloudRain, faRecycle, faCheckCircle
} from '@fortawesome/free-solid-svg-icons'

const iconMapping = {
    "star": faStar,
    "gift": faGift,
    "building": faBuilding,
    "users": faUsers,
    "truck": faTruck,
    "box": faBox,
    "user": faUser,
    "cpu": faMicrochip,
    "heart": faHeart,
    "diamond": faGem,
    "award": faAward,
    "zap": faBolt,
    "smile": faSmile,
    "music": faMusic,
    "leaf": faLeaf,
    "sun": faSun,
    "calendar": faCalendar,
    "droplet": faDroplet,
    "globe": faGlobe,
    "coffee": faCoffee,
    "check": faCheck,
    "user-plus": faUserPlus,
    "plane": faPlane,
    "wifi": faWifi,
    "activity": faHeart,
    "cloud-rain": faCloudRain,
    "recycle": faRecycle,
    "flower": faLeaf,
    "check-circle": faCheckCircle
}

function ProductDetail() {
    const { id } = useParams()
    const [product, setProduct] = useState(null)
    const [selectedImage, setSelectedImage] = useState('')

    useEffect(() => {
        const foundProduct = products.find(p => p.id === id)
        if (foundProduct) {
            setProduct(foundProduct)
            setSelectedImage(foundProduct.images[0])
        }
    }, [id])

    if (!product) {
        return <div className="product-detail-page"><h2>Product not found</h2></div>
    }

    return (<>
        <div className="product-banner">
            <span><img src="/assets/home/category_dots.png" alt="" className='product-section-left-image' /></span>
            <h1>Exquisite Premium Festive Hamper</h1>
        </div>
        <div className="product-page-wrapper">
            <div className="product-detail-page">
                <div className="product-detail-container">
                    <div className="product-image-section">
                        <div className="main-image-container">
                            <img src={selectedImage} alt={product.name} className="main-image" />
                            <div className="corner-decoration top-left"></div>
                        </div>
                        {product.images.length > 1 && (
                            <div className="thumbnail-container">
                                {product.images.map((img, index) => (
                                    <img
                                        key={index}
                                        src={img}
                                        alt={`${product.name} view ${index + 1}`}
                                        className={`thumbnail ${selectedImage === img ? 'active' : ''}`}
                                        onClick={() => setSelectedImage(img)}
                                    />
                                ))}
                            <span><img src="/assets/product/heart.png" alt="" className='product-heart' /></span>
                            </div>
                        )}
                    </div>
                    <div className="product-info-section">
                        <div className="section-decoration-line"></div>
                        <h1 className="product-title">{product.name}</h1>
                        <p className="product-description">
                            {product.description}
                        </p>

                        <div className="customization-box">
                            <h3 className="customization-title">Customization Options</h3>
                            <ul className="customization-list">
                                {product.customizationOptions.map((option, index) => (
                                    <li key={index}>{option}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="product-details-box">
                            <h3 className="section-title">Product Details</h3>
                            <ul className="details-list">
                                {product.productDetails && product.productDetails.map((detail, index) => (
                                    <li key={index}>{detail}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="price-quote-section">
                            <div className="price-separator">
                                <span className="separator-square"></span>
                            </div>
                            <p className="starting-from">Starting from</p>
                            <div className="price-display">
                                <span className="price-amount">{product.priceRange.currency}{product.priceRange.min} - {product.priceRange.currency}{product.priceRange.max}</span>
                                <span className="price-note">{product.priceRange.note}</span>
                            </div>

                            <button className="btn-primary">
                                Request a Quote <span className="arrow-icon">↗</span>
                            </button>

                            <p className="quote-note">
                                Get a personalized quote based on quantity, custom branding, and packaging preferences.
                            </p>
                        </div>
                    </div>
                    <div className="circle-decoration"></div>
                    <div className="triangle-decoration"></div>
                    <span><img src="/assets/home/category_blob.png" alt="" className='product-section-image' /></span>
                </div>
            </div>

            {/* Why Choose This Gift Section */}
            {product.features && (
                <div className="features-section">
                    <h2 className="features-title">Why Choose This Gift?</h2>
                    <p className="features-subtitle">A corporate-friendly message highlighting quality & presentation for meaningful business relationships.</p>
                    <div className="features-grid">
                        {product.features.map((feature, index) => (
                            <div key={index} className="feature-item">
                                <div className="feature-icon-circle">
                                    <FontAwesomeIcon icon={iconMapping[feature.icon] || faBox} className="feature-icon" />
                                </div>
                                <p className="feature-label">{feature.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Related Products Section */}
            <div className="related-products-section">
                <h2 className="related-title">You May Also Like</h2>
                <div className="related-grid">
                    {products.filter(p => p.categoryId === product.categoryId && p.id !== product.id).slice(0, 4).map((related) => (
                        <div key={related.id} className="related-card" onClick={() => window.location.href = `/product/${related.id}`}>
                            <div className="related-image-container">
                                <img src={related.images[0]} alt={related.name} className="related-image" />
                            </div>
                            <div className="related-info">
                                <h3 className="related-name">{related.name}</h3>
                                <p className="related-price">Starting from {related.priceRange.currency}{related.priceRange.min}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </>
    )
}

export default ProductDetail