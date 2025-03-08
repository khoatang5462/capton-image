import express from "express";
import { connect } from "./db.js";
import { rootRouters } from "./src/routes/rootRouters.js";

const app = express()

const port = 3000
app.listen(port, ()=>{
    console.log('Running port 3000')
})

app.use(express.json())

app.use(rootRouters)

// =======
app.get('/get-users', async (req, res) => {
    try {
        // Thực hiện truy vấn SQL để lấy tất cả người dùng
        const [data] = await connect.query(`
            SELECT * FROM nguoi_dung
        `);

        // Trả về kết quả dưới dạng JSON
        res.status(200).json({
            message: "Lấy danh sách người dùng thành công",
            data: data,
        });
    } catch (error) {
        console.error(error);

        // Trả về thông báo lỗi nếu có lỗi xảy ra
        res.status(500).json({
            message: "Lỗi khi lấy danh sách người dùng",
            error: error.message,
        });
    }
});