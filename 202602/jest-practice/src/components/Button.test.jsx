import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Button Component", () => {
    test("텍스트가 올바르게 렌더링됨", () => {
        render(<Button>클릭하세요</Button>);
        expect(screen.getByText("클릭하세요")).toBeInTheDocument();
    });

    test("클릭 이벤트가 정상 작동", async () => {
        const user = userEvent.setup();
        const handleClick = jest.fn();

        render(<Button onClick={handleClick}>클릭</Button>);

        await user.click(screen.getByText("클릭"));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    test("disabled 상태에서는 클릭 안됨", async () => {
        const user = userEvent.setup();
        const handleClick = jest.fn();

        render(
            <Button onClick={handleClick} disabled>
                클릭
            </Button>,
        );

        await user.click(screen.getByText("클릭"));
        expect(handleClick).not.toHaveBeenCalled();
    });

    test("variant prop에 따라 클래스명 변경", () => {
        const { rerender } = render(<Button variant="secondary">버튼</Button>);
        expect(screen.getByText("버튼")).toHaveClass("btn-secondary");

        rerender(<Button variant="danger">버튼</Button>);
        expect(screen.getByText("버튼")).toHaveClass("btn-danger");
    });
});
