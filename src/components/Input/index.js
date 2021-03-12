import React from "react";
import {
  Input,
  Multiline,
  InputIcon,
  Icon,
  Label,
  HelperText,
  ContainerInput,
} from "./Input.styles";

const InputComponent = ({
  label,
  border,
  helperText,
  hover,
  shadow,
  icon,
  iconRight,
  size,
  error,
  fullWidth,
  hoverError,
  multiline,
  ...otherProps
}) => {
  let padding =
    size && size === "sm"
      ? "0.6rem"
      : size === "md"
      ? "1rem"
      : size === "lg"
      ? "1.6rem"
      : "1rem";

  let errorColor = error && !hoverError ? "#D32F2F" : "#828282";

  return (
    <div>
      {icon ? (
        <>
          <Label error={error}>{label}</Label>
          <ContainerInput>
            <Icon iconRight={iconRight}>
              <span class="material-icons">{icon}</span>
            </Icon>
            <InputIcon
              iconRight={iconRight}
              placeholder={otherProps.placeholder}
              type={otherProps.type}
              border={
                errorColor && !border && !otherProps.disabled
                  ? errorColor
                  : border && !otherProps.disabled
                  ? border
                  : otherProps.disabled
                  ? "#E0E0E0"
                  : "#828282"
              }
              hover={errorColor ? errorColor : hover}
              shadow={shadow}
              error={error}
              fullWidth={fullWidth}
              size={padding}
              {...otherProps}
            />
            {helperText && <HelperText error={error}>{helperText}</HelperText>}
          </ContainerInput>
        </>
      ) : multiline ? (
        <>
          <Label error={error}>{label}</Label>
          <Multiline
            placeholder={otherProps.placeholder}
            type={otherProps.type}
            border={
              errorColor && !border && !otherProps.disabled
                ? errorColor
                : border && !otherProps.disabled
                ? border
                : otherProps.disabled
                ? "#E0E0E0"
                : "#828282"
            }
            hover={errorColor ? errorColor : hover}
            shadow={shadow}
            error={error}
            size={padding}
            fullWidth={fullWidth}
            {...otherProps}
          />
          {helperText && <HelperText error={error}>{helperText}</HelperText>}
        </>
      ) : (
        <>
          <Label error={error}>{label}</Label>
          <Input
            placeholder={otherProps.placeholder}
            type={otherProps.type}
            border={
              errorColor && !border && !otherProps.disabled
                ? errorColor
                : border && !otherProps.disabled
                ? border
                : otherProps.disabled
                ? "#E0E0E0"
                : "#828282"
            }
            hover={errorColor ? errorColor : hover}
            shadow={shadow}
            error={error}
            size={padding}
            fullWidth={fullWidth}
            {...otherProps}
          />
          {helperText && <HelperText error={error}>{helperText}</HelperText>}
        </>
      )}
    </div>
  );
};

export default InputComponent;
