// import { render, screen } from "@testing-library/react";
import { render, screen } from '../../../test-utils'
import Login from '../Login'
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import user from '@testing-library/user-event'
import WelcomePage from '../../WelcomePage/WelcomePage'
import userData from '../../../mocks/userdata.json'
import { LoginCheck2 } from '../../../store/authSlice';



describe('Login',()=>{
    const initialState = { output: 10 };
    const mockStore = configureStore();
    let store;

    test('Render',()=>{
        store = mockStore(initialState)
        render(<Provider store={store}><Login/></Provider>)
        
        const headingText = screen.getByRole('heading',{
            name:"Hello Again!"
        })
        expect(headingText).toBeInTheDocument();

        const headingText4 = screen.getByRole('heading',{
            level:4
        })
        expect(headingText4).toBeInTheDocument();


        const emailPlaceholder = screen.getByPlaceholderText("Enter Email")
        expect(emailPlaceholder).toBeInTheDocument();

        const passwordPalceholder = screen.getByPlaceholderText("Enter Password")
        expect(passwordPalceholder).toBeInTheDocument();
        

        const paragraphText = screen.getByText('Not a member?')
        expect(paragraphText).toBeInTheDocument();
        
        // const otherText = screen.getByText((content)=>content.startsWith('Hello'))
        // const otherText = screen.getByText(/Hello/)   // Substring Match Using RegEx
        // const otherText = screen.getByText(/hello/i) // ignore case
        const otherText = screen.getByText(/^hello Again!$/i)  // Full string match by RegEx
        expect(otherText).toBeInTheDocument();

        const altText = screen.getByAltText('Girl Sitting on Floor')
        expect(altText).toBeInTheDocument();

        const altTextGoogle = screen.getByAltText('google logo')
        expect(altTextGoogle).toBeInTheDocument();

        const altTextApple = screen.getByAltText('apple logo')
        expect(altTextApple).toBeInTheDocument();

        const altTextFb = screen.getByAltText('fb logo')
        expect(altTextFb).toBeInTheDocument();

        const containerDiv = screen.getByTitle("containerDiv")
        expect(containerDiv).toBeInTheDocument();

        const LoginContainer = screen.getByTestId('Login-Container')
        expect(LoginContainer).toBeInTheDocument()

        const textBox = screen.getByRole('textbox')
        expect(textBox).toBeInTheDocument()


        const buttonElement = screen.getByRole("button",{
            name:"Register Now"
        })
        expect(buttonElement).toBeInTheDocument()


    });


    test('Function check', async() =>{
        buttonHandler = jest.fn()
        render(<Login/>)
        const buttonElement = screen.getByRole('button', {  name: /register now/i})
        await user.click(buttonElement)
        expect(buttonElement).toBeInTheDocument()

        const SignInButtonElement = screen.getByRole('button', {  name: /sign in/i})
        await user.click(SignInButtonElement)
        // render(<LoginCheck2/>)
        // await render(<WelcomePage/>)
        // const LogoutButtonElement = await screen.findByRole('button', {  name: /logout/i})
        // expect(LogoutButtonElement).toBeInTheDocument()

    })
        
        //To run this go to the email field and paste this (" defaultValue={"sv@sass.com"} ") and remove value={warnemail}
        // const displayValue = screen.getByDisplayValue("sv@sass.com")
        // expect(displayValue).toBeInTheDocument();



        // const lableText = screen.getByLabelText('Recovery Password', {
        //     selector:"input"
        // })
        // expect(lableText).toBeInTheDocument();


})