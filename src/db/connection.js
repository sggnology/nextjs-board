import mysql2 from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const db = mysql2.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

db.connect((error) =>{
    if(error){
        throw error;
    }

    console.log('데이터베이스 연결이 정상적으로 이루어졌습니다.');
});

const query = (queryString, params) => {
    return new Promise((resolve, reject) => {
        db.query(queryString, params, (error, results, fields) => {
            if(error){
                reject(error);
            }
    
            resolve(results);
        });
    });
}

export default query;