$(function(){
    $("#pressure-form").submit(function (event) {
     event.preventDefault()
    }).validate({
      rules: {
          pressurePas: {
              required: true,
              number: true
          },
          pressurePad: {
              required: true,
              number: true
          }
      },
      submitHandler: function (form) {
          Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Registro realizado com sucesso!',
              showConfirmButton: false,
              timer: 1500
            })
      }
    })
  } )