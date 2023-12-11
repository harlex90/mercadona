import { act, render } from "@testing-library/react";
import myDefault, { myNamed, MyComponent, MyComponentWithState } from "./Hello";

// for later: mocking uMibrary compoennt
// jest.mock("uMibrary", () => ({ onClick }) => <button data-testid="uMibrary" onClick={onClick}>click me</button>)

describe('MyComponent', () => {
    test('should render without crashing', () => {
        render(<MyComponent url='coucou.pdf' />)
    });
    test('should display "the url is: coucou.pdf"', () => {
        const url = "coucou.pdf";
        const { getByText } = render(<MyComponent url={url} />)
        expect(getByText(`the url is: ${url}`)).toBeTruthy();
    });
    test('should call onClick if the button is clicked', () => {
        const url = "coucou.pdf";
        const onClickHandler = jest.fn()
        const onClickHandler2 = jest.fn()
        const { getByText } = render(<MyComponent url={url} onClick={onClickHandler} />)
        const myButton = getByText('Click');
        myButton.click();
        expect(onClickHandler).toHaveBeenCalled();
        expect(onClickHandler2).not.toHaveBeenCalled();
    });
    
    // for later: mocking uMibrary compoennt
    // test('should display "the url is: coucou.pdf"', () => {
    //     const url = "coucou.pdf";
    //     const { getByTestId } = render(<MyComponent url={url} />)
    //     const myButton = getByTestId('uMibrary').click();
    // });
})

describe('MyComponentWithState', () => {
    test('should render without crashing', () => {
        render(<MyComponentWithState />)
    });
    test('should show the value, and increase value when click the button', () => {
        const {getByText} = render(<MyComponentWithState />)
        expect(getByText("0")).toBeInTheDocument();
        const myButton = getByText('Click');
        act(() => {
            myButton.click();
        })
        expect(getByText("1")).toBeInTheDocument();
    });
})

// describe('simple examples', () => {
//     test('should equal 3 if 1 + 2', () => {
//         const sum = (a, b) => {
//             return a + b
//         };
    
//         expect(sum(1, 2)).toBe(3);
//     });
// })

// describe('imports examples', () => {
//     test('should return true because < 50', () => {
//         expect(myDefault(0)).toBe(true);
//         expect(myDefault(10)).toBe(true);
//         expect(myDefault(-999)).toBe(true);
//         expect(myDefault(49)).toBe(true);
//     });
    
//     test('should return true because >= 50', () => {
//         expect(myDefault(50)).toBe(false);
//         expect(myDefault(9999)).toBe(false);
//     });
    
//     test('should return 5', () => {
//         expect(myNamed()).toBe(5);
//     });
// });
