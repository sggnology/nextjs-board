import query from "@/db/connection";
import {formatDate} from "@/util/date-util";


export default async function handler(req, res) {

    if(req.method === "GET"){
        const carData = await query(
            `
            select * from board
            where type = 'car'
            `
        );

        res.status(200).json(carData);
    }
    else if(req.method === "POST"){

        const reqNewBoard = req.body;

        await query(`
            insert into board(type, content, regDt) 
            VALUES (?, ?, ?);
        `, ['car', reqNewBoard.content, formatDate({dt: new Date(), f: "yyyy-MM-dd HH:mm:ss"})]);

        res.status(200).json({result: 'success'});

        console.log(req.body);
    }

}