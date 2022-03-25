import React, { createContext } from 'react';
import Axios, { AxiosInstance } from 'axios';

export const AxiosContext = createContext<AxiosInstance>(Axios);

export const AxiosProvider = ({
  children,
}: React.PropsWithChildren<unknown>) => {
  return React.createElement(AxiosContext.Provider, { value: Axios }, children);
};
