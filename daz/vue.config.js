module.exports={
    devServer:{
        proxy:{
            '/api':{
                target:'https://m.dianping.com/index',
                changeOrigin:true//代理服务
                // https://m.dianping.com/index/api/module
                // https://www.easy-mock.com/mock/5d4041a0d3d96f3926d5d9f2/example/guoji
            }

        }
    }
}