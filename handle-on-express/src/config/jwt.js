// yarn add jsonwebtoken libraries create token
import jwt from "jsonwebtoken"
import config from '../config/config.js'

const secretKey = config.secretKey
// create new token
const generateToken = (data) => {

    // 1 payload
    // 2 secret key
    // 3 header (exp, algorithm)
    const token = jwt.sign( data , secretKey, { expiresIn: "5m" })
    return token
}

// check token valid or not
const checkToken = (token) => {
    return jwt.verify(token, secretKey)
}

// decode token
const decodeToken = (token) => {
    return jwt.decode(token)
}


export { generateToken, checkToken, decodeToken }