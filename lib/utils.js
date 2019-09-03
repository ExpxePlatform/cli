function camelize(str) {
  return str.replace(/-(\w)/g, (_, c) => (c ? c.toUpperCase() : ''))
}

module.exprots.cleanArgs = cmd => {
  const args = {}
  cmd.options.forEach(item => {
    const key = camelize(item.long.replace(/^--/, ''))

    if (!/^(function|undefined)$/.test(typeof cmd[key])) {
      args[key] = cmd[key]
    }
  })
  return args
}
