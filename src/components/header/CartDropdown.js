"use client";



import product1 from '../../assets/images/product1.svg';
import saleIcon from '../../assets/images/saleIcon.svg';
import styles from "./CartDropdown.module.scss";

// Dummy product data for the cart dropdown
const cartProduct = {
    id: 1,
    image: product1,
    badge: "Giá cực sốc",
    name: "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
    currentPrice: "299,000 ₫",
    oldPrice: "329,000 ₫",
    discount: "-10%",
};

const CartDropdown = () => {
    return (
        <div className={styles.cartDropdown}>
            <div className={styles.productCard}>
                <div className={styles.productImageWrapper}>
                    <img
                        src={cartProduct.image || "/placeholder.svg"}
                        alt={cartProduct.name}
                        width={150} // Fixed width for image
                        height={150} // Fixed height for image
                        className={styles.productImage}
                    />
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.productBadge}>
                        <img alt="" src={saleIcon} className={styles.productBadgeIcon} />
                        {cartProduct.badge}
                    </div>
                    <h4 className={styles.productName}>{cartProduct.name}</h4>
                    <p className={styles.productCurrentPrice}>{cartProduct.currentPrice}</p>
                    <div className={styles.priceRow}>
                        <span className={styles.productOldPrice}>{cartProduct.oldPrice}</span>
                        <span className={styles.productDiscount}>{cartProduct.discount}</span>
                    </div>
                    <button className={styles.buyNowButton}>Mua ngay</button>
                </div>
            </div>
        </div>
    );
};

export default CartDropdown;
