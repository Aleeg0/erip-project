import styles from '../styles.module.scss';
import {Spin} from "antd";

const LoadingChart = () => {
  return (
    <div className={styles.LoadingChart_root}>
      <Spin size={'large'}/>
    </div>
  );
};

export default LoadingChart;