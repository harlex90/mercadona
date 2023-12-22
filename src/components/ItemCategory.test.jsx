import { render } from '@testing-library/react';
import ItemCategory from './ItemCategory';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    useNavigate: () => mockNavigate
}))

test('should navigate to /admin/categories/${category.id} if "{category.name}" button is clicked', () => {
    const category = {id: 1, name: "test"}
    const { getByText } = render(<ItemCategory category={category}/>);
    const buttonOnCategory = getByText(category.name);
    buttonOnCategory.click();
    expect(mockNavigate).toHaveBeenCalledWith(`/admin/categories/${category.id}`)
});


