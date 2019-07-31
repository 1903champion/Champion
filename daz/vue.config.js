
module.exports = {
    devServer:{
        proxy:{          
            
            // 解决跨域问题
            '/ajax':{
                target:"https://m.dianping.com/",
                changeOrigin:true    
            }, 
          
        },

    }
}

