const models = require('../database/models');
const createSerie = async (req,res)=>{
    try{
        const serie = await models.series.create(req.body);
        return res.status(201).json({
            serie
        });
    }catch (error){
        return res.status(500).json({
            error:error.message
        });
    }
};

const getAllseries = async (req, res)=>{
    console.log('Obteniendo series');
    try{
        const series = await models.series.findAll({
           include:[]
        });
        return res.status(200).json({series});
    } catch (error){
        return res.status(500).send(error.message);
    }
};
module.exports = {
    createSerie,
    getAllseries
};
