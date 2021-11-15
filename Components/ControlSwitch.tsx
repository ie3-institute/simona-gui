import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Switch } from "@chakra-ui/react";
import React from "react";

type ControlSwitchProps = {
  label: string
  id: string
}

  const ControlSwitch = ({label, id}: ControlSwitchProps): JSX.Element => {
    return (
    <FormControl display="flex" alignItems="center" justifyContent="space-between">
      <FormLabel htmlFor="create-config" mb="0" fontSize="lg">
        {label}
      </FormLabel>
      <Switch id="create-config" colorScheme="primary"/>
    </FormControl>
    )
}

export default ControlSwitch;