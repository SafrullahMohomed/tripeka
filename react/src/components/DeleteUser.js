import Swal from 'sweetalert2'

const DeleteUser = () => {

    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })

    return ( 
        <div>
            Default to Go back Button <br />
            Sure? <br />
            Y - Delete n History.Back <br />
            N - History.Back
        </div>
        
     );
}
 
export default DeleteUser;