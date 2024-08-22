import '@testing-library/jest-dom';
import MockUseSearchParam from '@/utils/testHelpers/jest/MockUseSearchParam';
import { render, screen } from '@testing-library/react';
import PasswordForm from '@/components/User/PasswordForm';


jest.mock("next/navigation", () => ({
  useSearchParams:() => (new MockUseSearchParam({token: 'token', user: 'user'})),
}));

const passwordInputs = ['password', 'confirm_password'];

describe("PasswordForm Component", () => {
  it('renders a form', ()=>{
    const { container }= render(<PasswordForm />);
    const formElement = container.querySelector('form');
    expect(formElement).not.toBeNull();
  });
  it('renders an inupt with the type submit', ()=>{
    const { container }= render(<PasswordForm />);
    const submit = container.querySelector('input[type="submit"]');
    expect(submit).not.toBeNull();
  });
  for (let inputName of passwordInputs){
    it(`renders an input with the name ${inputName}`, ()=>{
      const { container } = render(<PasswordForm />);
      const input = container.querySelector(`input[name=${inputName}]`);
      expect(input).not.toBeNull();
    });
  };
});