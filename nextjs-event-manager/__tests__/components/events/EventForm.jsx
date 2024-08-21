import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import EventForm from '@/components/events/EventForm';

const eventInputs = ['title', 'address', 'start', 'end', 'tag_line', 'postscript']

describe("Page", () => {
  it('renders a form', ()=>{
    const { container }= render(<EventForm />);
    const formElement = container.querySelector('form');
    expect(formElement).not.toBeNull();
  });
  it('renders an inupt with the type submit', ()=>{
    const { container }= render(<EventForm />);
    const submit = container.querySelector('input[type="submit"]');
    expect(submit).not.toBeNull();
  });
  for (let inputName of eventInputs){
    it(`renders an input with the name ${inputName}`, ()=>{
      const { container } = render(<EventForm />);
      const input = container.querySelector(`input[name=${inputName}]`);
      expect(input).not.toBeNull();
    });
  };
  it('renders an textarea with the name description', ()=>{
    const { container } = render(<EventForm />);
    const description = container.querySelector('textarea[name=description]');
    expect(description).not.toBeNull();
  });
})