import styled from "styled-components";

const Input = styled.input`
  width: ${(props) => (props.fullWidth ? "100%" : "200px")};
  display: flex;
  margin-top: 1rem;
  align-items: center;
  justify-content: center;
  padding: ${(props) => props.size && props.size};
  color: "#3F3F3F";
  border: ${(props) =>
    props.border ? `1px solid ${props.border}` : "1px solid #828282"};
  border-radius: 6px;

  font-family: "Noto Sans JP";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #333333;

  :hover:not([disabled]) {
    border: ${(props) =>
      props.hover ? `1px solid ${props.hover}` : "1px solid #333333"};
  }

  :focus-visible {
    outline: none;
    ${(props) => (props.error ? `1px solid #D32F2F` : "1px solid #2962ff")};
  }

  :focus {
    outline: none;
    ${(props) => (props.error ? `1px solid #D32F2F` : "1px solid #2962ff")};
  }
`;

const Multiline = styled.textarea`
  width: ${(props) => (props.fullWidth ? "100%" : "200px")};
  display: flex;
  margin-top: 1rem;
  align-items: center;
  justify-content: center;
  padding: ${(props) => props.size && props.size};
  color: "#3F3F3F";
  border: ${(props) =>
    props.border ? `1px solid ${props.border}` : "1px solid #828282"};
  border-radius: 6px;
  resize: none;

  font-family: "Noto Sans JP";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #333333;

  :hover:not([disabled]) {
    border: ${(props) =>
      props.hover ? `1px solid ${props.hover}` : "1px solid #333333"};
  }

  :focus-visible {
    outline: none;
    ${(props) => (props.error ? `1px solid #D32F2F` : "1px solid #2962ff")};
  }

  :focus {
    outline: none;
    ${(props) => (props.error ? `1px solid #D32F2F` : "1px solid #2962ff")};
  }
`;

const InputIcon = styled.input`
  width: 200px;
  justify-content: center;
  margin-top: 1rem;
  display: flex;
  flex-direction: "row";
  align-items: center;
  padding: ${(props) => props.size && props.size};
  border: ${(props) =>
    props.border ? `1px solid ${props.border}` : "1px solid #828282"};
  border-radius: 6px;
  padding-left: ${(props) => !props.iconRight && "50px"};
  padding-right: ${(props) => props.iconRight && "50px"};

  font-family: "Noto Sans JP";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #333333;

  :hover:not([disabled]) {
    border: ${(props) =>
      props.hover ? `1px solid ${props.hover}` : "1px solid #aeaeae"};
  }

  :focus-visible {
    outline: none;
    ${(props) => (props.error ? `1px solid #D32F2F` : "1px solid #2962ff")};
  }

  :focus {
    outline: none;
    ${(props) => (props.error ? `1px solid #D32F2F` : "1px solid #2962ff")};
  }
`;

const ContainerInput = styled.div`
  position: relative;
`;

const Label = styled.label`
  font-family: "Noto Sans JP", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 17px;
  color: ${(props) => (props.error ? "#D32F2F" : "#333333")};
`;

const HelperText = styled.p`
  font-family: "Noto Sans JP", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 14px;
  color: #828282;
  color: ${(props) => (props.error ? "#D32F2F" : "#828282")};
`;

const Icon = styled.div`
  left: ${(props) => !props.iconRight && "0px"};
  right: ${(props) => props.iconRight && "0px"};
  position: absolute;
  padding: 15px;
  width: ${(props) => props.iconRight && "56%"};
  color: #828282;
`;

export { Input, InputIcon, Multiline, Label, HelperText, ContainerInput, Icon };
