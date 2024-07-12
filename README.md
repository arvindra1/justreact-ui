<p align="center"><img src="https://raw.githubusercontent.com/joon610/justreact-ui/main/logo.svg"></p>

<p align="center">
  <!-- <a href="https://github.com/arvindra1/justreact-ui><img src="https://github.com/joon610/justreact-ui/workflows/React%20Card%20Component%20CI/badge.svg" alt="Build Status"></a>
  <a href="https://github.com/joon610/justreact-ui"><img src="https://cdn.jsdelivr.net/gh/nikku/works-on-my-machine@v0.2.0/badge.svg" alt="myPc"></a>
  <a href="https://github.com/joon610/justreact-ui"><img src="https://img.shields.io/badge/license-MIT-lightgrey.svg" alt="license"></a> -->
</p>

<h1 align="center">justreact-ui</h1>

## Don't Support this package

## License

- MIT License

## Install

```
  npm i justreact-ui
```

## Demo & Examples

[Demo](https://arvindra1.github.io/justreact-ui/)

## `Props`

### glass, glassOption

```js
  import { Card } from 'justreact-ui';

  // default blur:4, transparency:0.2
  const NewCard = () => <Card glass><div>HelloWorld</div></Card>);

  const NewCard = () => <Card glass glassOption={{blur:5,transparency: 0.1}}><div>HelloWorld</div></Card>);
```

### style

```js
  import Card from 'justreact-ui';
  const NewCard = () => <Card style={{"color":"red"}}><div>HelloWorld</div></Card>);
```

### background

```js
  import Card from 'justreact-ui';
  const NewCard = () => <Card background={"red"}><div>HelloWorld</div></Card>);
```

### hoverType

```js
  type hoverMoveType = 'up' | 'left' | `right` | `down` | 'zoom'

  import Card from 'justreact-ui';
  const NewCard = () => <Card hoverType={"zoom"}><div>HelloWorld</div></Card>);
```

### bordered

```js

  import Card from 'justreact-ui';
  const NewCard = () => <Card bordered><div>HelloWorld</div></Card>);
```

### outlined

```js

  import Card from 'justreact-ui';
  const NewCard = () => <Card outlined><div>HelloWorld</div></Card>);
```
# justreact-ui
