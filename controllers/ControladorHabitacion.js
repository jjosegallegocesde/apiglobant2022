//Importamos el servicio HABITACION 
//NOTA: UN CONTROLADOR PUEDE LLAMAR A VARIOS SERVICIOS
import {ServicioHabitacion} from '../services/ServicioHabitacion.js'

//CONTROLADOR TIENE LA LOGICA
//DEL NEGOCIO
export class ControladorHabitacion{

    constructor(){}

    insertar(request,response){ 
        let datosPeticion=request.body //Recibo datos BODY
        response.status(200).json({
            mensaje:"exito en el ingreso de datos",
            datosIngresados:datosPeticion,
            estado:true
        })

    }

    async buscarTodos(request,response){

        //Instancio la clase servicio
        //PARA PODERLA UTILIZAR
        let servicio=new ServicioHabitacion()
        try{
            response.status(200).json({
                mensaje:"exito buscando la información",
                datos: await servicio.buscarTodos(),
                estado:true
            })
        }catch(error){
            response.status(400).json({
                mensaje:"fallamos buscando la información",
                datos: [],
                estado:false
            })
        }
    }

    async buscarPorId(request,response){
        let servicio=new ServicioHabitacion()
        let id=request.params.id //El id que llega por la URL

        try{
            response.status(200).json({
                mensaje:"exito buscando habitación por id",
                datos:await servicio.buscarPorId(id),
                estado:true
            })
        }catch(error){
            response.status(400).json({
                mensaje:"fallamos buscando habitación por id",
                datos:[],
                estado:false
            })
        }     
    }

    editar(request,response){
        let id=request.params.id //El id que llega por la URL
        let datosPeticion=request.body //Recibo datos BODY
        response.status(200).json({
            mensaje:"exito editando habitación por id",
            datos:"Datos del id: "+id,
            estado:true
        })
    }

    eliminar(request,response){
        let id=request.params.id //El id que llega por la URL
        response.status(200).json({
            mensaje:"exito eliminando habitación por id",
            datos:"Datos del id: "+id,
            estado:true
        })

    }

}