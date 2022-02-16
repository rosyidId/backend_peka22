import { Sequelize } from "sequelize";
import db from '../config/database.js';


const { DataTypes } = Sequelize;

const Mahasiswa = db.define('peserta', {
    nama: {
        type: DataTypes.STRING(255)
    },
    alamat:{
        type: DataTypes.STRING(255)
    },
    jurusan: {
        type: DataTypes.STRING(255)
    },
    no_hp: {
        type: DataTypes.BIGINT(12)
    },
    email: {
        type: DataTypes.STRING(255)
    }
}, {
    freezeTableName: true
})

export default Mahasiswa;