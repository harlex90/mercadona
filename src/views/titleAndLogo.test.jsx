import { render } from '@testing-library/react';
import TitleAndLogo from './TitleAndLogo';

describe('TitleAndLogo', () => {
    test('match snapshot', () => {
        const { asFragment } = render(<TitleAndLogo />);
        expect(asFragment()).toMatchSnapshot()
    });
    test('display title and logo', () => {
        const { getByText } = render(<TitleAndLogo />);
        expect(getByText("MERCADONA")).toBeInTheDocument();
        expect(getByText("Des promos toute l'année !")).toBeInTheDocument();
    });
});