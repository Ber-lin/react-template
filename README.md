# React + TypeScript + Vite+ Lint

这是一个模板项目，添加了各种企业级lint规则，保证多人协作下的规范。

配置有

## 注意📢📢📢

-   可视化commit中，引用的「cz-customizable」包需要修改一下，作者读取配置的路径默认值是".cz-config.js"，但本项目是CJS规范，需要再node_modules/cz-customizable/index.js line:15添加一个path参数".cz-config.cjs"，保证读取到配置。
