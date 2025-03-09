import express from 'express';
import connect from './db.js';
import rootRoutes from './src/routes/rootRoutes.js';


const app = express();

// Sử dụng middleware để phân tích cú pháp JSON
app.use(express.json());

const port = 3000;
app.listen(port, () => {
    console.log(`Be running with port ${port}`);
});

app.use(rootRoutes)

// Route để lấy thông tin người dùng
app.get("/get-users", async (req, res) => {
    try {
        const [data] = await connect.query(`
            SELECT * FROM nguoi_dung
        `);
        return res.send(data); // Trả về dữ liệu dưới dạng JSON

    } catch (error) {
        error.status(500)

    }

});
