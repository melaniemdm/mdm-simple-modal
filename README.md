# mdm-simple-modal

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/simple-modal.svg)](https://www.npmjs.com/package/simple-modal) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save mdm-simple-modal
```

## Usage

```jsx
import React, { Component } from 'react'

import SimpleModal from 'mdm-simple-modal'
import 'mdm-simple-modal/dist/index.css'

class Example extends Component {
  render() {
    return <SimpleModal text='Hello World !'/>
  }
}
```

## Options

### Add options

```jsx
import React, { Component } from 'react'

import SimpleModal from 'mdm-simple-modal'
import 'mdm-simple-modal/dist/index.css'

class Example extends Component {
  render() {
    return <SimpleModal text='Hello World !' options={{bgColor:'yellowgreen'}}/>
  }
}
```

### Available options

|option          |type     |default|
|---             |---      |---    |
|bgColor         |String   |White  |
|height          |String   |50px   |
|width           |String   |500px  |
|maskBgColor     |String   |gray   |
|maskBgOpacity   |String   |1      |

## License

MIT © [melaniemdm](https://github.com/melaniemdm)
