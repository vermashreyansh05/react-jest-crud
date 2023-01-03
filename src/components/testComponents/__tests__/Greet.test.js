import { render, screen } from "@testing-library/react";
import Greet  from "../Greet";



describe("Greet",()=>{

    test("Rendered Correctly",()=>{
        render(<Greet/>)
        const textElement = screen.getByText("Hello")
        expect(textElement).toBeInTheDocument()
    })
    
    describe("Nested", ()=>{
        test("rendered with a name", ()=>{
            render(<Greet name="Shreyansh"/>)
            const textElement = screen.getByText("Hello Shreyansh")
            expect(textElement).toBeInTheDocument()
        })
    })
})