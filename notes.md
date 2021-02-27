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
