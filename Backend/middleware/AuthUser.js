const jwebtoken = require('jsonwebtoken')
const user = require('./../models/User')

export const requisitoAuthorization = async (req, res, next) => {
  
  const { authorization } = req.headers

  if (!authorization) {
    return res.status(401).json({error: 'Authorization token is needed'})
  }

  const token = authorization.split(' ')[1]

  try {
    const { _id } = jwebtoken.verify(token, process.env.SECRETO)

    req.user = await userser.findOne({ _id }).select('_id')
    next()

  } catch (error) {
    console.log(error)
    res.status(401).json({error: 'Request not authorized, so it is not going through, sorry'})
  }
}

