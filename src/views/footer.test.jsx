import { render } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
    test('match snapshot', () => {
        const { asFragment } = render(<Footer />);
        expect(asFragment()).toMatchSnapshot()
    });
    test('display MERCADONA', () => {
        const { getByText } = render(<Footer />);
        expect(getByText("MERCADONA")).toBeInTheDocument();
    });
});



