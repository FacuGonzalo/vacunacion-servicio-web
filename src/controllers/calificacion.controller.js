import Calificacion from "../models/Calificacion";


export async function createCalificacion(req, res){
    const newCalificacion = await Calificacion.create(req.body);
    res.json({message: "Calificacion creada con exito"});
}

export async function getCalificaciones(req, res){
    const calificaciones = await Calificacion.findAll();
    res.json({
        data: calificaciones
    });
}

export async function getOneCalificacion(req, res){
    const { id } = req.params;

    const calificacion = await Calificacion.findOne({
        where: {
            id: id
        }
    });
    res.json(calificacion);
}

export async function getCalificacionByCentro(req, res){
    const { center_id } = req.params;
    
    const calificaciones = await Calificacion.findAll({
        where: {
            center_id: center_id
        }
    });
    res.json(calificaciones);
}