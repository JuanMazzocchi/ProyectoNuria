const btnsConfirm = document.querySelectorAll("#btnBorrar")

if (btnsConfirm.length){
    for(const btn of btnsConfirm){
       btn.addEventListener("click", Event => {
           console.log(Event)
         const resp= confirm("Esta opcion no tiene marcha atras. Confirma?")
           if (!resp) {
               Event.preventDefault()
           }
       }) 
    }
    
}