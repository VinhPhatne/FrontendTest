"use client";


import { useRef } from "react";

import banner from '../../../assets/images/banner.svg';
import left from '../../../assets/images/left.svg';
import product1 from '../../../assets/images/product1.svg';
import product2 from '../../../assets/images/product2.svg';
import product3 from '../../../assets/images/product3.svg';
import product4 from '../../../assets/images/product4.svg';
import product5 from '../../../assets/images/product5.svg';
import product6 from '../../../assets/images/product6.svg';
import right from '../../../assets/images/right.svg';
import saleIcon from '../../../assets/images/saleIcon.svg';
import styles from "./Banner.module.scss";
// Dummy product data
const products = [
    {
        id: 1,
        image: product3,
        badge: "Giá cực sốc",
        name: "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
        currentPrice: "299,000 ₫",
        oldPrice: "329,000 ₫",
        discount: "-10%",
    },
    {
        id: 2,
        image: product1,
        badge: "Giá cực sốc",
        name: "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
        currentPrice: "299,000 ₫",
        oldPrice: "329,000 ₫",
        discount: "-10%",
    },
    {
        id: 3,
        image: product5,
        badge: "Giá cực sốc",
        name: "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
        currentPrice: "299,000 ₫",
        oldPrice: "329,000 ₫",
        discount: "-10%",
    },
    {
        id: 4,
        image: product6,
        badge: "Giá cực sốc",
        name: "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
        currentPrice: "299,000 ₫",
        oldPrice: "329,000 ₫",
        discount: "-10%",
    },
    {
        id: 5,
        image: product4,
        badge: "Giá cực sốc",
        name: "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
        currentPrice: "299,000 ₫",
        oldPrice: "329,000 ₫",
        discount: "-10%",
    },
    {
        id: 6,
        image: product1,
        badge: "Giá cực sốc",
        name: "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
        currentPrice: "299,000 ₫",
        oldPrice: "329,000 ₫",
        discount: "-10%",
    },
];

export default function Banner() {
    const scrollContainerRef = useRef(null);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = 240; // Adjust scroll distance (card width + gap)
            if (direction === "left") {
                scrollContainerRef.current.scrollLeft -= scrollAmount;
            } else {
                scrollContainerRef.current.scrollLeft += scrollAmount;
            }
        }
    };

    return (
        <section className={styles.bannerSection}>
            <div className={styles.heroBanner}>
                <img src={banner} alt="Tải App Nhận Quà" fill className={styles.heroBannerImage} priority />
            </div>

            <div className={styles.productCarouselContainer}>
                <button className={styles.scrollButtonLeft} onClick={() => scroll("left")}>
                    <img
                        alt=""
                        src={left}
                        className={styles.scrollIcon}
                    />
                </button>
                <div className={styles.productCarousel} ref={scrollContainerRef}>
                    {products.map((product) => (
                        <div key={product.id} className={styles.productCard}>
                            <div className={styles.productImageWrapper}>
                                <img
                                    src={product.image || "/placeholder.svg"}
                                    alt={product.name}
                                    width={100}
                                    height={100}
                                    className={styles.productImage}
                                />
                            </div>
                            <div className={styles.productBadge}>
                                <img
                                    src={saleIcon}
                                    alt={product.name}
                                    className={styles.productImage}
                                />
                                {product.badge}
                            </div>
                             <h4 className={styles.title}>{product.name}</h4>
                            <p className={styles.productCurrentPrice}>{product.currentPrice}</p>
                            <div className={styles.priceRow}>
                                <div className={styles.subRow}>
                                    <span className={styles.productOldPrice}>{product.oldPrice}</span>
                                    <span className={styles.productDiscount}>{product.discount}</span>
                                </div>
                            </div>
                            <button className={styles.buyNowButton}>Mua ngay</button>
                        </div>
                    ))}
                </div>
                <button className={styles.scrollButtonRight} onClick={() => scroll("right")}>
                    <img
                        alt=""
                        src={right}
                        className={styles.scrollIcon}
                    />
                </button>
            </div>
        </section>
    );
}
