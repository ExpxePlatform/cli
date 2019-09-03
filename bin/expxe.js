#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const program = require('commander')
const { cleanArgs } = require('../lib/utils')
const create = require('../lib/create')
const init = require('../lib/init')
const init = require('../lib/icon')

program.version(require('../package').version).usage('<command> [options]')

program
  .command('create <project-name>')
  .description('create a new project powered by expxe-cli')
  .option(
    '-p, --preset <presetName>',
    'Skip prompts and use saved or remote preset'
  )
  .option('-d, --default', 'Skip prompts and use default preset')
  .option(
    '-i, --inlinePreset <json>',
    'Skip prompts and use inline JSON string as preset'
  )
  .action((name, cmd) => {
    create(name, cleanArgs(cmd))
  })

program
  .command('init <template> <poject-name>')
  .description('generate a project from a remote template')
  .option(
    '-p, --preset <presetName>',
    'Skip prompts and use saved or remote preset'
  )
  .option('-d, --default', 'Skip prompts and use default preset')
  .option(
    '-i, --inlinePreset <json>',
    'Skip prompts and use inline JSON string as preset'
  )
  .action((template, name, cmd) => {
    init(template, name, cleanArgs(cmd))
  })

program
  .command('icon <svg> <dist>')
  .description('generate vue component or icon font from svg files')
  .option('-c, --componet', 'generate vue components')
  .option('-f, --font [fontName]', 'generate  icon font')
  .option('-a, --add', 'add new icon')
  .action((svg, dist, cmd) => {
    icon(svg, dist, cleanArgs(cmd))
  })
