const express = require('express')
const app = express()
const bodyParser = require('body-parser')
    // 处理静态资源
app.use(express.static('public'))
app.use(express.static('js'))
    // 处理参数
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// 设置允许跨域访问该服务
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Headers', 'mytoken');
    next();
});

app.get('/data', (req, res) => {
    res.send('hello vue');
});

app.get('/data1', (req, res) => {
    res.send('hello data1');
});

app.get('/data2', (req, res) => {
    res.send('hello data2');
});



app.get('/a1', (req, res) => {
    setTimeout(function() {
        res.send('hello a')
    }, 500)
});
app.get('/a2', (req, res) => {
    setTimeout(function() {
        res.send('hello b')
    }, 1000)
});
app.get('/a3', (req, res) => {
    setTimeout(function() {
        res.send('hello c')
    }, 1500)
});


app.get('/fdata', (req, res) => {
    res.send('hello fetch')
});


//fetch
app.get('/fetcha', (req, res) => {
    res.send('传统的url传递参数' + req.query.id)
});

app.get('/fetchb/:id', (req, res) => {
    res.send('restful传递参数' + req.params.id)
});

app.delete('/fetchc/:id', (req, res) => {
    res.send('restful传递delete请求参数' + req.params.id)
});

app.post('/book', (req, res) => {
    res.send('post请求传递参数' + req.body.name + '----' + req.body.pwd)
});

app.put('/book/:id', (req, res) => {
    res.send('put请求传递参数' + req.body.name + '----' + req.body.pwd + '---' + req.params.id)
});

app.get('/json', (req, res) => {
    res.json({
        name: 'zhangsan',
        age: 23,
        pwd: '12345678'

    })
});


//axios
app.get('/adata', (req, res) => {
    res.send('hello');
});

app.get('/axios', (req, res) => {
    res.send('axiso get 传递参数' + req.query.id);
});

app.get('/axiosrest/:id', (req, res) => {
    res.send('axios get(restful)传递参数' + req.params.id);
});

app.get('/axiosparams', (req, res) => {
    res.send('axios get (params)传递参数' + req.query.id);
});


app.delete('/axios', (req, res) => {
    res.send('axios delete 传递参数' + req.query.id)
});

app.post('/axiospost', (req, res) => {
    res.send('axios post传递参数' + req.body.id + '----' + req.body.uname)
});

app.put('/axiosput/:id', (req, res) => {
    res.send('axios put传递参数' + '---' + req.params.id + '------' + req.body.age + '---' + req.body.uname)
});

app.get('/axios-json', (req, res) => {
    res.json({
        uname: 'yy',
        age: 23,
        id: 1234
    })

});

app.get('/axios-interceptors', (req, res) => {
    res.send('拦截器');
});


app.get('/async1', (req, res) => {
    res.send('hello');
});
app.get('/async2', (req, res) => {
    if (req.query.info == 'hello') {
        res.send('word');
    } else {
        res.send('error')
    }
});




app.listen(3000, () => {
    console.log('服务器启动成功')
})