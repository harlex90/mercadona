import { render } from '@testing-library/react';
import ListPromos from './ListPromos';
import usePromos from '../hooks/usePromos';
import useProducts from '../hooks/useProducts';

jest.mock('react-auth-kit', () => ({
    useIsAuthenticated: () => () => false, // later, we will change implementation of this mock BY TEST
    useSignOut: () => () => console.log('signOut()')
}))

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    useNavigate: () => mockNavigate
}))

jest.mock('./ItemCard', () => ({ product }) => {
    return <div data-testid="ItemCard" data-product={product.id} data-discount={product.discount } />
})

jest.mock("../hooks/usePromos", () => jest.fn())
jest.mock("../hooks/useProducts", () => jest.fn())

describe('ListPromos', () => {
    beforeEach(() => {
        useProducts.mockImplementation(() => {
            return ({
                products: []
            })
        })
        usePromos.mockImplementation(() => {
            return ({
                promos: []
            })
        })
    });

    test('match snapshot', () => {
        const { asFragment } = render(<ListPromos />);
        expect(asFragment()).toMatchSnapshot()
    });

    test('match snapshot when data', () => {
        useProducts.mockImplementation(() => {
            return ({
                products: [{
                    id: 3,
                    name: 'chaise',
                    category_id: 9,
                }]
            })
        })
        usePromos.mockImplementation(() => {
            return ({
                promos: [{
                    id: 5,
                    product_id: 3,
                    start_date: 0,
                    end_date: 10111111111,
                    discount: 0.5
                }]
            })
        })
        
        const { asFragment } = render(<ListPromos />);
        expect(asFragment()).toMatchSnapshot()
    });
    test('should display startDate and endDate which are before now and efter now', () => {
        // const startDate = prom.start_date
        // const endDate = prom.end_date
        // expect(startDate).toBeLessThan(mockDate.now)
        // expect(endDate).toBeGreaterThan(mockDate.now)
        const { asFragment } = render(<ListPromos />);
        
    });
});

                