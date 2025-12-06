import express from "express";
import path from "path";
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export class Server {
    port;
    app;

    constructor() {
        this.port=process.env.API_PORT;
        this.app= express()
        this.middlewares()
        this.routes()
    }

    middlewares = () => {
        this.app.use(express.static(path.join(__dirname, '../public')))
    }

    routes = () => {
        this.app.get('/hola', (req, res) => {
            res.send('A Heracles le gustan las gorditas')
        })
    }

    listen = () => { 
        this.app.listen(this.port, () => { 
            console.log(`Server running at http://localhost:${this.port} `); 
        })    
    }
}