const express = require("express");
const bcrypt = require("bcrypt");
const db = require("../config/db");
const router = express.Router();

router.post("/signup", async (req, res) => {

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({
            message: "All fields are required"
        });
    }

    try {

        // Password ko hash karna
        const hashedPassword = await bcrypt.hash(password, 10);

        const sql = `
            INSERT INTO users (name, email, password)
            VALUES (?, ?, ?)
        `;

        db.query(
            sql,
            [name, email, hashedPassword],
            (err, result) => {

                if (err) {

                    if (err.code === "ER_DUP_ENTRY") {
                        return res.status(409).json({
                            message: "Email already registered"
                        });
                    }

                    return res.status(500).json({
                        message: "Database error"
                    });
                }

                res.status(201).json({
                    message: "Account created successfully",
                    userId: result.insertId
                });
            }
        );

    } catch (error) {

        res.status(500).json({
            message: "Server error"
        });

    }
});


/*login wale ke liye */

router.post("/login", (req, res) => {

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            message: "Email and password are required"
        });
    }

    const sql = `
        SELECT * FROM users
        WHERE email = ?
    `;

    db.query(sql, [email], async (err, results) => {

        if (err) {
            return res.status(500).json({
                message: "Database error"
            });
        }

        if (results.length === 0) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        const user = results[0];

        const passwordMatch = await bcrypt.compare(
            password,
            user.password
        );

        if (!passwordMatch) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        res.status(200).json({
            message: "Login successful",
            user: {
                id: user.id,
                name: user.name,
                email: user.email
            }
        });
    });
});


router.post("/forgot-password", (req, res) => {

    const { email } = req.body;

    if (!email) {
        return res.status(400).json({
            message: "Email is required"
        });
    }

    const sql = `
        SELECT id, name, email
        FROM users
        WHERE email = ?
    `;

    db.query(sql, [email], (err, results) => {

        if (err) {
            return res.status(500).json({
                message: "Database error"
            });
        }

        if (results.length === 0) {
            return res.status(404).json({
                message: "No account found with this email"
            });
        }

        res.status(200).json({
            message: "Email verified successfully"
        });
    });
});



router.post("/reset-password", async (req, res) => {

    const { email, newPassword } = req.body;

    if (!email || !newPassword) {
        return res.status(400).json({
            message: "Email and new password are required"
        });
    }

    try {

        // New password ko hash karna
        const hashedPassword = await bcrypt.hash(newPassword, 10);

        const sql = `
            UPDATE users
            SET password = ?
            WHERE email = ?
        `;

        db.query(
            sql,
            [hashedPassword, email],
            (err, result) => {

                if (err) {
                    return res.status(500).json({
                        message: "Database error"
                    });
                }

                if (result.affectedRows === 0) {
                    return res.status(404).json({
                        message: "User not found"
                    });
                }

                res.status(200).json({
                    message: "Password reset successfully"
                });
            }
        );

    } catch (error) {

        res.status(500).json({
            message: "Server error"
        });

    }
});

module.exports = router;