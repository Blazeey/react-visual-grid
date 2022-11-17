<p align="center">
  <a href="" rel="noopener">
 <!-- <img width=200px height=200px src="https://i.imgur.com/FxL5qM0.jpg" alt="Bot logo"></a> -->
</p>

<h3 align="center">react-visual-grid</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> ⚡ The Powerful Visual grid / Gallery generator you always wanted
    <br> 
</p>

- [⚡ Features <a name = "about"></a>](#-features-)
- [🎥 Demo <a name = "demo"></a>](#-demo-)
- [💭 How it works <a name = "working"></a>](#-how-it-works-)
- [⚙️ Installation <a name = "installation"></a>](#️-installation-)
- [🍵 Usage <a name = "usage"></a>](#-usage-)
- [🍫 Props <a name = "props"></a>](#-props-)
- [🍵 Example 1 (Horizontal) <a name = "horizontal"></a>](#-example-1-horizontal-)
- [🍵 Example 2 (Vertical) <a name = "vertical"></a>](#-example-2-vertical-)
- [ImageProps](#imageprops)
- [Default ImageSize](#default-imagesize)
- [⛏️ Built Using <a name = "built_using"></a>](#️-built-using-)
- [✍️ Authors <a name = "authors"></a>](#️-authors-)

## ⚡ Features <a name = "about"></a>

- Generate image grids quickly and easily. Just provide a list of image URLs, and the gallery will be generated for you.
- Built-in smart virtualization for improved performance.
- Load thousands of images without worrying about performance.
- UI controls for adjusting image sizes on the flyImage sizes can be changed from 1x to 3x, and the sizes are completely customizable.
- Render images horizontally or vertically in a grid.
- Created with typescript
- Easy-to-understand API and a completely configurable React component.

## 🎥 Demo <a name = "demo"></a>

![demo](demo.png)

## 💭 How it works <a name = "working"></a>

`react-visual-grid` works with the absolute minimum of properties to determine the optimal method to render images. All that is required is to specify the picture sizes desired, and the component will automatically determine the optimum approach to render the images.

Because virtualization is built in, you won't have to worry about performance.

The component handles loading 5k+ photos with ease in the example. Both horizontal and vertical virtualization are supported.

## ⚙️ Installation <a name = "installation"></a>

You can install `react-visual-grid` using npm or yarn.

```bash
  npm install react-visual-grid
```

```bash
  yarn add react-visual-grid
```

## 🍵 Usage <a name = "usage"></a>

Grids can be generated in two modes: Horizontal and Vertical. The default mode is `vertical`

```js
import { Gallery } from "react-visual-grid";

// generate random images using lorem picsum service
const images = Array.from({ length: 50 }, (_, i) => ({
  src: `https://picsum.photos/id/${Math.round(Math.random() * 110)}/800/600`,
  alt: `Image ${i + 1}`,
}));

const App = () => {
  return <Gallery images={images} mode="auto" width={1800} height={1200} />;
};
```

## 🍫 Props <a name = "props"></a>

| Name       | Description                                                                               | Type                      | Default                       |
| :--------- | :---------------------------------------------------------------------------------------- | :------------------------ | :---------------------------- |
| gridLayout | Direction to render the images. can be `horizontal` or `vertical`                         | string                    | `vertical`                    |
| images     | Collection of Images to be rendered                                                       | [ImageProps](#imageprops) | []                            |
| width      | Width of the Grid                                                                         | number                    | 1200                          |
| height     | Height of the Grid                                                                        | number                    | 600                           |
| gap        | Gap in pixels between the images                                                          | number                    | 20                            |
| mode       | Configures the rendering mode. set mode to `manual` to render the columns / rows manually | string                    | `auto`                        |
| imageSizes | Configures the zoom sizes of the Images                                                   | Object                    | [default](#default-imagesize) |

## 🍵 Example 1 (Horizontal) <a name = "horizontal"></a>

```js
import { Gallery } from "react-visual-grid";

const App = () => {
  return (
    <Gallery
      images={images}
      gridLayout="horizontal"
      width={1800}
      height={1200}
    />
  );
};
```

## 🍵 Example 2 (Vertical) <a name = "vertical"></a>

```js
import { Gallery } from "react-visual-grid";

const App = () => {
  return (
    <Gallery images={images} gridLayout="vertical" width={1800} height={1200} />
  );
};
```

## ImageProps

| Name    | Description                      | Type     | Default |
| :------ | :------------------------------- | :------- | :------ |
| src     | URL of the image                 | string   |         |
| alt     | Alt text for the image           | string   |         |
| width   | Width of the image               | number   | 100     |
| height  | Height of the image              | number   | 100     |
| id      | Unique of the image              | string   |         |
| onClick | callback to be executed on click | Function |         |

## Default ImageSize

```js
export const defaultImageSizes = {
  "1X": {
    width: 120,
    height: 100,
  },
  "2X": {
    width: 200,
    height: 180,
  },
  "3X": {
    width: 320,
    height: 280,
  },
};
```

## ⛏️ Built Using <a name = "built_using"></a>

- [typescript](https://www.typescriptlang.org/)
- [react](https://reactjs.org/)
- [classNames](https://jedwatson.github.io/classnames/)
- [nanoid](https://github.com/ai/nanoid)

## ✍️ Authors <a name = "authors"></a>

- [@prabhuignoto](https://github.com/prabhuignoto) - Idea & Initial work
