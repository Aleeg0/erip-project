import styles from '../styles.module.scss';
import {InfoCircleOutlined} from "@ant-design/icons";

const EmptyChart = () => {
  return (
    <div className={styles.EmptyChart_container}>
      <div className={styles.EmptyChart_icon}>
        <InfoCircleOutlined />
      </div>
      <div className={styles.EmptyChart_header}>
        <h3>
          Данные отсутствуют
        </h3>
      </div>
      <div className={styles.EmptyChart_description}>
        <p>
          По выбранным параметрам данных не найдено.
        </p>
      </div>
    </div>
  );
};

export default EmptyChart;