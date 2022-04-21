//CONTROLADOR TIENE LA LOGICA
//DEL NEGOCIO
export class ControladorHabitacion{

    constructor(){}

    insertar(request,response){
        //Recibir los datos de la peticion
        let datosPeticion=request.body

        //Conectar con BD

        //Ejecuto la consulta (INSERTE)

        //Envio la repsuesta
        response.status(200).json({
            mensaje:"exito en el ingreso de datos",
            datosIngresados:datosPeticion,
            estado:true
        })

    }

    buscarTodos(){}

    buscarPorId(){}

    editar(){}

    eliminar(){}

}