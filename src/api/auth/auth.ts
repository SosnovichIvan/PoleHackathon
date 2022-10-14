import axios from "axios";
import { LoginDto, RegisterDto, UserState } from "redux/auth";
import { LOGIN_API, REGISTER_API, SESSION_API } from "constants/path";

const isMock = process.env.IS_MOCK;

const mockUser: UserState = {
  id: "test-id-1",
  name: "Semen",
  email: "asdsa@dadsa.ru",
  position: "test",
};

export const loginUserApi = async (data: LoginDto) => {
  if (isMock) return mockUser;
  const response: UserState = await axios({
    method: "post",
    url: LOGIN_API,
    data,
  });
  return response;
};

export const registerUserApi = async (data: RegisterDto) => {
  if (isMock) return mockUser;
  const response: UserState = await axios({
    method: "post",
    url: REGISTER_API,
    data,
  });
  return response;
};

export const sessionApi = async () => {
  if (isMock) return mockUser;
  const response = await axios({
    method: "get",
    url: SESSION_API,
  });
  return response;
};