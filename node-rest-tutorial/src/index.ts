import express from 'express';

const app = express();

//express에는 json 데이터를 파싱하는 모듈이 내장되어있다.
//하지만 json만 되고 x-www-form-urlencoded를 파싱하기 위해서 아래를 확장해야 한다.
app.use(express.urlencoded({
    extended: true
}))

//모든 http 메서드를 허용하는 use메서드
app.use('/hello', (req,res)=>{
    res.send('Hello test');
})

//GET만 허용하는 get 메서드
app.get('/hello2', (req,res)=>{
    res.send('Hello test');
})

//GET 메서드 + query parameter로 데이터 전송
app.get('/hello3', (req, res)=>{
    const {name} = req.query;
    res.send(`Hello ${name}`);
})

//GET 메서드 + uri parameter로 데이터 전송
app.get('/hello32/:name',(req,res)=>{
    const {name} = req.params;
    res.send(`Hello ${name}`);
})

//POST 메서드 + query parameter로 데이터 전송
app.post('/hello33', (req,res)=>{
    const {name} = req.query;
    res.send(`Hello ${name}`);
})

//POST 메서드, x-www-form-urlencoded 방식
app.post('/hello4', (req, res) => {
    const {name} = req.body;
    res.send(`Hello ${name}`);
})

app.listen(8080, ()=>{
    console.log('server is listening 8080');
})