import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const GridContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  gap: 1rem;
  grid-template-rows: auto 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-columns: auto auto auto auto;

  grid-template-areas:
    "head head head head"
    "input1 input2 input3 input3"
    "input4 input5 input6 input6"
    "input7 input7 input7 input7"
    "input8 input9 input9 input9"
    "input10 input11 input11 input11"
    "input12 input12 input12 input12"
    "input13 input14 input14 input14"
    "input15 input15 input15 input15"
    "input16 input16 input16 input16"
    "link link link link"
    "footer footer footer footer";

  @media (max-width: 480px) {
    grid-template-areas:
      "head"
      "input1"
      "input2"
      "input3"
      "input4"
      "input5"
      "input6"
      "input7"
      "input8"
      "input9"
      "input10"
      "input11"
      "input12"
      "input13"
      "input14"
      "input15"
      "input16"
      "link"
      "footer";

    grid-template-rows: auto 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-columns: auto;
  }
`;

const Head = styled.div`
  grid-area: head;
`;

const Title = styled.p`
  font-weight: 500;
  font-family: "Ubuntu Mono", monospace;
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  color: #4f4f4f;
  margin: 0;
`;

const Code = styled.p`
  color: #828282;
  font-family: "Noto Sans JP", sans-serif;
  font-weight: normal;
  font-size: 12px;
  margin: 0;
  margin-bottom: 1rem;
  margin-top: 2rem;
`;

const ContainerInput1 = styled.div`
  grid-area: input1;
`;

const ContainerInput2 = styled.div`
  grid-area: input2;
  min-width: 20rem;
`;

const ContainerInput3 = styled.div`
  grid-area: input3;
`;

const ContainerInput4 = styled.div`
  grid-area: input4;
`;

const ContainerInput5 = styled.div`
  grid-area: input5;
`;

const ContainerInput6 = styled.div`
  grid-area: input6;
`;

const ContainerInput7 = styled.div`
  grid-area: input7;
`;

const ContainerInput8 = styled.div`
  grid-area: input8;
  min-width: 20rem;
`;

const ContainerInput9 = styled.div`
  grid-area: input9;
`;

const ContainerInput10 = styled.div`
  grid-area: input10;
`;

const ContainerInput11 = styled.div`
  grid-area: input11;
`;

const ContainerInput12 = styled.div`
  grid-area: input12;
`;

const ContainerInput13 = styled.div`
  grid-area: input13;
`;

const ContainerInput14 = styled.div`
  grid-area: input14;
`;

const ContainerInput15 = styled.div`
  grid-area: input15;
`;

const ContainerInput16 = styled.div`
  grid-area: input16;
`;

const Footer = styled.div`
  grid-area: footer;
  color: #a9a9a9;
  font-family: "Noto Sans JP", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
`;

const Link = styled.a`
  grid-area: link;
  color: #a9a9a9;
  font-family: "Noto Sans JP", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  margin-top: 4rem;
`;

export {
  Container,
  Head,
  Title,
  ContainerInput1,
  ContainerInput2,
  ContainerInput3,
  ContainerInput4,
  ContainerInput5,
  ContainerInput6,
  ContainerInput7,
  ContainerInput8,
  ContainerInput9,
  ContainerInput10,
  ContainerInput11,
  ContainerInput12,
  ContainerInput13,
  ContainerInput14,
  ContainerInput15,
  ContainerInput16,
  Footer,
  Link,
  GridContainer,
  Code,
};
