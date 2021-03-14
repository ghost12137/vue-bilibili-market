module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport": {
      unitToConvert: "px", //需要转换的单位，默认为"px"
      viewportWidth: 375, // 视口宽度  对应设计稿
      viewportHeight: 667, // 视口高度 对应设计稿（也可以不配置)
      unitPrecision: 5, // 指定‘px’转换为视窗单位值的最小小数位数（很多时候无法整除）
      propList: [ //能转化为vw的属性列表
        "*"
      ],
      viewportUnit: "vw", // 希望使用的视口单位
      fontViewportUnit: "vw", //字体使用的视口单位
      selectorBlackList: ['ignore'], // 指定不需要转换的类
      minPixelValue: 1, // 小于或等于1px不转换为视窗单位
      MediaQuery: false, // 允许媒体查询分钟转换px
      replace: true, //是否直接更换属性值，而不添加备用属性
      exclude: [/(\/|\\)(node_modules)(\/|\\)/, ], //忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
    }
  }
}
