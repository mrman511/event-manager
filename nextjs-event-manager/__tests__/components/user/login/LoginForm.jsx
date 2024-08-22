import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import LoginForm from '@/components/user/login/LoginForm';

const loginInputs = ['email', 'password'];

jest.mock("next/navigation", () => ({
  useRouter(){
    return { 
      prefetch: () => null
    };
  }
}));

describe("Page", () => {
  it('renders a form', ()=>{
    const { container }= render(<LoginForm formData={{ token: null }}/>);
    const formElement = container.querySelector('form');
    expect(formElement).not.toBeNull();
  });
  it('renders an inupt with the type submit', ()=>{
    const { container }= render(<LoginForm formData={{ token: null }}/>);
    const submit = container.querySelector('input[type="submit"]');
    expect(submit).not.toBeNull();
  });
  for (let inputName of loginInputs){
    it(`renders an input with the name ${inputName}`, ()=>{
      const { container } = render(<LoginForm formData={{ token: null }}/>);
      const input = container.querySelector(`input[name=${inputName}]`);
      expect(input).not.toBeNull();
    });
  };
})