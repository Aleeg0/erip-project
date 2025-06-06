import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/shared/styles/global.scss';
import {RouterProvider} from "react-router";
import {router} from "@/shared/router";
import {ConfigProvider} from "antd";
import ruRU from 'antd/locale/ru_RU';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import {Provider} from "react-redux";
import {store} from "@/shared/redux";

dayjs.locale('ru');
dayjs.extend(customParseFormat);
dayjs.extend(localizedFormat);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider
      locale={ruRU}
      theme={{
        "token": {
          colorPrimary: "#1e3e7a",
          colorInfo: "#1e3e7a",
          colorLink: "#000000",
          fontSize: 16,
          fontSizeHeading1: 32,
          fontSizeHeading2: 28,
          fontSizeHeading3: 24,
          fontSizeHeading4: 20,
          borderRadius: 10,
          wireframe: false,
          sizeStep: 4
        }
      }}
    >
      <Provider store={store}>
        <RouterProvider router={router}/>
      </Provider>
    </ConfigProvider>
  </StrictMode>,
);