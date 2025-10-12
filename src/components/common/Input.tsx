import * as React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { Visibility, VisibilityOff } from "@mui/icons-material";

// Extend allowed props for form compatibility and controlled usage
interface InputProps {
  label: string;
  type?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  ...rest
}) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const isPasswordField = type === "password";
  const inputType = isPasswordField && showPassword ? "text" : type;

  return (
    <TextField
      fullWidth
      label={label}
      variant="standard"
      type={inputType}
      name={name}
      value={value}
      onChange={onChange}
      InputProps={{
        endAdornment: isPasswordField ? (
          <InputAdornment position="end">
            <IconButton
              aria-label={showPassword ? "hide password" : "show password"}
              onClick={() => setShowPassword((prev) => !prev)}
              onMouseDown={(e) => e.preventDefault()}
              edge="end"
              sx={{
                color: "var(--primary)",
                "&:hover": { backgroundColor: "rgba(0,0,0,.04)" },
              }}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ) : undefined,
      }}
      sx={{
        "& .MuiInput-underline:before": {
          borderBottomColor: "var(--border-default)",
        },
        "& .MuiInput-underline:after": { borderBottomColor: "var(--primary)" },
        "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
          borderBottomColor: "var(--primary)",
        },
        "& .MuiInputLabel-root": { color: "var(--text-secondary)" },
        "& .MuiInputLabel-root.Mui-focused": { color: "var(--primary)" },
        "& .MuiInputBase-input": { color: "var(--text-primary)" },
      }}
      {...rest}
    />
  );
};

export default Input;
