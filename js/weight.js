$(function(){
  $("#weight-form").submit(function (event) {
   event.preventDefault()
  }).validate({
    rules: {
        weight: {
            required: true,
            number: true
        },
        height: {
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