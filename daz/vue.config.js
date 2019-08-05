
module.exports = {
    devServer:{
        proxy:{          
            
            // 解决跨域问题
            // '/':{
            //     target:"https://m.dianping.com/",
            //     changeOrigin:true,
            //     ws:false,    
            // }, 
            '/':{
                target:"http://m.elong.com/",
                changeOrigin:true,
                ws:false,    
            }, 
           
            
          
        },

    }
}

