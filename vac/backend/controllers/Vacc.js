import Vacc from "../models/vaccModel.js";

export const getAllDets = async (req, res) => {
    try {
        const dets = await Vacc.findAll();
        res.json(dets);
    } catch (error) {
        res.json({ message: error.message });
    }  
}

export const getDetsByCentre = async (req, res) => {
    try {
        const vacc = await Vacc.findAll({
            where: {
                cen_name: req.params.cen_name
            }
        });
        res.json(vacc[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}

export const createVacc = async (req, res) => {
    try {
        await Vacc.create(req.body);
        res.json({
            "message": "Booking Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}

export const deleteCentre = async (req, res) => {
    try {
        await Vacc.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Centre Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}