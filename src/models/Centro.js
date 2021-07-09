import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const Centro = sequelize.define('centro_vacunacions',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    center_name:{
        type: Sequelize.TEXT
    },
    center_adress:{
        type: Sequelize.TEXT
    },
    center_phone:{
        type: Sequelize.INTEGER
    },
    center_area:{
        type: Sequelize.TEXT
    },
    center_timetable:{
        type: Sequelize.TEXT
    },
    latitud:{
        type: Sequelize.TEXT
    },
    longitud:{
        type: Sequelize.TEXT
    },
    imagen:{
        type: Sequelize.STRING.BINARY
    }
}, {
    timestamps: false
});

export default Centro;