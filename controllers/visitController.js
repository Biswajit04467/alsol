const Visit = require("../models/visit");

const postVisit = async (req, res) => {
    try {
        const { ipAddress, browserInfo } = req.body;
        const visit = await Visit.create({ ipAddress, browserInfo })

        res.status(200).json({
            success: true,
            message: 'Visit logged successfully',
            visit
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error
        })
    }
}

const getData = async (req, res) => {
    try {

        const visits = await Visit.find();


        res.status(200).json({
            count: visits.length,
            visits,
        });
    } catch (error) {
        console.error("Error in getData:", error);
        res.status(500).json({
            success: false,
            message: "Server error",
            error,
        });
    }
};


module.exports = { postVisit, getData };