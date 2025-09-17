import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../src/App";

describe("App component", () => {
    it("Renders correct heading", () => {
        render(<App/>);
        expect(screen.getByRole("heading", { level: 1 }).textContent).toMatch(/dog memory game/i)
    })
});