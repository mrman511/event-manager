import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import UserForm from '@/components/User/UserForm';

const userInputs = ['first_name', 'last_name', 'email', 'phone_number', 'password', 'confirm_password'];

describe("Page", () => {
  it('renders a form', ()=>{
    const { container }= render(<UserForm />);
    const formElement = container.querySelector('form');
    expect(formElement).not.toBeNull();
  });
  it('renders an inupt with the type submit', ()=>{
    const { container }= render(<UserForm />);
    const submit = container.querySelector('input[type="submit"]');
    expect(submit).not.toBeNull();
  });
  for (let inputName of userInputs){
    it(`renders an input with the name ${inputName}`, ()=>{
      const { container } = render(<UserForm />);
      const input = container.querySelector(`input[name=${inputName}]`);
      expect(input).not.toBeNull();
    });
  };
})