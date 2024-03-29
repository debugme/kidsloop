import { render } from "@testing-library/react";

import "../../language/initialize";
import { ThemeProvider } from "../../theme";
import OptionBar from ".";

describe("OptionBar", () => {
  it("should render correctly", async () => {
    const container = render(
      <ThemeProvider>
        <OptionBar />
      </ThemeProvider>
    );

    const theme = await container.getByTestId("theme");
    expect(theme).not.toBeFalsy();

    const spacer = await container.getByTestId("spacer");
    expect(spacer).not.toBeFalsy();

    const language = await container.getByTestId("language");
    expect(language).not.toBeFalsy();
  });
});
