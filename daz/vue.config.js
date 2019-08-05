
module.exports = {
    devServer:{
        proxy:{
            // 解决跨域问题

            // '/':{
            //     target:"https://m.dianping.com/",
            //     changeOrigin:true,
            //     ws:false,    
            // }, 
//             '/':{
//                 target:"http://m.elong.com/",
//                 changeOrigin:true,
//                 ws:false,    
//             }, 
           
            
          

            '/':{
                target:"https://m.dianping.com",
                changeOrigin:true,
                ws:false   
                // target:"https://m.dianping.com/",
                // changeOrigin:true ,
                // ws:false ,
                // secure: false,  // 如果是https接口，需要配置这个参数
                // changeOrigin: true,  //是否跨域 
                //  https://m.dianping.com/index/api/...

            }, 
            // '/api':{
            //     target:'https://m.dianping.com/index',
            //     changeOrigin:true,
            //     ws:false,
            //     secure: false,  // 如果是https接口，需要配置这个参数
            //     changeOrigin: true,  //是否跨域
    // https://m.dianping.com/index/api/...http://shangcheng.bjcshy.com/lvpai/portal
            // },
            '/api':{
                target:'http://shangcheng.bjcshy.com/lvpai/portal',
                changeOrigin:true,
                // ws:false,
                // secure: false,  // 如果是https接口，需要配置这个参数
                // changeOrigin: true,  //是否跨域
            }


        },

    }
}


