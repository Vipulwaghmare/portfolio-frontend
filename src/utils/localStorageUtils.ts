// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const setTokensToLocalStorage = (data: any) => {
  localStorage.setItem('accessToken', data.accessToken)
  localStorage.setItem('refreshToken', data.refreshToken)
}