# ship-ui

居于React开发的UI组件库，仅供学习使用

## 文档地址
  https://rimingxie.github.io/ship-ui-document/

## 可用脚本

在项目目录中，可以运行:

### `yarn storybook`

运行文档程序.\
open [http://localhost:6006/](http://localhost:6006/) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build-storybook`
打包文档，生成静态页面.\
Builds the app for production to the `storybook-static` folder.\

### `yarn test`

运行测试程序.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

# 项目主要技术栈
  ## sass 预编译器
  ```bash
    npm install sass-loader node-sass --save-dev
  ```
  <p>reboot.scss 基于 normalize.css 修改</p>

# 测试
 <p>jest 测试框架 </p>
 <p>testing-library/react 测试框架</p>
 <p>jest-dom 测试工具</p>

# 图标
  ## 使用 Font Awesome 图标库
  <p>https://github.com/FortAwesome/react-fontawesome</p>
  <p>https://fontawesome.com/icons?d=gallery&s=solid&m=free</p>

  ```bash
    npm i --save @fortawesome/fontawesome-svg-core
    npm i --save @fortawesome/free-solid-svg-icons
    npm i --save @fortawesome/react-fontawesome
  ```
# 动画
  ## 使用 React Transition Group 动画库
  <p>https://reactcommunity.org/react-transition-group/</p>
      npm install react-transition-group --save
      npm install @types/react-transition-group --save

# 文档
  ## 使用 storybook.js 自动生成文档
  <p>https://storybook.js.org/</p>
      npx -p @storybook/cli sb init
  <p>运行文档</p>
      npm run storybook
  <p>打包文档</p>
      npm run build-storybook