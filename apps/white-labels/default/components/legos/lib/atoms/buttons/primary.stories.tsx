import type { Meta, StoryObj } from '@storybook/react'

import { ButtonPrimary } from './primary'

const meta: Meta<typeof ButtonPrimary> = {
  component: ButtonPrimary,
  title: 'Atoms/Buttons/Primary',
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    href: {
      control: {
        type: 'href',
      },
    },
    loading: {
      control: {
        type: 'boolean',
      },
    },
    fontSize: {
      control: {
        type: 'radio',
        options: [
          'text-sm sm:text-base font-medium',
          'text-base sm:text-lg font-semibold',
          'text-lg sm:text-xl font-semibold',
        ],
      },
    },
    onClick: {
      action: 'clicked',
    },
  },
}
export default meta
type Story = StoryObj<typeof ButtonPrimary>

export const Primary = {
  args: {},
}
