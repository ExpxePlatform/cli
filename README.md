# @expxe/cli

#### Install

```
npm i @exepxe/cli -g
```

## Create a new project powered by expxe-cli

```
expxe create <project-name>
```

### options

-p, --preset
Skip prompts and use saved or remote preset

-d, --default
Skip prompts and use default preset

-i, --inlinePreset
Skip prompts and use inline JSON string as preset

## Generate a project from a remote template

```
expxe init <template> <project-name>
```

### options

-p, --preset
Skip prompts and use saved or remote preset

-d, --default
Skip prompts and use default preset

-i, --inlinePreset
Skip prompts and use inline JSON string as preset

## Generate vue component or icon font from svg files

```
expxe icon <svg> <dist>
```

### options

-c, --componet
generate vue components

-f, --font
generate icon font

-a, --add
add new icon
