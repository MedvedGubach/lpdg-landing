import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import Contact from '@/components/Contact';
describe('Contact Component', () => {
    test('should ', () => {
        render(<Contact />);
        const button = screen.getByRole('button', { name: /Contactar por WhatsApp/i });
        const contactLink = screen.getByRole('link')
        const contact = contactLink.getAttribute("href");
        expect(button).toBeDefined();
        expect(contact).contain('https://wa.me/523310882137?text=Hola%20Butch!%20Quiero%20tomar%20clases%20de%20guitarra');
    });
});