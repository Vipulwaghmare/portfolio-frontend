// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getErrorMessage = (error: any) => {
  return error?.response?.data?.message || error?.message
}
export const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));