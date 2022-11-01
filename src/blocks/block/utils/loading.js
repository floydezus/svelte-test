export function getLoading() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ isLoading: false })
    }, 5000)
  })
}
