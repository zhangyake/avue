import { userTableData, roleTableData } from '@/mock/admin';
import { DIC } from '@/const/dic';

export const getUserData = page => new Promise((resolve, reject) => {
  resolve({ data: userTableData });
});

export const getRoleData = page => new Promise((resolve, reject) => {
  resolve({ data: roleTableData });
});

export const getDic = type => new Promise((resolve, reject) => {
  resolve({ data: DIC[type] });
});
