module.exports={
    devServer:{
        proxy:{
            '/api':{//意思说“/api"代表下面的：http...
                target:'https://m.dianping.com/index',
                changeOrigin:true//代理服务
                // https://m.dianping.com/index/api/module
            }

        }
    }
}