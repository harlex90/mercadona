import { render } from '@testing-library/react';
import AdminCategoryButtons from './AdminCategoryButtons';
import useCategories from "../hooks/useCategories";

jest.mock('react-auth-kit', () => ({
    useIsAuthenticated: () => () => false, // later, we will change implementation of this mock BY TEST
    useSignOut: () => () => console.log('signOut()')
}))

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    useNavigate: () => mockNavigate
}))

jest.mock('./ItemCategory', () => ({ category }) => {
    return <div data-testid="ItemCategory" data-category={category.id}/>
})

jest.mock("../hooks/useCategories", () => jest.fn())

describe.skip('AdminCategoryButtons', () => {
    beforeEach(() => {
        useCategories.mockImplementation(() => {
            return ({
                categories: []
            })
        })
    })
    
    test('match snapshot when no categories', () => {
        
        const { asFragment } = render(<AdminCategoryButtons />);
        expect(asFragment()).toMatchSnapshot()
    });

    test('match snapshot when categories', () => {
        useCategories.mockImplementation(() => {
            return ({
                categories: [{
                    id: "id1"
                }, {
                    id: "id2"
                }]
            })
        })
        const { asFragment } = render(<AdminCategoryButtons />);
        expect(asFragment()).toMatchSnapshot()
    });

    test.only('should navigate to /admin/categories/create if "+" button is clicked', () => {
        const { getByText } = render(<AdminCategoryButtons />);
        const buttonPlus = getByText('+');
        buttonPlus.click();
        expect(mockNavigate).toHaveBeenCalledWith("/admin/categories/create")
    });

    test('should navigate to /admin/categories/delete if "-" button is clicked', () => {
        const { getByText } = render(<AdminCategoryButtons />);
        const buttonMinus = getByText('-');
        buttonMinus.click();
        expect(mockNavigate).toHaveBeenCalledWith("/admin/categories/delete")
    });
});
