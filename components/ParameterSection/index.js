import { Wrapper, Header, Content } from './ParameterSection.styles';

const ParameterSection = ({ header, content }) => {
  return (
    <Wrapper>
      <Header>{header}</Header>
      <Content>{content} </Content>
    </Wrapper>
  );
};

export default ParameterSection;
