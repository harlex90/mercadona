import { render } from '@testing-library/react';
import Navbar from './Navbar';

jest.mock('react-auth-kit', () => ({
    useIsAuthenticated: () => () => false, // later, we will change implementation of this mock BY TEST
    useSignOut: () => () => console.log('signOut()')
}))

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    Link: ({ to, children }) => <div data-testid="Link" data-to={to}>{children}</div>,
    useNavigate: () => mockNavigate
}))

describe('Navbar', () => {
    test('match snapshot', () => {
        const { asFragment } = render(<Navbar />);
        expect(asFragment()).toMatchSnapshot()
    });

    test('should navigate to /loginadmin if click button signin', () => {
        const { getByText } = render(<Navbar />);
        const buttonSignin = getByText('Sign In');
        buttonSignin.click();
        expect(mockNavigate).toHaveBeenCalledWith("/loginadmin")
    });
    // test('display menu and sign in/sign out only if admin is connected', () => {
    //     const { getByText } = render(<Navbar />);
    //     fireEvent.click(screen.getByText('Home'))
    //     fireEvent.click(screen.getByText('Catalogue'))
    //     fireEvent.click(screen.getByText('About'))
    //     fireEvent.click(screen.getByText('Sign in'))
    //     fireEvent.click(screen.getByText('Sign out'))
    //     const myButton = getByText('Click');
       
        
    // });

    
});

