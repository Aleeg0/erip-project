import {Button, message, Modal, Typography} from "antd";
import {type FC, useCallback, useState} from "react";
import {useLocation} from "react-router";
import {CopyTwoTone, ShareAltOutlined} from "@ant-design/icons";
import styles from './styles.module.scss';

const {Text} = Typography;

type Props = {
  params: Record<string, string>;
}

const ShareButton: FC<Props> = ({params}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const location = useLocation();
  const searchParams = new URLSearchParams(params);
  const url = `${location.pathname}?${searchParams.toString()}`;

  const onClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const onCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(url);
      messageApi.success("Ссылка скопирована", 2);
    }
    catch {
      messageApi.error("Не удалось скопировать", 2);
    }
  }, [messageApi, url]);


  return (
    <>
      {contextHolder}
      <Button
        type={"primary"}
        shape={"circle"}
        className={styles.ShareButton_root}
        icon={<ShareAltOutlined/>}
        size="large"
        onClick={() => setIsOpen(!isOpen)}
      />
      <Modal
        open={isOpen}
        onCancel={onClose}
        title={"Ссылка на страницу"}
        footer={
          <Button
            icon={<CopyTwoTone/>}
            onClick={onCopy}
          >
            Скопировать
          </Button>
        }
      >
        <Text>
          {url}
        </Text>
      </Modal>
    </>
  );
};

export default ShareButton;