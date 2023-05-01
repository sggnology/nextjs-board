import query from "@/db/connection";

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

}