import { baseUrl, khglUrl, dicUrl } from '@/config/env';
import request from '@/router/axios';
import { userInfo, tableData } from '@/mock/user';
import { menu, menuAll } from '@/mock/menu'
;

export const loginByUsername = (username, password, code, redomStr) => new Promise((resolve, reject) => {
  resolve({ data: new Date().getTime() });
});

export const getUserInfo = () => new Promise((resolve, reject) => {
  resolve({ data: userInfo });
});
export const getMenu = parentId => new Promise((resolve, reject) => {
  if (!parentId) parentId = 0;
  resolve({ data: menu[parentId] });
});
export const getMenuAll = () => new Promise((resolve, reject) => {
  resolve({ data: menu[0] });
});

export const getTableData = page => new Promise((resolve, reject) => {
  resolve({ data: tableData });
});
export const logout = () => new Promise((resolve, reject) => {
  resolve();
});

