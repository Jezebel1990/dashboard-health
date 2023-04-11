$(function(){

$('#duration').mask("00:00")
$('#data').mask("00/00/0000")


    $("#activitie-form").submit(function (event) {
     event.preventDefault()
    }).validate({
      rules: {
          name: {
              required: true
          },
          
          duration: {
              required: true
            },
            data: {
                required: true
          }
      },
      submitHandler: function (form) {
          Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Registro realizado com sucesso!',
              showConfirmButton: false,
              timer: 1500
            }).then(() => {
                $('#name').val('')
                $('#duration').val('')
                $('#data').val('')
            }
            )
      }
    })
  } )