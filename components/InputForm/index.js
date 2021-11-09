import { Form, LabelContainer, Input, LabelImage } from './InputForm.styles';

const InputForm = ({ label, name, type, placeholder }) => {
  return (
    <Form>
      <LabelContainer htmlFor={name}>
        <label>{label}</label>
        <LabelImage src="/circle-info-solid.svg" />
      </LabelContainer>
      <Input type={type} name={name} placeholder={placeholder}></Input>
    </Form>
  );
};

export default InputForm;
