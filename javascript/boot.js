function message(){
 
    Swal.fire({
        title: 'Do you want to save the changes or not?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Done',
        denyButtonText: `End`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Saved!', '', 'success')
        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
        }
      })
      
}