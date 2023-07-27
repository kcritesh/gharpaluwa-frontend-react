import { Theme } from "@mui/material/styles";
import CheckBox from "./Checkbox.overrides";
import Textfield from "./TextField.overrides";
import FormControl from "./FormControl.overrides";
import Button from "./Button.overrides";

export default function ComponentsOverrides(theme: Theme) {
    return Object.assign(
        CheckBox(theme),
        Textfield(theme),
        FormControl(theme),
        Button(theme),
    )
}
