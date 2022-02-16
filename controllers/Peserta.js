import Mahasiswa from "../models/pesertaModel.js";

export const getAllPeserta = async (req, res) => {
    try {
        const peserta = await Mahasiswa.findAll();
        res.json(peserta);
    } catch (error) {
        res.json({ message: error.message })
    }

}

// finction untuk memanggil single data
export const getPesertaById = async (req, res) => {
    try {
        // const peserta = await Mahasiswa.findAll({
        //     where: {
        //         id : req.params.id
        //     }
        // })
        // res.json(peserta[0])

        const id = req.params.id;
        const peserta = await Mahasiswa.findByPk(id);
        res.json(peserta)
    } catch (error) {
        res.json({message: error.message})
    }
}

export const createPeserta = async (req, res) => {
    try {
        await Mahasiswa.create(req.body);
        res.json({
            "message": "Peserta di tambahkan!"
        });
    } catch (error) {
        res.json({message: error.message})
    }
}

// update peserta

export const updatePeserta =  async (req,res) => {
    try {
        await Mahasiswa.update(req.body, {
            where: {
                id : req.params.id
            }
        });
        res.json({
            "message": "Peserta Updated!"
        })

    } catch (error) {
        res.json({message: error.message})
    }
}

// delete 
export const deletePeserta =  async (req,res) => {
    try {
        await Mahasiswa.destroy({
            where: {
                id : req.params.id
            }
        });
        res.json({
            "message": "Peserta Deleted!"
        })

    } catch (error) {
        res.json({message: error.message})
    }
}