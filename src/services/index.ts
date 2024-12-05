import axiosClient from './axios';
import { URL } from './endpoints';

const activate = () => axiosClient.get(URL.ACTIVATE);
const auth = (body: any) => axiosClient.post(URL.AUTH, body);
const createToken = () => axiosClient.delete(URL.CREATE_TOKEN);
const editProfile = (body: any) => axiosClient.put(URL.EDIT_PROFILE, body);
const getTransaction = (body: any) =>
  axiosClient.put(URL.GET_TRANSACTION, body);
const getUser = (body: any) => axiosClient.put(URL.GET_USER, body);
const register = (body: any) => axiosClient.put(URL.REGISTER, body);
const sendEmail = (body: any) => axiosClient.put(URL.SEND_EMAIL, body);
const sendNotification = (body: any) =>
  axiosClient.put(URL.SEND_NOTIFICATION, body);
const sendPasswordToken = (body: any) =>
  axiosClient.put(URL.SEND_PASSWORD_TOKEN, body);
const setProfilePicture = (body: any) =>
  axiosClient.put(URL.SET_PROFILE_PICTURE, body);
const stripeSession = (body: any) => axiosClient.put(URL.STRIPE_SESSION, body);
const updateCountry = (body: any) => axiosClient.put(URL.UPDATE_COUNTRY, body);
const updatePassword = (body: any) =>
  axiosClient.put(URL.UPDATE_PASSWORD, body);
const updateStatus = (body: any) => axiosClient.put(URL.UPDATE_STATUS, body);
const uploadImage = (body: any) => axiosClient.put(URL.UPLOAD_IMAGE, body);
const userExists = (body: any) => axiosClient.put(URL.USER_EXISTS, body);

const Services = {
  auth,
  createToken,
  editProfile,
  activate,
  getTransaction,
  getUser,
  register,
  sendEmail,
  sendNotification,
  sendPasswordToken,
  setProfilePicture,
  stripeSession,
  updateCountry,
  updatePassword,
  updateStatus,
  uploadImage,
  userExists,
};

export default Services;
