import express from "express"
import process from "process";
import http from "http";
import cors from "cors"

const port = process.env.PORT || 8000

//invoke express
const app = express();

app.use(
    cors({
        origin: '*',
        credentials: true,
    })
);

//------------------------------------
//create server
let server = http.createServer(app);

app.get('/user/test',
    function (
        req:express.Request,
        res:express.Response,
        next:express.NextFunction
    ) {

        res.status(200).send('UserModel Service test method invoked 🎉🎉')

    })


//------------------------------------
server.on('error', (err) => {
    console.error('Server error:', err);
});

server.listen(port, () => {
    console.log(`Server running on ${port}`);
})