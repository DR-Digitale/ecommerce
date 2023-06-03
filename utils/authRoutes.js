import { NextApiRequest } from 'next'
import { getSession } from "next-auth/react"
import jwt from 'jsonwebtoken';
import axios from 'axios';

export const authorizeAdmin = () => {
  const payload = {
    iss: `${process.env.NEXT_PUBLIC_BASE_URL}`,

    data: {
      user: {
        id: '1',
      },
    },
  }

  const secretKey = '?Lg1<PnNs4zM9v2oHSETEe3ls~W-H!ZnYj7@SgK8E6AYc&gRrMZ5SF';

  const token = jwt.sign(payload, secretKey, { expiresIn: 60 })

  return token
}


export const authorizeUser = async (req) => {
  try {
    const session = await getSession({ req })
    if (!session) return null

    const key = jwt.verify(session.user.key, process.env.WP_JWT_AUTH_SECRET_KEY, {
      algorithms: ['HS256'],
      ignoreNotBefore: true,
    })

    return key
  } catch (error) {
    return null
  }
}

export const fetcher = async (url) => {
  const token = authorizeAdmin()

  return fetch(process.env.NEXT_PUBLIC_BASE_URL + url, {
    headers: {
      Authorization: `Bearer ${token}`,

      'Content-Type': 'application/json',
    },
    credentials: 'include',
    mode: 'cors',
  })
}

export const poster = async (url, data, method) => {
  const token = authorizeAdmin()
  console.log(token);
  
  if(token) {
    return await axios.post(process.env.NEXT_PUBLIC_BASE_URL + url, data,{
      headers: {
        Authorization: `Bearer ${token}`,
  
        'Content-Type': 'application/json',
      },
      
    })
  }
}