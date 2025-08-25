import Footer from "@/components/Footer"
import { render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"

describe('Footer Component', () => {
    test('should render links to socials and branding', () => {
        render(<Footer />);
        const currentDate = new Date();
        const year = currentDate.getFullYear();

        const footerParagraph = screen.getByTestId("footer-paragraph");
        expect(footerParagraph.innerHTML).toContain(`© ${year} Armando "Butch" García. Lecciones Prácticas de Guitarra. Todos los derechos reservados`);
        expect(screen.getByRole("link", { name: /Facebook/i })).toBeDefined();
        expect(screen.getByRole("link", { name: /Instagram/i })).toBeDefined();
        expect(screen.getByRole("link", { name: /YouTube/i })).toBeDefined();
    });
});