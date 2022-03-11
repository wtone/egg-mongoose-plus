'use strict';

/**
  * mongoose default config
  * http://mongoosejs.com/docs/api.html#index_Mongoose-createConnection
  * @member Config#mongoose
  * @property {String} url - connect url
  * @property {Object} options - options to pass to the driver and mongoose-specific
  */
exports.mongoose = {
  url: '',
  options: {},
  plugins: [],
  model: {
    loadModel: true, //是否自动加载模型文件

    //当需要与sequelize同时使用时，必须修改下方两项配置，否则会与sequelize不兼容,而报错
    name: "mongoModel", //加载的模型文件挂载到app对象的属性名，默认是model，如果想与sequelize同时使用，最好单独定义一个名字（sequelize默认挂载app属性名就是model）
    path: "app/mongodb" //模型文件路径，相对于项目跟目录的路径，默认是app/model,如果想与sequelize同时使用，最好单独定义一个路径（sequelize默认模型路径就是app/model）
  },
  app: true,
  agent: false,
};
