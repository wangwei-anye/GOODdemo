## 开发框架

react + redux-toolkit + hooks + typescript

## 注意项

1、yarn 必须降级到 1.10.0 才能安装 streetscape.gl

2、webpack 里需要定义
'process.env.NODE_DEBUG': false
不然 util/util.js 会报错找不到 'process.env.NODE_DEBUG'

3、
npm 安装 buffer
index.js 写入以下代码
window.global = window;
global.Buffer = global.Buffer || require('buffer').Buffer;

不然@xviz/io/dist/esm/common/loaders.js 里的 Buffer 未定义

4、使用 wasm 调用 c++库
webpack 配置
new CopyWebpackPlugin({
patterns: [
{ from: 'public/libjsesmini.wasm', to: 'libjsesmini.wasm' },
{ from: 'public/e6mini.xodr', to: 'e6mini.xodr' }
]
})

5、地图的容器要设置 position: relative; 地图超出部分才隐藏

6、后端提供的 json 数据需要经过 nodejs 服务解析为 xviz 数据流，才能给 streetscape.gl 使用
