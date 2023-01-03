import configureStore from 'redux-mock-store';
import { render, screen } from "../../test-utils";
import WelcomePage from "./WelcomePage";



describe.only("WelcomePage", ()=>{
    const initialState = { "data": {
                "data": {
                "id": 3,
                "email": "sv@sass.com",
                "provider": "email",
                "uid": "sv@sass.com",
                "full_name": "sv",
                "nick_name": "S"
                    }}}
 

    const mockStore = configureStore();
    let store;
    test("Renders Correctly", async() => {
        const data = mockStore(initialState)
        render(<WelcomePage/>)
        screen.debug()
        const listComponent =await screen.findByRole('list')
        screen.debug()
        expect(listComponent).toBeInTheDocument()

    });

})