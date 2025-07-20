

import notification1 from '../../../assets/images/notification1.svg';
import notification2 from '../../../assets/images/notification2.svg';
import notification3 from '../../../assets/images/notification3.svg';
import notification4 from '../../../assets/images/notification4.svg';
import styles from './NotificationBar.module.scss';

function NotificationBar() {
    const notifications = [
        {
            icon: notification1,
            title: 'Miễn phí vận chuyển',
            subtitle: 'Với hoá đơn từ 1 triệu',
        },
        {
            icon: notification2,
            title: 'Hỗ trợ 24/7',
            subtitle: 'Đội ngũ CSKH tận tình sẵn sàng lắng nghe và phục vụ tận tâm',
        },
        {
            icon: notification3,
            title: 'Giao hàng nhanh 2h',
            subtitle: 'Trong vòng bán kính 10km nội thành TP.HCM',
        },
        {
            icon: notification4,
            title: '30 ngày đổi trả',
            subtitle: 'Hoàn tiền 100% nếu phát sinh lỗi từ NSX hoặc đơn vị vận chuyển',
        },
    ];

    return (
        <div className={styles.notificationBar}>
            <div className={styles.gridContainer}>
                {notifications.map((notification, index) => (
                    <div key={index} className={styles.notificationItem}>
                        <div className={styles.iconContainer}>
                            <img
                                alt="ITZ EDUCATION"
                                src={notification.icon}
                                className={styles.logo}
                            />
                        </div>
                        <div className={styles.textContainer}>
                            <h4>{notification.title}</h4>
                            <p>{notification.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NotificationBar;
