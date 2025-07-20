"use client";


import { useMemo,useState } from "react";

import chevronDown from '../../../assets/images/chevronDown.svg';
import chevronUp from '../../../assets/images/chevronUp.svg';
import filter from '../../../assets/images/filter.svg';
import product1 from '../../../assets/images/product1.svg';
import product2 from '../../../assets/images/product2.svg';
import product3 from '../../../assets/images/product3.svg';
import product4 from '../../../assets/images/product4.svg';
import saleIcon from '../../../assets/images/saleIcon.svg';
import styles from "./ProductList.module.scss";

// Dummy product data with more attributes for filtering
const allProducts = [
    {
        id: 1,
        name: "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
        price: 299000,
        oldPrice: 329000,
        discount: 10,
        image:product1,
        category: "Lọc gió động cơ - Air Filter",
        brand: "Aasakashi",
        year: 2021,
        origin: "Đức",
    },
    {
        id: 2,
        name: "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
        price: 150000,
        oldPrice: 180000,
        discount: 15,
        image: product2,
        category: "Lọc Nhiên Liệu - Fuel Filter",
        brand: "Bosch",
        year: 2020,
        origin: "Nhật Bản",
    },
    {
        id: 3,
        name: "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
        price: 450000,
        oldPrice: 500000,
        discount: 10,
        image: product3,
        category: "Bộ lọc dầu",
        brand: "Hyundai",
        year: 2021,
        origin: "Trung Quốc",
    },
    {
        id: 4,
        name: "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
        price: 80000,
        oldPrice: 90000,
        discount: 10,
        image: product4,
        category: "Lọc gió động cơ - Air Filter",
        brand: "Aasakashi",
        year: 2019,
        origin: "Đức",
    },
    {
        id: 5,
        name: "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
        price: 250000,
        oldPrice: 280000,
        discount: 10,
        image: product1,
        category: "Lọc Nhiên Liệu - Fuel Filter",
        brand: "Bosch",
        year: 2022,
        origin: "Nhật Bản",
    },
    {
        id: 6,
        name: "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
        price: 550000,
        oldPrice: 600000,
        discount: 8,
        image: product2,
        category: "Bộ lọc dầu",
        brand: "Hyundai",
        year: 2020,
        origin: "Đức",
    },
    {
        id: 7,
        name: "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
        price: 350000,
        oldPrice: 380000,
        discount: 8,
        image: product3,
        category: "Lọc gió động cơ - Air Filter",
        brand: "Aasakashi",
        year: 2021,
        origin: "Trung Quốc",
    },
    {
        id: 8,
        name: "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
        price: 120000,
        oldPrice: 140000,
        discount: 14,
        image: product4,
        category: "Lọc Nhiên Liệu - Fuel Filter",
        brand: "Bosch",
        year: 2018,
        origin: "Nhật Bản",
    },
    {
        id: 9,
        name: "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
        price: 250000,
        oldPrice: 280000,
        discount: 10,
        image: product1,
        category: "Lọc Nhiên Liệu - Fuel Filter",
        brand: "Bosch",
        year: 2022,
        origin: "Nhật Bản",
    },
    {
        id: 10,
        name: "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
        price: 550000,
        oldPrice: 600000,
        discount: 8,
        image: product2,
        category: "Bộ lọc dầu",
        brand: "Hyundai",
        year: 2020,
        origin: "Đức",
    },
    {
        id: 11,
        name: "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
        price: 350000,
        oldPrice: 380000,
        discount: 8,
        image: product3,
        category: "Lọc gió động cơ - Air Filter",
        brand: "Aasakashi",
        year: 2021,
        origin: "Trung Quốc",
    },
    {
        id: 12,
        name: "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
        price: 120000,
        oldPrice: 140000,
        discount: 14,
        image: product4,
        category: "Lọc Nhiên Liệu - Fuel Filter",
        brand: "Bosch",
        year: 2018,
        origin: "Nhật Bản",
    },
    {
        id: 13,
        name: "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
        price: 250000,
        oldPrice: 280000,
        discount: 10,
        image: product1,
        category: "Lọc Nhiên Liệu - Fuel Filter",
        brand: "Bosch",
        year: 2022,
        origin: "Nhật Bản",
    },
    {
        id: 14,
        name: "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
        price: 550000,
        oldPrice: 600000,
        discount: 8,
        image: product2,
        category: "Bộ lọc dầu",
        brand: "Hyundai",
        year: 2020,
        origin: "Đức",
    },
    {
        id: 15,
        name: "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
        price: 350000,
        oldPrice: 380000,
        discount: 8,
        image: product3,
        category: "Lọc gió động cơ - Air Filter",
        brand: "Aasakashi",
        year: 2021,
        origin: "Trung Quốc",
    },
    {
        id: 16,
        name: "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
        price: 120000,
        oldPrice: 140000,
        discount: 14,
        image: product4,
        category: "Lọc Nhiên Liệu - Fuel Filter",
        brand: "Bosch",
        year: 2018,
        origin: "Nhật Bản",
    },
];

