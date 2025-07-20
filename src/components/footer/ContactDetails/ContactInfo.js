
import React from 'react';
import appleStore from '../../../assets/images/appleStore.svg';
import appStore from '../../../assets/images/appStore.svg';
import facebook from '../../../assets/images/facebook.svg';
import flag from '../../../assets/images/flag.svg';
import footerImage from '../../../assets/images/footerImage.svg';
import iconGlobal from '../../../assets/images/iconGlobal.svg';
import linkedin from '../../../assets/images/Linkedin.svg';
import logoFooter from '../../../assets/images/logo01.svg';
import twitter from '../../../assets/images/Twitter.svg';
import styles from './ContactDetails.module.scss';
function Footer() {

    return (
        <footer className={styles.footer}>
            <div className={styles.footerMain}>
                {/* Column 1: Logo and Description */}
                <div className={`${styles.footerColumn} ${styles.footerColumnLeft}`}>
                    
                    <p className={styles.footerColumnText}>
                        Viet Hung Auto Production Trading Joint Stock Company
                    </p>

                    <ul className={styles.footerColumnList}>
                        <li>
                            <a href="#" className={styles.footerColumnLink}>
      Tax code: <span className={styles.highlight}>0305094228</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className={styles.footerColumnLink}>
      Address: <span className={styles.highlight}>13 Nghia Thuc, Ward 05, District 5, Ho Chi Minh City, Viet Nam.</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className={styles.footerColumnLink}>
      Phone number: <span className={styles.highlight}>0283 760 7607</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className={styles.footerColumnLink}>
      Opening hour: <span className={styles.highlight}>09:00 - 22:00 from Mon - Fri</span>
                            </a>
                        </li>
                    </ul>

                    <h3 className={styles.footerColumnTitle}>
                        {/* Placeholder for Logo */}
                        <img src={footerImage} alt="Logo" className={styles.footerLogo} />
                    </h3>
                </div>

                {/* Column 2: Product */}
                <div className={styles.footerColumn}>
                    <div className={styles.footerColumnTitle}>Sitemap</div>
                    <ul className={styles.footerColumnList}>
                        <li>
                            <a href="#" className={styles.footerColumnLinkText}>
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#" className={styles.footerColumnLinkText}>
                                Article
                            </a>
                        </li>
                        <li>
                            <a href="#" className={styles.footerColumnLinkText}>
                                Cart    
                            </a>
                        </li>
                        <li>
                            <a href="#" className={styles.footerColumnLinkText}>
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Column 3: Services */}
                <div className={styles.footerColumn}>
                    <div className={styles.footerColumnTitle}>Legal</div>
                    <ul className={styles.footerColumnList}>
                        <li>
                            <a href="#" className={styles.footerColumnLink}>
                                <span className={styles.textBlack}>__ Privacy policy</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className={styles.footerColumnLinkText}>
                                Cookie policy
                            </a>
                        </li>
                        <li>
                            <a href="#" className={styles.footerColumnLinkText}>
                                Delivery policy
                            </a>
                        </li>
                        <li>
                            <a href="#" className={styles.footerColumnLinkText}>
                                FAQs
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Column 5: Try It Today */}
                <div className={`${styles.footerColumn} ${styles.footerColumnRight}`}>
                    <h3 className={styles.footerColumnTitle}>Download App</h3>
                    <h3 className={styles.footerColumnTitle}>
                        {/* Placeholder for Logo */}
                        <img src={appStore} alt="Logo" className={`${styles.footerLogo} ${styles.firstLogo}`} />
                    </h3>
                    <h3 className={styles.footerColumnTitle}>
                        {/* Placeholder for Logo */}
                        <img src={appleStore} alt="Logo" className={styles.footerLogo} />
                    </h3>

                    <div className={styles.headerLangSelector}>
                        <img alt="" src={flag} className={styles.headerIcon} />
                        <span className={styles.text}>VI</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
