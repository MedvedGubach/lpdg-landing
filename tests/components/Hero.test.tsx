import { describe, expect, test } from "vitest"
import { render, screen } from "@testing-library/react";

import Hero from "@/components/Hero";


describe('Hero component', () => {
    test('should render Hero and children correctly', () => {
        render(<Hero />)
        const video = screen.getByTestId("intro-video");
        const src = video.getAttribute("src");
        expect(screen.getByRole('heading', { level: 1, name: 'Lecciones Prácticas de Guitarra - Butch García' })).toBeDefined();
        expect(src).toContain("cloudinary.com");
    })
});

