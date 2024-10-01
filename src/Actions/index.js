

export const authorize =() =>{
    return {
        type: "IS_AUTHORIZED",
        payload: {
            is_authorized: true
        }
    }
}

export const unauthorize = () =>{
    return {
        type: "UNAUTHORIZED",
        payload: {
            is_authorized: false
        }
    }
}