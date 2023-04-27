# mdm-simple-modal

> react component of a modal to display text

[![NPM](https://img.shields.io/npm/v/simple-modal.svg)](https://www.npmjs.com/package/simple-modal) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save mdm-simple-modal
```

## Usage

```jsx
import React, { Component } from 'react'

import {SimpleModal, openModal} from 'mdm-simple-modal'
import 'mdm-simple-modal/dist/index.css'

class Example extends Component {
  render() {
    return <SimpleModal text='Hello World !'  />
  }
}
```

## Options

### Add options

```jsx
import React, { Component } from 'react'

import {SimpleModal, openModal} from 'mdm-simple-modal'
import 'mdm-simple-modal/dist/index.css'

class Example extends Component {
  render() {
    return <SimpleModal text='Hello World !' image='./dog.jpg' options={{bgColor:'red',width:'100%',height:'70%', imgUrl:dsn}}/>
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
|height          |String   |70%    |
|imgUrl          |String   |       |
|zindex          |String   |   10  |

## License

MIT © [melaniemdm](https://github.com/melaniemdm)
