import Navbar from '@/components/Navbar';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

describe('Navbar component', () => {
    test('should show brand logo and main links to socials', () => {
        render(<Navbar />);
        expect(screen.getByAltText('LPDG-Logo')).toBeDefined();
        expect(screen.getByRole("link", { name: /Facebook/i })).toBeDefined();
        expect(screen.getByRole("link", { name: /Instagram/i })).toBeDefined();
        expect(screen.getByRole("link", { name: /YouTube/i })).toBeDefined();

    });
});