import 'swiper/css';
import 'swiper/css/pagination';

import classNames from 'classnames';

import { Link } from 'react-router-dom';
import { useState } from 'react';

import appHeader from '../../assets/images/appHeader.svg';
import Camera from '../../assets/images/Camera.svg';
import cart from '../../assets/images/cart.svg';
import chevronDownWhite from '../../assets/images/chevronDownWhite.svg';
import discount from '../../assets/images/discount.svg';
import flag from '../../assets/images/flag.svg';
import iconSave from '../../assets/images/iconSave.svg';
import logo1 from '../../assets/images/logo1.svg';
import menu from '../../assets/images/menu.svg';
import phone from '../../assets/images/phone.svg';
import refreshIcon from '../../assets/images/refreshIcon.svg';
import search from '../../assets/images/search.svg';
import timeLockIcon from '../../assets/images/timeLockIcon.svg';
import truck from '../../assets/images/truck.svg';
import user from '../../assets/images/user.svg';
import CategoryDropdown from '../body/Category/Category';
import styles from './AppHeader.module.scss';
import CartDropdown from './CartDropdown';


function AppHeader() {
    const [ isDropdownOpen, setIsDropdownOpen ] = useState(false);
    const [ isCartDropdownOpen, setIsCartDropdownOpen ] = useState(false);
    return (
        <div>
            <div className={styles.appHeaderContainer}>
                <div className={classNames('header-container', styles.appHeader)}>
                    <div className={styles.headerContainer}>
                        <div className={styles.top}>
                            <div className={styles.left}>
                                <img alt="discount" src={discount} className={styles.logo} />
                                <span>Nhập mã <span className={styles.highlight}>NEWBIE</span> giảm ngay 10% cho lần đầu mua hàng.</span>
                            </div>
                            <div className={styles.right}>
                                <div className={styles.content}>
                                    <img alt="phone" src={phone} className={styles.logo} />
                                    <span>Hotline: <span className={styles.highlight}>0283 760 7607</span></span>
                                </div>
                                <div className={styles.content}>
                                    <img alt="appHeader" src={appHeader} className={styles.logo} />
                                    <span>Tải ứng dụng</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <header className={styles.header}>
                {/* Top Row */}
                <div className={styles.headerTop}>
                    {/* Logo */}
                    <div className={styles.headerLogo}>
                        <Link href="#">
                            <img
                                src={logo1}
                                alt="Sunfil Logo"
                                className={styles.headerLogoImage}
                                priority
                            />
                        </Link>
                    </div>

                    {/* Search Bar */}
                    <div className={styles.headerSearchBar}>
                        <input type="text" placeholder="Tìm sản phẩm" className={styles.headerSearchInput} />
                        <button type="button" className={styles.headerCameraButton}>
                            <img alt="" src={Camera} className={styles.headerIcon} />
                        </button>
                        <button type="button" className={styles.headerSearchButton}>
                            <img alt="" src={search} className={styles.headerIcon} />
                        </button>
                    </div>

                    {/* Right Icons */}
                    <div className={styles.headerRightIcons}>
                        <div className={styles.headerLangSelector}>
                            <img alt="" src={flag} className={styles.headerIcon} />
                            <span className={styles.text}>VI</span>
                        </div>
                        {/* <div className={styles.headerCart}>
                           
                            <img alt="" src={cart} className={styles.headerIcon} />
                            <span className={styles.headerCartBadge}>12</span>
                            <span className={styles.text}>Giỏ hàng</span>
                        </div> */}
                        <div
                            className={styles.headerCartWrapper} // Wrapper for cart icon and dropdown
                            onMouseEnter={() => setIsCartDropdownOpen(true)}
                            onMouseLeave={() => setIsCartDropdownOpen(false)}
                        >
                            <div className={styles.headerCart}>
                                <img alt="" src={cart} className={styles.headerIcon} />
                                <span className={styles.headerCartBadge}>12</span>
                                <span className={styles.text}>Giỏ hàng</span>
                            </div>
                            {isCartDropdownOpen && <CartDropdown />}
                        </div>
                        <div className={styles.headerAccount}>
                            <img alt="" src={user} className={styles.headerIcon} />
                            <span className={styles.text}>Tài khoản</span>
                        </div>
                    </div>
                </div>

                {/* Middle Row (Navigation) */}
                <div className={styles.headerMiddle}>
                    <div className={styles.headerMiddleContent}>
                        {/* Danh Mục Sản Phẩm Button */}
                        <div
                            className={styles.categoryButtonWrapper}
                            onMouseEnter={() => setIsDropdownOpen(true)}
                            onMouseLeave={() => setIsDropdownOpen(false)}
                        >
                            <button type="button" className={styles.headerCategoryButton}>
                                <img alt="" src={menu} className={styles.headerIcon} />
                                <span>Danh Mục Sản Phẩm</span>
                                <img alt="" src={chevronDownWhite} className={styles.headerIconSmall} />
                            </button>
                            {isDropdownOpen && <CategoryDropdown />}
                        </div>

                        {/* Navigation Links */}
                        <nav className={styles.headerNav}>
                            <Link href="#" className={styles.headerNavLink}>
              Về Chúng Tôi
                            </Link>
                            <Link href="#" className={styles.headerNavLink}>
              Bài Viết
                            </Link>
                            <Link href="#" className={styles.headerNavLink}>
              Catalog
                            </Link>
                            <Link href="#" className={styles.headerNavLink}>
              Liên Hệ
                            </Link>
                        </nav>

                        {/* Service Icons */}
                        <div className={styles.headerServices}>
                            <div className={styles.headerServiceItem}>
                                <img alt="" src={timeLockIcon} className={styles.headerIcon} />
                                <span className={styles.textService}>Hỗ trợ 24/7</span>
                            </div>
                            <div className={styles.headerServiceItem}>
                                <img alt="" src={iconSave} className={styles.headerIcon} />

                                <span className={styles.textService}>Miễn Phí Vận Chuyển</span>
                            </div>
                            <div className={styles.headerServiceItem}>
                                <img alt="" src={truck} className={styles.headerIcon} />

                                <span className={styles.textService}>Giao Hàng Nhanh 2h</span>
                            </div>
                            <div className={styles.headerServiceItem}>
                                <img alt="" src={refreshIcon} className={styles.headerIcon} />

                                <span className={styles.textService}>30 Ngày Đổi Trả</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Row (Breadcrumbs) */}
                <div className={styles.headerBottom}>
                    <div className={styles.headerBottomContent}>
                        <Link href="#" className={styles.headerBreadcrumbLink}>
            Trang chủ
                        </Link>
                        <span className={styles.headerBreadcrumbSeparator}>{">"}</span>
                        <Link href="#" className={styles.headerBreadcrumbLinkActive}>
            Sản phẩm
                        </Link>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default AppHeader;
