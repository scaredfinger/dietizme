import { Options } from '@storybook/core-webpack'
import type { StorybookConfig } from '@storybook/nextjs'
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'

import { rootMain } from '../../../../.storybook/main'

const config: StorybookConfig = {
  framework: '@storybook/nextjs',
  // ...rootMain,

  stories: [
    ...rootMain.stories,
    '../**/*.stories.mdx',
    '../**/*.stories.@(js|jsx|ts|tsx)',
  ],

  addons: [
    '@storybook/addon-essentials',
    ...(rootMain.addons || []),
    // '@storybook/preset-scss',
  ],

  webpackFinal: async (config, { configType }: Options) => {
    // apply any global webpack configs that might have been specified in .storybook/main.ts
    if (rootMain.webpackFinal) {
      config = await rootMain.webpackFinal(config, { configType } as Options)
    }

    // add your own webpack tweaks if needed

    config.resolve = config.resolve || {}
    config.resolve.plugins = [new TsconfigPathsPlugin()];

    return config
  },

  docs: {
    autodocs: true, 
  },
}

module.exports = config
