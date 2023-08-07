import { render } from '@testing-library/react';
import BubbleButton from '.';

describe('<BubbleButton>', () => {
  it('should render button', () => {
    const { getByText, getByRole } = render(
      <BubbleButton>button</BubbleButton>
    );

    const buttonElement = getByRole('button');
    const buttonTextElement = getByText('button');

    expect(buttonElement).toBeInTheDocument();
    expect(buttonTextElement).toBeInTheDocument();
  });
});
