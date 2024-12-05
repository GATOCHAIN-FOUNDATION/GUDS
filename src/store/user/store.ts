import { createContext } from 'react';
import { createStore } from 'zustand';

type User = {
  password: string;
  firstName: string;
  lastName: string;
  profilePicture: string;
  birthday: string;
  telegramNick: string;
  linkedinNick: string;
  country: string;
};

export interface UserProps {
  data: User;
}

export interface UserState extends UserProps {
  setUser: (user: User) => void;
}

export const createUserStore = (initProps: UserProps) => {
  return createStore<UserState>()((set) => ({
    data: initProps?.data,
    setUser: (user: User) => set({ data: user }),
  }));
};

export type UserStore = ReturnType<typeof createUserStore>;
export const UserContext = createContext<UserStore | null>(null);
