// import { screen, render } from "../../../test-utils";
import { screen, render } from "../../../test-utils";
import SignUpPAge from "../SignUpPAge";
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import user from "@testing-library/user-event";

describe("SignUpPage", ()=> {
    // const initialState = { output: 10 };
    // const mockStore = configureStore();
    // let store;


    test('SignUpPage rendered correctly', () => {
        // store = mockStore(initialState)
        // render(<Provider store={store}><SignUpPAge/></Provider>)
        render(<SignUpPAge/>)

        const divElement = screen.getByRole('heading', {  name: /bric/i})
        expect(divElement).toBeInTheDocument();

        const buttonElement = screen.getByRole('button', {  name: /get started/i})
        expect(buttonElement).toBeInTheDocument();

        const headingElement = screen.getByRole('heading', {  name: /take less than 10 minutes to fill out all the information needed to register your buisness\./i})
        expect(headingElement).toBeInTheDocument()
    })
    
    test('input element rendered', async() => {
        render(<SignUpPAge/>)
        // store = mockStore(initialState)
        // render(<Provider store={store}><SignUpPAge/></Provider>)
        // user.setup()
        // const nameElement = screen.getByLabelText("Full name")
        // expect(nameElement).toHaveTextContent("");

        const fname = screen.getByTestId("fullName")
        await user.type(fname,"Shreyansh")
        expect(fname).toHaveValue("Shreyansh");

        const emailElement = screen.getByTestId("email")
        await user.type(emailElement,"sv@sass.com")
        expect(emailElement).toHaveValue("sv@sass.com")

        const passwordElement = screen.getByTestId("password")
        await user.type(passwordElement,"123456")
        expect(passwordElement).toHaveValue("123456")

        const confirmPassElement = screen.getByTestId("confirm-password")
        await user.type(confirmPassElement,"123456")
        expect(confirmPassElement).toHaveValue("123456")
    
        
    })

    test('input elements tab is rendered', async() => {
        render(<SignUpPAge/>)
        // store = mockStore(initialState)
        // render(<SignUpPAge/>,{
        //     wrapper:Provider(store={store})
        // })
        // render(<Provider store={store}><SignUpPAge/></Provider>)
        // user.setup()

        const fname = screen.getByTestId("fullName")
        const emailElement = screen.getByTestId("email")
        const passwordElement = screen.getByTestId("password")
        const confirmPassElement = screen.getByTestId("confirm-password")

        await user.tab()
        await user.tab()
        expect(fname).toHaveFocus()
        await user.tab()
        expect(emailElement).toHaveFocus()
        await user.tab()
        expect(passwordElement).toHaveFocus()
        await user.tab()
        expect(confirmPassElement).toHaveFocus()
    })

    test('input elements tab is rendered', async() => {
        render(<SignUpPAge/>)
        // store = mockStore(initialState)
        // render(<Provider store={store}><SignUpPAge/></Provider>)

        const loginButton = screen.getByRole('button', {  name: /log in/i})
        expect(loginButton).toBeInTheDocument();

        const linkElement = screen.getByRole('link', {  name: /terms and condition/i})
        expect(linkElement).toBeInTheDocument();
    })
})