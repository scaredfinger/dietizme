import Handlebars from 'handlebars';
import { glob } from 'glob'
import fs from 'node:fs/promises'
import path from 'node:path'

const templatesPaths = await glob('./src/**/*.hbr')

templatesPaths.map(async templatePath => {
  const templateContent = await fs.readFile(templatePath)
  const precompiledTemplate = Handlebars.precompile(templateContent.toString())
  const compiledContentExports = `
  /* eslint-disable no-var */
  /* eslint-disable @typescript-eslint/no-unused-vars */
  import Handlebars from 'handlebars/runtime';
  export const template = Handlebars.template(${precompiledTemplate});\n`

  const parsedPath = path.parse(templatePath)
  parsedPath.dir
  const output = path.join(parsedPath.dir, `${parsedPath.name}.ts`)

  await fs.writeFile(output, compiledContentExports)
})
