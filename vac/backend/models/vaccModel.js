import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Vacc = db.define('vacc_dets',{
    cen_name:{
        type: DataTypes.STRING
    },
    cust_name:{
        type: DataTypes.STRING
    },
    vacc_date:{
        type: DataTypes.DATEONLY
    }
},{
    freezeTableName: true
});

export default Vacc;