const categories = [
    "Lọc gió động cơ - Air Filter",
    "Lọc Nhiên Liệu - Fuel Filter",
    "Bộ lọc dầu",
    "Chưa phân loại",
    "Khác",
];
const priceRanges = [
    { label: "Dưới 100.000 đ", min: 0, max: 99999 },
    { label: "100.000 – 300.000 đ", min: 100000, max: 300000 },
    { label: "300.000 – 500.000 đ", min: 300000, max: 500000 },
    { label: "Trên 500.000 đ", min: 500001, max: Number.POSITIVE_INFINITY },
];
const brands = [ "Aasakashi", "Bosch", "Hyundai" ];
const years = [ 2021, 2020, 2019, 2018 ];
const origins = [ "Đức", "Nhật Bản", "Trung Quốc" ];
const sortOptions = [ "Liên quan", "Bán chạy", "Mới nhất", "Nổi bật", "Giá: Thấp → Cao", "Giá: Cao → Thấp" ];

const ProductList = () => {
    const [ selectedCategories, setSelectedCategories ] = useState([]);
    const [ selectedPriceRange, setSelectedPriceRange ] = useState(null);
    const [ selectedBrands, setSelectedBrands ] = useState([]);
    const [ selectedYears, setSelectedYears ] = useState([]);
    const [ selectedOrigins, setSelectedOrigins ] = useState([]);
    const [ activeSortBy, setActiveSortBy ] = useState("Liên quan");

    // State for filter group collapse/expand
    const [ isCategoryExpanded, setIsCategoryExpanded ] = useState(true);
    const [ isPriceRangeExpanded, setIsPriceRangeExpanded ] = useState(true);
    const [ isBrandExpanded, setIsBrandExpanded ] = useState(true);
    const [ isYearExpanded, setIsYearExpanded ] = useState(true);
    const [ isOriginExpanded, setIsOriginExpanded ] = useState(true);

    const handleCheckboxChange = (filterType, value, isChecked) => {
        switch (filterType) {
                        case "category":
                            setSelectedCategories((prev) => (isChecked ? [ ...prev, value ] : prev.filter((item) => item !== value)));
                            break;
                        case "brand":
                            setSelectedBrands((prev) => (isChecked ? [ ...prev, value ] : prev.filter((item) => item !== value)));
                            break;
                        case "year":
                            setSelectedYears((prev) => (isChecked ? [ ...prev, value ] : prev.filter((item) => item !== value)));
                            break;
                        case "origin":
                            setSelectedOrigins((prev) => (isChecked ? [ ...prev, value ] : prev.filter((item) => item !== value)));
                            break;
                        default:
                            break;
        }
    };

    const handlePriceRangeClick = (rangeLabel) => {
        setSelectedPriceRange(selectedPriceRange === rangeLabel ? null : rangeLabel);
    };

    const handleSortByClick = (sortOption) => {
        setActiveSortBy(sortOption);
    };

    const getFilteredProducts = useMemo(() => {
        let filtered = allProducts;

        // Category filter
        if (selectedCategories.length > 0) {
            filtered = filtered.filter((p) => selectedCategories.includes(p.category));
        }

        // Price range filter
        if (selectedPriceRange) {
            const range = priceRanges.find((r) => r.label === selectedPriceRange);
            if (range) {
                filtered = filtered.filter((p) => p.price >= range.min && p.price <= range.max);
            }
        }

        // Brand filter
        if (selectedBrands.length > 0) {
            filtered = filtered.filter((p) => selectedBrands.includes(p.brand));
        }

        // Year filter
        if (selectedYears.length > 0) {
            filtered = filtered.filter((p) => selectedYears.includes(p.year));
        }

        // Origin filter
        if (selectedOrigins.length > 0) {
            filtered = filtered.filter((p) => selectedOrigins.includes(p.origin));
        }

        // Sorting (only for display, not actual re-sort for this request)
        // For a real app, you'd sort the 'filtered' array here based on activeSortBy
        // Example:
        // if (activeSortBy === 'Giá: Thấp -> Cao') {
        //   filtered.sort((a, b) => a.price - b.price);
        // } else if (activeSortBy === 'Giá: Cao -> Thấp') {
        //   filtered.sort((a, b) => b.price - a.price);
        // }

        return filtered;
    }, [
        selectedCategories,
        selectedPriceRange,
        selectedBrands,
        selectedYears,
        selectedOrigins,
        activeSortBy, // Include activeSortBy in dependency array if you want to re-sort
    ]);

    return (
        <div className={styles.wrapper}>
            {/* Sidebar bộ lọc */}
            <aside className={styles.sidebar}>
                <h3 className={styles.sidebarTitle}>
                    <img alt="" src={filter} className={styles.sidebarTitleIcon} />
          Bộ Lọc
                </h3>

                {/* Danh mục sản phẩm */}
                <div className={styles.filterGroup}>
                    <h4 onClick={() => setIsCategoryExpanded(!isCategoryExpanded)}>
            Danh mục sản phẩm
                        {isCategoryExpanded ? (
                            <img alt="" src={chevronUp} className={styles.filterToggleIcon} />
                        ) : (
                            <img alt="" src={chevronDown} className={styles.filterToggleIcon} />
                        )}
                    </h4>
                    {isCategoryExpanded && (
                        <div className={styles.filterOptions}>
                            {categories.map((item) => (
                                <label key={item} className={styles.checkboxLabel}>
                                    <input
                                        type="checkbox"
                                        checked={selectedCategories.includes(item)}
                                        onChange={(e) => handleCheckboxChange("category", item, e.target.checked)}
                                    />
                                    {item}{" "}<span className={styles.count}>({allProducts.filter((p) => p.category === item).length})</span>
                                </label>
                            ))}
                        </div>
                    )}
                </div>

                {/* Khoảng giá */}
                <div className={styles.filterGroup}>
                    <h4 onClick={() => setIsPriceRangeExpanded(!isPriceRangeExpanded)}>
            Khoảng giá
                        {isPriceRangeExpanded ? (
                            <img alt="" src={chevronUp} className={styles.filterToggleIcon} />
                        ) : (
                            <img alt="" src={chevronDown} className={styles.filterToggleIcon} />
                        )}
                    </h4>
                    {isPriceRangeExpanded && (
                        <div className={styles.priceRangeButtons}>
                            {priceRanges.map((range) => (
                                <button
                                    key={range.label}
                                    className={`${styles.priceRangeButton} ${selectedPriceRange === range.label ? styles.active : ""}`}
                                    onClick={() => handlePriceRangeClick(range.label)}
                                >
                                    {range.label}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Thương hiệu */}
                <div className={styles.filterGroup}>
                    <h4 onClick={() => setIsBrandExpanded(!isBrandExpanded)}>
            Thương hiệu
                        {isBrandExpanded ? (
                            <img alt="" src={chevronUp} className={styles.filterToggleIcon} />
                        ) : (
                            <img alt="" src={chevronDown} className={styles.filterToggleIcon} />
                        )}
                    </h4>
                    {isBrandExpanded && (
                        <div className={styles.filterOptions}>
                            {brands.map((item) => (
                                <label key={item} className={styles.checkboxLabel}>
                                    <input
                                        type="checkbox"
                                        checked={selectedBrands.includes(item)}
                                        onChange={(e) => handleCheckboxChange("brand", item, e.target.checked)}
                                    />
                                    {item}{" "}<span className={styles.count}>({allProducts.filter((p) => p.category === item).length})</span>
                                </label>
                            ))}
                        </div>
                    )}
                </div>

                {/* Năm sản xuất */}
                <div className={styles.filterGroup}>
                    <h4 onClick={() => setIsYearExpanded(!isYearExpanded)}>
            Năm sản xuất
                        {isYearExpanded ? (
                            <img alt="" src={chevronUp} className={styles.filterToggleIcon} />
                        ) : (
                            <img alt="" src={chevronDown} className={styles.filterToggleIcon} />
                        )}
                    </h4>
                    {isYearExpanded && (
                        <div className={styles.filterOptions}>
                            {years.map((item) => (
                                <label key={item} className={styles.checkboxLabel}>
                                    <input
                                        type="checkbox"
                                        checked={selectedYears.includes(item)}
                                        onChange={(e) => handleCheckboxChange("year", item, e.target.checked)}
                                    />
                                    {item}{" "}<span className={styles.count}>({allProducts.filter((p) => p.category === item).length})</span>
                                </label>
                            ))}
                        </div>
                    )}
                </div>

                {/* Xuất xứ */}
                <div className={styles.filterGroup}>
                    <h4 onClick={() => setIsOriginExpanded(!isOriginExpanded)}>
            Xuất xứ
                        {isOriginExpanded ? (
                            <img alt="" src={chevronUp} className={styles.filterToggleIcon} />
                        ) : (
                            <img alt="" src={chevronDown} className={styles.filterToggleIcon} />
                        )}
                    </h4>
                    {isOriginExpanded && (
                        <div className={styles.filterOptions}>
                            {origins.map((item) => (
                                <label key={item} className={styles.checkboxLabel}>
                                    <input
                                        type="checkbox"
                                        checked={selectedOrigins.includes(item)}
                                        onChange={(e) => handleCheckboxChange("origin", item, e.target.checked)}
                                    />
                                    {item}{" "}<span className={styles.count}>({allProducts.filter((p) => p.category === item).length})</span>
                                </label>
                            ))}
                        </div>
                    )}
                </div>
            </aside>

            {/* Grid sản phẩm */}
            <main className={styles.productArea}>
                <div className={styles.headerRow}>
                    <h3>Danh sách sản phẩm</h3>
                    <div className={styles.sortTabs}>
                        <span className={styles.sortTitle}>Sắp xếp theo</span>
                        {sortOptions.map((option) => (
                            <button
                                key={option}
                                className={`${styles.sortButton} ${activeSortBy === option ? styles.active : ""}`}
                                onClick={() => handleSortByClick(option)}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </div>

                <div className={styles.grid}>
                    {getFilteredProducts.length > 0 ? (
                        getFilteredProducts.map((p) => (
                            <div key={p.id} className={styles.card}>
                                <div className={styles.imageWrap}>
                                    <img alt={p.name} src={p.image || "/placeholder.svg"} />
                                </div>
                                <div className={styles.badge}>
                                    <img alt="" src={saleIcon} className={styles.badgeIcon} />
                  Giá cực sốc
                                </div>
                                <h4 className={styles.title}>{p.name}</h4>
                                <div className={styles.priceRow}>
                                    <span className={styles.price}>{p.price.toLocaleString()} đ</span>
                                    <div className={styles.subRow}>
                                        <span className={styles.oldPrice}>{p.oldPrice.toLocaleString()} đ</span>
                                        <span className={styles.discount}>-{p.discount}%</span>
                                    </div>
                                </div>
                                <button className={styles.buyBtn}>Mua ngay</button>
                            </div>
                        ))
                    ) : (
                        <p className={styles.noProducts}>Không tìm thấy sản phẩm nào phù hợp với bộ lọc.</p>
                    )}
                </div>
            </main>
        </div>
    );
};

export default ProductList;
