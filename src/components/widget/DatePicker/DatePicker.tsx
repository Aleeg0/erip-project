import {DatePicker as AntdDatePicker, type DatePickerProps} from "antd";
import {type FC, useEffect, useState} from "react";

type Props = Omit<DatePickerProps, 'onOpenChange' | 'open'>;

const DatePicker: FC<Props> = (props) => {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => setOpen(false);

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll, true);
  }, []);

  return (
    <AntdDatePicker
      {...props}
      open={open}
      onOpenChange={setOpen}
    />
  );
};

export default DatePicker;