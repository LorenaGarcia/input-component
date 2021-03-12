import React from "react";
import Input from "../Input";
import {
  Container,
  GridContainer,
  Head,
  Title,
  Code,
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
  Link,
  Footer,
} from "./MainContent.styles";

const Main = () => {
  return (
    <Container>
      <GridContainer>
        <Head>
          <Title>Inputs</Title>
        </Head>
        <ContainerInput1>
          <Code>{"<Input />"}</Code>
          <div>
            <Input label="Label" placeholder="Placeholder" />
          </div>
        </ContainerInput1>
        <ContainerInput2>
          <Code>{"&:hover"}</Code>
          <div>
            <Input label="Label" border={"#333333"} placeholder="Placeholder" />
          </div>
        </ContainerInput2>
        <ContainerInput3>
          <Code>{"&:focus"}</Code>
          <div>
            <Input label="Label" border={"#2962FF"} placeholder="Placeholder" />
          </div>
        </ContainerInput3>

        <ContainerInput4>
          <Code>{"<Input error />"}</Code>
          <div>
            <Input error={true} label="Label" placeholder="Placeholder" />
          </div>
        </ContainerInput4>
        <ContainerInput5>
          <Code>{"&:hover"}</Code>
          <div>
            <Input hoverError={true} label="Label" placeholder="Placeholder" />
          </div>
        </ContainerInput5>
        <ContainerInput6>
          <Code>{"&:focus"}</Code>
          <div>
            <Input error={true} label="Label" placeholder="Placeholder" />
          </div>
        </ContainerInput6>

        <ContainerInput7>
          <Code>{"<Input disabled />"}</Code>
          <div>
            <Input label="Label" placeholder="Placeholder" disabled />
          </div>
        </ContainerInput7>

        <ContainerInput8>
          <Code>{"<Input helperText=”Some interesting text” />"}</Code>
          <div>
            <Input
              label="Label"
              helperText={"Some interesting text"}
              placeholder="Placeholder"
            />
          </div>
        </ContainerInput8>
        <ContainerInput9>
          <Code>{"<Input helperText=”Some interesting text” error />"}</Code>
          <div>
            <Input
              error={true}
              helperText={"Some interesting text"}
              label="Label"
              placeholder="Placeholder"
            />
          </div>
        </ContainerInput9>

        <ContainerInput10>
          <Code>{"<Input startIcon />"}</Code>
          <div>
            <Input label="Label" placeholder="Placeholder" icon={"call"} />
          </div>
        </ContainerInput10>
        <ContainerInput11>
          <Code>{"<ContainerInput endIcon=”local_grocery_store” />"}</Code>
          <div>
            <Input
              label="Label"
              placeholder="Placeholder"
              icon={"lock"}
              iconRight={true}
            />
          </div>
        </ContainerInput11>

        <ContainerInput12>
          <Code>{"<Input value=”text” />"}</Code>
          <div>
            <Input label="Label" placeholder="Placeholder" value="Text" />
          </div>
        </ContainerInput12>
        <ContainerInput13>
          <Code>{"<Input size=”sm” />"}</Code>
          <div>
            <Input size="sm" label="Label" placeholder="Placeholder" />
          </div>
        </ContainerInput13>
        <ContainerInput14>
          <Code>{"<Input size=”md” />"}</Code>
          <div>
            <Input size="md" label="Label" placeholder="Placeholder" />
          </div>
        </ContainerInput14>

        <ContainerInput15>
          <Code>{"<Input fullWidth />"}</Code>
          <div>
            <Input fullWidth={true} label="Label" placeholder="Placeholder" />
          </div>
        </ContainerInput15>
        <ContainerInput16>
          <Code>{"<Input multiline row=”4” />"}</Code>
          <div>
            <Input
              multiline={true}
              rows="4"
              label="Label"
              placeholder="Placeholder"
            />
          </div>
        </ContainerInput16>

        <Link href="https://material.io/resources/icons/?style=round">
          Icons: https://material.io/resources/icons/?style=round
        </Link>

        <Footer>
          created by <strong>Lorraine</strong> - devChallenges.io
        </Footer>
      </GridContainer>
    </Container>
  );
};

export default Main;
