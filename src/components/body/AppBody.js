import { Spin } from 'antd';
import { motion, useInView } from 'motion/react';
import dynamic from 'next/dynamic';
import { useRef, useState } from 'react';

import AppHeader from '../header/AppHeader';
import styles from './AppBody.module.scss';
import Banner from './Banner/Banner';
import NotificationBar from './NotificationBar/NotificationBar';
import ProductList from './ProductList/ProductList';
import Statistics from './Statistics/Statistics';


const CreateAnimatedComponent = ({ component, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 2 }}
            style={{ width: '100%' }}
        >
            {component}
        </motion.div>
    );
};

function AppBody() {
    const [ loading, setLoading ] = useState(false);

    const displayComponent = [
        <Banner
            key={5}
        />,
        <ProductList
            key={5}
        />,
        <NotificationBar
            key={6}
        />,
        <Statistics
            key={7}
        />,
    ];
    return (
        <Spin
            size="large"
            // className={classNames(styles.loadingContainer, 'loading-container')}
            spinning={loading}
        >
            <div className={styles.appBody} style={{ flex: '1 1' }}>
                <AppHeader
                    key={0} 
                />

                <div className={styles.appBodyDesk}>
                    <div className={styles.appBodyWrap}>
                        {displayComponent.map((component, index) => (
                            <CreateAnimatedComponent
                                key={index}
                                component={component}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </Spin>
    );
}

export default AppBody;
