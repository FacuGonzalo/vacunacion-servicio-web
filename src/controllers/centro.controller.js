import Centro from '../models/Centro';

require('dotenv').config()

export async function getCentros(req, res){
    try{
        const centros = await Centro.findAll();
        centros.map(
            centro => {
                centro.imagen = process.env.URL_IMG + centro.id + '/imagen';
            }
        )
    res.json({
        data: centros
    });
    } catch (error){
        console.log(error);
    }
}

export async function getOneCentro(req, res){
    const { id } = req.params;

    const centro = await Centro.findOne({
        where: {
            id: id
        }
    });
        centro.imagen = process.env.URL_IMG + centro.id + '/imagen';
    res.json(centro);
}

export async function getImagen(req, res){
    const { id } = req.params;

    const centro = await Centro.findOne({
        attributes: ['imagen'],
        where: {
            id: id
        }
    });
    const base64String = centro.imagen.toString();
            const imagen = Buffer.from(base64String, 'base64');
            res.writeHead(200, { "Content-type": "image/png" });
            res.end(imagen);
}

