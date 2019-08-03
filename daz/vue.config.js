
module.exports = {
    devServer:{
        proxy:{          
            
            // 解决跨域问题
            '/':{
                target:"https://m.dianping.com/",
                changeOrigin:true,
                ws:false   
            }, 
            '/api':{
                target:'https://m.dianping.com/index',
                changeOrigin:true//代理服务
                // https://m.dianping.com/index/api/module
                // https://www.easy-mock.com/mock/5d4041a0d3d96f3926d5d9f2/example/guoji
            }

        },

    }
}


