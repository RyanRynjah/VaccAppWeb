import express from "express";

import { 
    getAllDets,
    createVacc,
    getDetsByCentre,
    deleteCentre
} from "../controllers/Vacc.js";

const router = express.Router();

router.get('/', getAllDets);
router.get('/:id', getDetsByCentre);
router.post('/', createVacc);
router.delete('/:id', deleteCentre);

export default router;