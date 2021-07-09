import Sequelize, { DataTypes } from 'sequelize';
import { sequelize } from '../database/database';

const Calificacion = sequelize.define('calificacions',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    center_id:{
        type: Sequelize.INTEGER
    },
    calification_date:{
        type: Sequelize.DATE
    },
    post_by:{
        type: Sequelize.STRING
    },
    stars:{
        type: Sequelize.INTEGER
    },
    waiting:{
        type: Sequelize.INTEGER
    },
    comment:{
        type: Sequelize.TEXT
    }
}, {
    timestamps: false
});

export default Calificacion;