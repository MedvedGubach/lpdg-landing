import ContactFaqTabs from "@/components/ContactFaqTabs";
import ReviewsTabs from "@/components/ReviewsTabs";
import { render, screen, fireEvent } from "@testing-library/react"
import { describe, expect, test } from "vitest";

describe('Test on review tabs component', () => {
    test('Check if the review tabs are rendered', () => {
        render(<ReviewsTabs />);
        expect(screen.getByRole('button', { name: /Reseñas/i })).toBeDefined();
        expect(screen.getByRole('button', { name: /Testimonios/i })).toBeDefined();
    });

    test('check if changes to review tabs and shows videos', async () => {
        render(<ReviewsTabs />);

        const buttons = screen.getAllByRole('button');
        const tabReviews = buttons.find(btn => btn.textContent?.toLowerCase().includes('testimonios'));
        expect(tabReviews).toBeDefined();

        if (tabReviews) {
            fireEvent.click(tabReviews);
            const heading = await screen.findByRole('heading', { name: /lo que dicen los alumnos/i });
            expect(heading).toBeDefined();
        }
        /* Check if there is at least 3 videos per page */
        const videos = await screen.getAllByTestId('review-videos');
        expect(videos.length).toBeGreaterThanOrEqual(3);
    });
});

describe('test on contact components', () => {
    test('Check if the contact and FAQ tabs are rendered', () => {
        render(<ContactFaqTabs />);
        expect(screen.getByRole('button', { name: /Agenda tu Clase/i })).toBeDefined();
        expect(screen.getByRole('button', { name: /Preguntas Frecuentes/i })).toBeDefined();
    });

    test('check if changes to faq tabs from scheduling class', async () => {
        render(<ContactFaqTabs />);

        const buttons = screen.getAllByRole('button');
        const tabContactFaq = buttons.find(btn => btn.textContent?.toLowerCase().includes('preguntas frecuentes'));
        expect(tabContactFaq).toBeDefined();

        if (tabContactFaq) {
            fireEvent.click(tabContactFaq);
            const button = await screen.findByRole('button', { name: /¿Necesito tener experiencia previa con la guitarra?/i });
            expect(button).toBeDefined();
        }
        /* Check if there is at least 4 questions */
        const accordions = await screen.getAllByRole('button');
        expect(accordions.length).toBeGreaterThanOrEqual(4);
    });
})