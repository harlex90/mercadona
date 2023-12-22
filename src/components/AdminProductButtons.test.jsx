import { render } from '@testing-library/react';
import AdminProductButtons from './AdminProductButtons';
import { useIsAuthenticated } from "react-auth-kit";

jest.mock('react-auth-kit', () => ({
    useIsAuthenticated: jest.fn(),
    useSignOut: () => () => console.log('signOut()')
}))

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    useNavigate: () => mockNavigate
}))

describe('AdminProductButtons', () => {
    test('match snapshot', () => {
        useIsAuthenticated.mockImplementation(() => () => false)
        const { asFragment } = render(<AdminProductButtons />);
        expect(asFragment()).toMatchSnapshot()
    });

    describe('authenticated', () => {
        beforeEach(() => {
            useIsAuthenticated.mockImplementation(() => () => true)
        })

        test('match snapshot', () => {
            const { asFragment } = render(<AdminProductButtons />);
            expect(asFragment()).toMatchSnapshot()
        });

        test('should navigate to /adm in/products/create if "+" button is clicked', () => {
           const { getByText } = render(<AdminProductButtons />);

            const buttonPlus = getByText('+');
            buttonPlus.click();
            expect(mockNavigate).toHaveBeenCalledWith("/admin/products/create")
        });
    
        test('should navigate to /admin/products/delete if "-" button is clicked', () => {            
            const { getByText } = render(<AdminProductButtons />);
            const buttonMinus = getByText('-');
            buttonMinus.click();
            expect(mockNavigate).toHaveBeenCalledWith("/admin/products/delete")
        });
    })


    
});
