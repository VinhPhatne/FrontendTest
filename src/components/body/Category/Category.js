"use client";


import { useRef,useState } from "react";
import saleIcon from '../../../assets/images/saleIcon.svg';
import right from '../../../assets/images/right.svg';
import left from '../../../assets/images/left.svg';
import category1 from '../../../assets/images/category1.svg';
import category2 from '../../../assets/images/category2.svg';
import category3 from '../../../assets/images/category3.svg';
import category4 from '../../../assets/images/category4.svg';
import category5 from '../../../assets/images/category5.svg';
import category6 from '../../../assets/images/category6.svg';
import category7 from '../../../assets/images/category7.svg';
import category8 from '../../../assets/images/category8.svg';
import category9 from '../../../assets/images/category9.svg';
import category10 from '../../../assets/images/category10.svg';
import category11 from '../../../assets/images/category11.svg';
import category12 from '../../../assets/images/category12.svg';
import category13 from '../../../assets/images/category13.svg';
import product4 from '../../../assets/images/product4.svg';
import product1 from '../../../assets/images/product1.svg';


import styles from "./Category.module.scss";

// Dummy data for categories and products
const categoriesData = [
    {
        id: "loc-dau",
        name: "Bộ Lọc Dầu",
        icon: category1,
        subCategories: [
            { id: "loc-gio-1", name: "Bộ lọc gió", image: category1 },
            { id: "loc-gio-2", name: "Bộ lọc gió", image: category1 },
            { id: "loc-gio-3", name: "Bộ lọc gió", image: category1 },
            { id: "loc-gio-4", name: "Bộ lọc gió", image: category1 },
            { id: "loc-gio-5", name: "Bộ lọc gió", image: category1 },
            { id: "loc-gio-6", name: "Bộ lọc gió", image: category1 },
        ],
    },
    {
        id: "loc-khong-khi",
        name: "Bộ Lọc Không Khí",
        icon: category2,
        subCategories: [
            { id: "loc-gio-7", name: "Bộ lọc gió", image: category2 },
            { id: "loc-gio-8", name: "Bộ lọc gió", image: category2 },
        ],
    },
    {
        id: "loc-nhien-lieu",
        name: "Bộ Lọc Nhiên Liệu",
        icon: category3,
        subCategories: [
            { id: "loc-gio-9", name: "Bộ lọc gió", image: category3 },
        ],
    },
    {
        id: "loc-trong-cabin",
        name: "Bộ Lọc Trong Cabin",
        icon: category4,
        subCategories: [
            { id: "loc-gio-10", name: "Bộ lọc gió", image: category4 },
        ],
    },
    {
        id: "loc-khong-khi-2",
        name: "Bộ Lọc Không Khí",
        icon: category5,
        subCategories: [
            { id: "loc-gio-11", name: "Bộ lọc gió", image: category5 },
        ],
    },
    {
        id: "loc-trong-cabin-2",
        name: "Bộ Lọc Trong Cabin",
        icon: category6,
        subCategories: [
            { id: "loc-gio-12", name: "Bộ lọc gió", image: category6 },
        ],
    },
    {
        id: "loc-nhien-lieu-2",
        name: "Bộ Lọc Nhiên Liệu",
        icon: category7,
        subCategories: [
            { id: "loc-gio-13", name: "Bộ lọc gió", image: category7 },
        ],
    },
    {
        id: "loc-khong-khi-3",
        name: "Bộ Lọc Không Khí",
        icon: category8,
        subCategories: [
            { id: "loc-gio-14", name: "Bộ lọc gió", image: category8 },
        ],
    },
];

const bestSellingProducts = [
    {
        id: 1,
        image: category11,
        badge: "Giá cực sốc",
        name: "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
        currentPrice: "299,000 ₫",
        oldPrice: "329,000 ₫",
        discount: "-10%",
    },
    {
        id: 2,
        image: category12,
        badge: "Giá cực sốc",
        name: "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
        currentPrice: "299,000 ₫",
        oldPrice: "329,000 ₫",
        discount: "-10%",
    },
    {
        id: 3,
        image: product4,
        badge: "Giá cực sốc",
        name: "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
        currentPrice: "299,000 ₫",
        oldPrice: "329,000 ₫",
        discount: "-10%",
    },
    {
        id: 4,
        image: category13,
        badge: "Giá cực sốc",
        name: "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
        currentPrice: "299,000 ₫",
        oldPrice: "329,000 ₫",
        discount: "-10%",
    },
    {
        id: 5,
        image: product1,
        badge: "Giá cực sốc",
        name: "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
        currentPrice: "299,000 ₫",
        oldPrice: "329,000 ₫",
        discount: "-10%",
    },
];

const CategoryDropdown = () => {
    console.log('100');
    const [ activeCategory, setActiveCategory ] = useState(categoriesData[0]);
    const scrollContainerRef = useRef(null);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = 240; // Card width + gap
            if (direction === "left") {
                scrollContainerRef.current.scrollLeft -= scrollAmount;
            } else {
                scrollContainerRef.current.scrollLeft += scrollAmount;
            }
        }
    };

    return (
        <div className={styles.dropdownContainer}>
            {/* Left Sidebar */}
            <div className={styles.sidebar}>
                {categoriesData.map((category) => (
                    <div
                        key={category.id}
                        className={`${styles.sidebarItem} ${activeCategory.id === category.id ? styles.active : ""}`}
                        onClick={() => setActiveCategory(category)}
                    >
                        <img
                            src={category.icon || "/placeholder.svg"}
                            alt={category.name}
                            width={24}
                            height={24}
                            className={styles.itemIcon}
                        />
                        <span className={styles.itemName}>{category.name}</span>
                        <img alt="" src={right} className={styles.arrowIcon} />
                    </div>
                ))}
            </div>

            {/* Right Content */}
            <div className={styles.content}>
                {/* Sub-categories Grid */}
                <div className={styles.subCategoryGrid}>
                    {activeCategory.subCategories.map((subCat) => (
                        <div key={subCat.id} className={styles.subCategoryCard}>
                            <img
                                src={subCat.image || "/placeholder.svg"}
                                alt={subCat.name}
                                width={80}
                                height={80}
                                className={styles.subCatImage}
                            />
                            <span className={styles.subCatName}>{subCat.name}</span>
                        </div>
                    ))}
                </div>

                {/* Best-selling Products */}
                <div className={styles.bestSellingSection}>
                    <div className={styles.bestSellingHeader}>
                        <h3 className={styles.bestSellingTitle}>Sản phẩm bán chạy</h3>
                        <a href="#" className={styles.viewAllLink}>
              Xem tất cả <img alt="" src={right} className={styles.viewAllIcon} />
                        </a>
                    </div>
                    <div className={styles.productCarouselContainer}>
                        <div className={styles.productCarousel} ref={scrollContainerRef}>
                            {bestSellingProducts.map((product) => (
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
                                        <img alt="" src={saleIcon} className={styles.productBadgeIcon} />
                                        {product.badge}
                                    </div>
                                    <h4 className={styles.productName}>{product.name}</h4>
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryDropdown;
