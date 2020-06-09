export const SET_IS_LOADING = "SET_IS_LOADING"
export const SET_DATA = "SET_DATA"

export const setIsLoading = (isLoading) => ({
    type: SET_IS_LOADING,
    isLoading,
})

export const setData = (data) => ({
    type: SET_DATA,
    data,
})
