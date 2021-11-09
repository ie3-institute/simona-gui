import styled from 'styled-components';

export const Form = styled.form`
  width: var(--maxWidth);
  display: flex;
  flex-direction: column;
`;

export const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  .label {
    font-size: var(--fontMedium);
  }
  padding-bottom: 20px;
`;

export const LabelImage = styled.img`
  width: 28px;
  margin-left: 20px;
`;

export const Input = styled.input`
  font-family: JetBrains Mono;
  font-size: var(--fontMediumSmall);
  font-weight: 300;
  padding-left: 20px;
  letter-spacing: 1.2px;
  height: 48px;
  border-radius: 10px;
  border: none;
  color: var(--darkGrey);

  :focus {
    outline: none !important;
    box-shadow: 0 0 3px var(--lightGrey);
  }

  ::placeholder {
    color: var(--lighterGrey);
  }
`;
