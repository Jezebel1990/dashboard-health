$(function(){
    $("#food-form").submit(function (event) {
     event.preventDefault()
    }).validate({
      rules: {
          frut: {
              required: true,
          },
          qtFrut: {
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