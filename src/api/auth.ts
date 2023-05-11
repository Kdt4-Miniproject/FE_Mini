import { LoginRequestDto } from '../types/Dto/loginRequest.dto'
import { ApiResponse } from '../types/response'
import { API_URL } from './constants'
import { instance } from './instance'

export const login = async (loginForm: LoginRequestDto) => {
  const res = await instance.post<ApiResponse>(API_URL.v1.login, {
    email: loginForm.email,
    password: loginForm.password,
  })

  return res.data
}