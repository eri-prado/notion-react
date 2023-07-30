import { render } from "@testing-library/react"
import ButtonMenu from "."

describe('<ButtonMenu>', () => {
  it('should render button', () => {
    const {getByText, getByRole} = render(<ButtonMenu>button</ButtonMenu>)

    const buttonElement = getByRole('button')
    const buttonTextElement = getByText('button')

    expect(buttonElement).toBeInTheDocument();
    expect(buttonTextElement).toBeInTheDocument();
  })
})