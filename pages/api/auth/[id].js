const pool = require('../db');

export default async function handler(req, res) {
    const { id } = req.query;
    if (req.method === 'DELETE') {
        try {
            const user = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
            if (user.rows.length === 0) {
                return res.status(404).json({ success: false, message: 'User not found' });
            }
            await pool.query('DELETE FROM users WHERE id = $1', [id]);
            res.status(200).json({ success: true, message: 'User deleted successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: 'Internal server error' });
        }
    } else if (req.method === 'GET') {
        const { id } = req.query;
        let user;
        try {
            user = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
            if (user.rows.length === 0) {
                return res.status(404).json({ success: false, message: 'User not found' });
            } else {
                return res.status(200).json({ success: true, user: user.rows[0] });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: 'Internal server error' });
        }
    } else {
        res.status(405).json({ success: false, message: 'Method Not Allowed' });
    }
}
