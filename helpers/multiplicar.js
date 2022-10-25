const fs = require('fs');
const color = require('colors');


const crearArchivo = async (base = 1, listar = false, hasta = 10) =>{
   
    try {
        
       
        let salida, consola = '';
        for (let index = 1; index <= hasta; index++) {
            salida += `${base} x ${index} = ${base*index}\n`
            consola += `${base} ${'x'.yellow} ${index} = ${base*index}\n`
        }

        if(listar){
            console.log('=========================='.rainbow)
            console.log(`======= tabla del ${base} ======`.blue)
            console.log('=========================='.rainbow)
            console.log(salida);
        }
        
      
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida) 
        return`tabala del ${base} creada`;
        
    } catch (error) {
        throw error;
    }
}

const funcion2 = () =>{
    console.log('Hola mundo')
}


module.exports = {
    crearArchivo,
    funcion2
}