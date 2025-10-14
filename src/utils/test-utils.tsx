import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../store/store";

const renderWithProviders = (ui: React.ReactElement) => {
    return render(<Provider store={store}>{ui}</Provider>);
};

export * from "@testing-library/react";
export { renderWithProviders as render };
