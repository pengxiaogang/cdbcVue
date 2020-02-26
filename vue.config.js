module.exports= {
    devServer: {
        open: false,
        host: "localhost",
        port: '8080',
        https: false,
        hotOnly: false,
        proxy: {
            '/backend': {
                target: 'http://localhost:8081',
                ws: true,
                changeOrigin: true,
                pathRewrite: {'^/backend': ''}
            }
        }
    }
};

