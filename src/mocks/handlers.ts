import { rest } from "msw";
import { useDispatch } from "react-redux";
import userData from '../mocks/userdata.json'
import authSlice from "../store/authSlice";
const data = {"email":"sv@sass.com","password":"123456"}

export const handlers = [
  rest.post('http://localhost:8080/auth/sign_in?"email"="sv@sass.com"&"password"="123456"}', (req,res,ctx)=>{
    const dispatch = useDispatch()
    const productId = req.url.searchParams.get('payload')
    dispatch(authSlice.actions.payload(userData))
        return res(ctx.status(200), 
        ctx.json([
          {
            userData,productId
          }  
        ]))
    })
]