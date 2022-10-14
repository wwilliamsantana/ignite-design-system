import { Meta, StoryObj } from "@storybook/react"
import { Checkbox, CheckboxProps } from "./Checkbox"
import { Text } from "./Text"

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  args: {},
  decorators: [
    (Story) => {
      return (
        <div className="items-center flex gap-2">
          {Story()}
          <Text size="sm">Lembrar-me de mim por 30 dias</Text>
        </div>
      )
    }
  ]
} as Meta<CheckboxProps>



export const Default: StoryObj<CheckboxProps> = {}

