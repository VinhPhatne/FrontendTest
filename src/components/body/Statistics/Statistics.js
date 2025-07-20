/* eslint-disable react/no-unknown-property */

import { useEffect, useRef, useState } from 'react';
import iconLocation from '../../../assets/images/iconLocation.svg';
import styles from './Statistics.module.scss';

function Statistics() {
    return (
        <>
            <div
                className={styles.topEnterprise}
            >
                <div
                    className={styles.topEnterpriseContainer}
                >
                    <div className={styles.left}>
                        <img alt="ITZ EDUCATION" src={iconLocation} className={styles.logo} />
                        <span className={styles.content}>Xem hệ thống 88 cửa hàng trên toàn quốc</span>
                    </div>

                    <button className={styles.footerButton}>
                            Xem ngay <span className={styles.footerButtonArrow}>→</span>
                    </button>
                </div>
            </div>
        </>
    );
}

export default Statistics;
