import classNames from 'classnames';
import React from 'react';

import styles from './AppFooter.module.scss';
import contactStyles from './ContactDetails/ContactDetails.module.scss';
import ContactInfo from './ContactDetails/ContactInfo';

function Footer() {
    return (
        <div className={classNames('d-lg-block', styles.appFooter)}>
            <div className={contactStyles.contactContainer}>
                <ContactInfo  />
            </div>
        </div>
    );
}

export default Footer;
