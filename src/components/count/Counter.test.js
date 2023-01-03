import { render, screen } from "../../test-utils";
import Counter from "./Counter";
import user from '@testing-library/user-event'

describe("Counter", ()=>{
    test("Rendered Successfully", () => {
        render(<Counter/>)
        const headingElement = screen.getByRole('heading')
        expect(headingElement).toBeInTheDocument()

        const incrementButton = screen.getByRole('button',{name:"Increment"})
        expect(incrementButton).toBeInTheDocument()
    });

    test("Renders Count of 0", ()=>{
        render(<Counter/>)
        const countElement = screen.getByRole('heading')
        expect(countElement).toHaveTextContent("0")
    })

    test('render count of 1 after clicking increment button', async()=>{
        // user.setup()
        render(<Counter/>)
        const incrementButton = screen.getByRole('button',{name:"Increment"})
        await user.click(incrementButton)
        const countElement = screen.getByRole('heading')
        expect(countElement).toHaveTextContent("1")
    })

    test('render count of - after clicking decrement button', async()=>{
        // user.setup()
        render(<Counter/>)
        const decrementButton = screen.getByRole('button', {  name: /decrement/i})
        await user.click(decrementButton)
        const countElement = screen.getByRole('heading')
        expect(countElement).toHaveTextContent("-1")
    })

    test('render count 2 after clicking button twice', async()=>{
        render(<Counter/>)
        const incrementButton = screen.getByRole('button',{name:"Increment"})
        await user.dblClick(incrementButton)
        const countElement = screen.getByRole('heading')
        expect(countElement).toHaveTextContent("2")
    })

    test('render keyboard count', async() => {
        render (<Counter/>)
        const amountInput = screen.getByRole('spinbutton')
        await user.type(amountInput, "10")
        expect(amountInput).toHaveValue(10)

        const setButton = screen.getByRole('button',{name:'Set Count'})
        await user.click(setButton)

        const countElement = screen.getByRole('heading')
        expect(countElement).toHaveTextContent('10')

    })
})