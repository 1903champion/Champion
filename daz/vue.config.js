module.exports = {
    devServer:{
        proxy:{          
            
            // 解决跨域问题
            '/index':{
                target:"https://m.dianping.com/index",
                changeOrigin:true    
            }, 
          
        },

    }
}