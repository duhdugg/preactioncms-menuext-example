# Preaction CMS Menu Extension Example

This is an example menu extension for [Preaction CMS](https://github.com/duhdugg/preaction-cms).

## Installing in Preaction CMS (compile from source)

### clone this repo into your `cms/src/ext` directory

```bash
cd /path/to/preactioncms/src/ext
git clone https://github.com/duhdugg/preactioncms-menuext-example menuext-example
```

### build the extension

```bash
cd /path/to/preactioncms/src/ext/menuext-example
yarn
yarn build
rm -r node_modules # IMPORTANT to not skip this cleanup step
```

### register the extension (and its settings) in `cms/src/ext/index.js`

```javascript
import React from 'react'
import loadable from '@loadable/component'
import { Spinner } from '@preaction/bootstrap-clips'
import { example } from './menuext-example/dist/preactioncms-menuext-example.esm.js'
const blockExtensions = {}
const menuExtensions = { example }
export { blockExtensions, menuExtensions }
```

### rebuild CMS client

```bash
cd /path/to/preactioncms
yarn build
```
