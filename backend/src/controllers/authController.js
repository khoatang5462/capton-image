

import { connect } from "../models/connect.js";
import initModels from "../models/init-models.js";

const models = initModels(connect)

export const authController = {
    register: async (req, res) => {
        try {
            const { email, ho_ten, mat_khau } = req.body
            const userExist = await models.nguoi_dung.findOne({
                where: {
                    email: email,
                }
            });
            // check tài khoảng
            if (userExist) {
                res.status(400).json({ message: "Tài khoảng đã tồn tại, vui lòng đăng nhập" })
            }
            // mã hoá pass

            //craet user
            const result = await models.nguoi_dung.create({
                email: email,
                ho_ten: ho_ten,
                mat_khau: mat_khau
            })
            console.log(result)

            console.log("value: ", { email, ho_ten, mat_khau })
            res.status(200).json("Register");

        } catch (error) {
            console.log(error);
            res.status(500).json({ error: `${error}` });
        }
    },
};