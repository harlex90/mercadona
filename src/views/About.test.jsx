import { render } from '@testing-library/react';
import About from './About';

jest.mock("../components/Navbar", () => () => <div data-testid="Navbar" />)
jest.mock("./Footer", () => () => <div data-testid="Footer" />)
jest.mock("../components/TitleAndLogo", () => () => <div data-testid="TitleAndLogo" />)

describe('About', () => {
    test('match snapshot', () => {
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot()
    });
});

