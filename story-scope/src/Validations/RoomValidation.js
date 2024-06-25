import * as yup from "yup"


export const roomCodeValidation = yup.object().shape({
    roomCode : yup.number().min(4)
})