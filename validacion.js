//Haz tú validación en javascript acá
window.addEventListener('load', ()=>{
   const form = document.querySelector('#formulario')
   const nombre = document.getElementById('name')
   const email = document.getElementById('email')
   const asunto = document.getElementById('text')
   const mensaje = document.getElementById('mensaje')
//para evitar el evento que desencadena la pagina cuando apretamos el boton enviar
   form.addEventListener('submit', (e) => {
    e.preventDefault()
    validaCampos()
   })

   const validaCampos = ()=> {
        //capturar los valores ingresados por el usuario
        const nombreValor = nombre.value.trim()
        const emailValor = email.value.trim()
        const asuntoValor = asunto.value.trim()
        const mensajeValor = mensaje.value.trim()

       // console.log(nombreValor, emailValor, asuntoValor, mensajeValor);
         //validando campo nombre
      if(!nombreValor){
            console.log('El campo nombre esta vacio, llenelo porfavor')
            validaFalla(nombre, 'CAMPO NOMBRE VACIO')
      }else{
            validaOk(nombre)
            console.log(nombreValor)
        }

         //validando campo email
      if(!emailValor){
            console.log('El campo email esta vacio, llenelo porfavor')
            validaFalla(email,'CAMPO EMAIL VACIO')
      }else if (!validaEmail(emailValor)){
            validaFalla(email, 'El email no es valido')
      }else{
            validaOk(email)
            console.log(emailValor)
      }

         //validando campo asunto
      if(!asuntoValor){
            console.log('El campo asunto esta vacio, llenelo porfavor')
            validaFalla(asunto,'CAMPO ASUNTO VACIO')
      }/*else if (asuntoValor.length < 5 || asuntoValor.length >= 25){
            validaFalla(asunto, 'debe ingresar entre 5 a 25 caracteres')
      }*/else{
            validaOk(asunto)
            console.log(asuntoValor)
      }

         //validando campo mensaje
      if(!mensajeValor){
            console.log('El campo mensaje esta vacio, llenelo porfavor')
            validaFalla(mensaje,'CAMPO MENSAJE VACIO')
      }/*else if (mensajeValor.length < 25 || mensajeValor.length >= 225){
         validaFalla(mensaje, 'debe ingresar entre 5 a 25 caracteres')
      }*/else{
            validaOk(mensaje)
            console.log(mensajeValor)
      }
   //como realizar lo que esta comentado arriba con "operadores ternarios" y ahorra lineas de codigo
   /*   
   (!nombreValor) ? console.log('El campo nombre esta vacio, llenelo porfavor') : console.log(nombreValor);
   (!emailValor) ? console.log('El campo email esta vacio, llenelo porfavor') : console.log(emailValor);
   (!asuntoValor) ? console.log('El campo asunto esta vacio, llenelo porfavor') : console.log(asuntoValor);
   (!mensajeValor) ? console.log('El campo mensaje esta vacio, llenelo porfavor') : console.log(mensajeValor);*/
   }
   const validaFalla = (input, msje) => {
      const formControl = input.parentElement
      const aviso = formControl.querySelector('.cool')
      aviso.innerText = msje
      formControl.className = 'formcontacto__input falla'
   }
   const validaOk = (input) => {
      const formControl = input.parentElement
      formControl.className = 'formcontacto__input ok'
   }
   const validaEmail = (email) => {
      return /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email);  
   }
})