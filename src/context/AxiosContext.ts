import getConfig from 'next/config';
import React, { createContext, useMemo } from 'react';

import Axios, { AxiosInstance } from 'axios';

import { useLogout } from '@hooks';

export const AxiosContext = createContext<AxiosInstance>(Axios);

export const AxiosProvider = ({
  children,
}: React.PropsWithChildren<unknown>) => {
  const logout = useLogout();
  const { publicRuntimeConfig } = getConfig();

  const auth = useMemo(() => {
    const axios = Axios.create({
      baseURL: publicRuntimeConfig.apiUrl,
      withCredentials: true,
    });

    axios.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.response.status === 401) {
          logout.mutate();
        }
      }
    );

    return axios;
  }, [logout, publicRuntimeConfig.apiUrl]);

  return React.createElement(AxiosContext.Provider, { value: auth }, children);
};
