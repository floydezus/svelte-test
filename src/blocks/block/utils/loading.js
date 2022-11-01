export function getLoading() {
    return new Promise((resolve, _reject) => {
        setTimeout(() => {
            resolve({isLoading: false})
        }, 5000)
    })
}
