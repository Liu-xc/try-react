# 笔记
## 如何在react脚手架搭建的项目中使用typescript
1. 安装类型定义包（@types/react 、 @types/react-dom）
### 如何在使用TS的基础上开启路径别名
2. 打开react项目的配置目录
  ```
  npm run eject
  // 这个过程是不可逆的
  ```
3. 安装typescript
  ```
  npm i typescript -g
  ```
4. 在项目根目录下创建tsconfig.json
  ```
  tsc --init
  // 至此准备工作已完成，开始配置
  ```
5. 在webpack.config.js中的resolve字段下配置alias字段和extensions字段
  ```
  extensions: paths.moduleFileExtensions
    .map(ext => `.${ext}`)
    .filter(ext => useTypeScript || !ext.includes('ts'))
    .concat(['tsx', 'ts']), // 这里把tsx和ts文件加入该规则
  alias: {
    '@': path.resolve(__dirname, 'src'),
  }
  // 此时对于js文件来说已经可以使用别名了，但ts、tsx文件中还不行，需要对上面创建的TS配置文件进行配置
  ```
6. 配置tsconfig.json
  ```
  // 配置如下几项
  "jsx": "react",
  "baseUrl": ".",
  "paths": {
    // 这里要和webpack中的配置对应起来
    "@/*": ["src/*"],
  }, 
  ```

## 如何在react中使用less
https://www.cnblogs.com/liangziaha/p/13632623.html
1. 安装less，less-loader
```
安装过程中会出现警告说webpack版本过低，会导致下文中的问题
```
2. 配置webpack
  增加less文件和模块的匹配规则
    ```
    const lessRegex = /\.less$/;
    const lessModuleRegex = /\.module\.less$/;
    ```
    增加rules中的oneOf字段（在CSSloader后，file Loader前）
    ```
    {
      test: lessRegex,
      exclude: lessModuleRegex,
      use: getStyleLoaders(
        {
          importLoaders: 2,
          sourceMap: isEnvProduction && shouldUseSourceMap,
        },
        'less-loader'
      ),
      // Don't consider CSS imports dead code even if the
      // containing package claims to have no side effects.
      // Remove this when webpack adds a warning or an error for this.
      // See https://github.com/webpack/webpack/issues/6571
      sideEffects: true,
    },
    // Adds support for CSS Modules, but using SASS
    // using the extension .module.scss or .module.sass
    {
      test: lessModuleRegex,
      use: getStyleLoaders(
        {
          importLoaders: 2,
          sourceMap: isEnvProduction && shouldUseSourceMap,
          modules: true,
          getLocalIdent: getCSSModuleLocalIdent,
        },
        'less-loader'
      ),
    },
    ```

### 引用less编译报错
```
TypeError: this.getOptions is not a function
// 原因：less-loader版本过高，装低版本的less-loader就行
cnpm un less-loader
cnpm i less-loader@5.0.0 -S
```

## 引入antd
```
// 安装antd
cnpm i antd -S
// 在入口文件App.js中引入antd样式
import 'antd/dist/antd.min.css';
// 按需引用组件库
import { Button } from 'antd';
```

## 在TSX中引入图片资源报错
在根目录下创建images.d.ts文件定义图片模块即可

## 绑定了onClick回调点击还是没有效果
**自己定义的组件不是真实的dom，不是最后页面上会渲染的真实元素，所以绑定点击事件是没有用的，要把点击事件绑定到真实的dom元素上**

## 如何开启antd的按需加载
```
You are using a whole package of antd, please use https://www.npmjs.com/package/babel-plugin-import to reduce app bundle size.
```
顺着这个提示信息去到babel-plugin-import的npm主页，根据提示安装：
```
cnpm install babel-plugin-import --save-dev
// 然后在webpack的babel-loader配置项中进行配置
// 添加plugins即可
[
  "import",
  {
    "libraryName": "antd",
    "style": ["css", "less"]
  }
],
```