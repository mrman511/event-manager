import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Page from '@/app/user/login/page';

describe("Page", () => {
  it('renders a form', ()=>{
    render(<Page />);
    const form = screen.getByRole('form');

    expect(form).toBeInDocument();
  });
})