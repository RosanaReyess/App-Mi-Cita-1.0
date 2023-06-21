const Cita = require("../models/Cita")



exports.crearCita = async (req, res) => {
   
    try {
        let cita;
        //creamos la cita
        cita = new Cita(req.body)

        await cita.save();
        res.send(cita)

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }

}
exports.obtenerCitas = async (req, res) =>{
    try {
        const citas = await Cita.find();
        res.json(citas)
        
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}
exports.actualizarCita = async (req, res) =>{
    try {
        const{nombre, numeroTelefono, fechaCita, identificacion} = req.body;
        let cita = await Cita.findById(req.params.id);

        if(!cita){
            res.status(404).json({msg: 'No existe esa cita registrada'})
        }

        cita.nombre = nombre
        cita.numeroTelefono = numeroTelefono;
        cita.fechaCita = fechaCita;
        cita.identificacion = identificacion;

        cita = await Cita.findOneAndUpdate({_id:req.params.id}, cita, {new: true});
        res.json(cita);


    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}
exports.obtenerCita = async (req, res) => {
    try {
        let cita = await Cita.findById(req.params.id);

        if(!cita){
            res.status(404).json({msg: 'No existe esa cita registrada'})
        }

        res.json(cita);
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}
exports.eliminarCita = async (req, res) => {

    try {
        let cita = await Cita.findById(req.params.id);

        if(!cita){
            res.status(404).json({msg: 'No existe esa cita registrada'})
        }
        await Cita.findOneAndDelete({_id:req.params.id})
        res.json({msg: 'CITA ELIMINADA'});
        
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}