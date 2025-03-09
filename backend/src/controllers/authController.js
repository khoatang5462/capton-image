export const authController = {
    register: async (req, res) => {
        try {
            const { email, mat_khau, ho_ten } = req.body; // Sửa 'emai' thành 'email'
            console.log("du lieu", { email, mat_khau, ho_ten });

            res.status(200).json('register');  // Trả về phản hồi
        } catch (error) {
            console.log(error);  // In lỗi ra console
            res.status(500).json(`Error: ${error}`);  // Trả về lỗi
        }
    }
};