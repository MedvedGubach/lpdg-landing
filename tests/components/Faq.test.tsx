import { describe, expect, test } from "vitest"
import { render, screen } from "@testing-library/react";
import Faq from "@/components/Faq";

describe('Faq component', () => {
    test('should render frequently asked questions correctly', () => {
        render(<Faq />);
        expect(screen.getByText(/¿Necesito tener experiencia previa con la guitarra?/i)).toBeDefined();
        expect(screen.getByText(/¿Qué necesito para tomar clases en línea?/i)).toBeDefined();
        expect(screen.getByText(/¿Cuánto duran las clases?/i)).toBeDefined();
        expect(screen.getByText(/¿Puedo elegir las canciones que quiero aprender?/i)).toBeDefined();
    });
});