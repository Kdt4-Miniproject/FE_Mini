import { AxiosResponse } from 'axios'

export const getTokensFromResponse = (res: AxiosResponse) => {
  const headers = res.headers

  const accessToken = headers['authorization']
  const refreshToken = headers['x-auth-refresh-token']

  return {
    accessToken: accessToken ? (accessToken as string).split(' ')[1] : '',
    refreshToken: refreshToken ? (refreshToken as string).split(' ')[1] : '',
  }
}