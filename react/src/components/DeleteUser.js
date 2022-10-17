import { removeFriend } from "../services/GroupsService";
import { useNavigate, useParams } from "react-router-dom";
import Swal from 'sweetalert2'

const DeleteUser = () => {

  const navigate = useNavigate();
  const { gid, uid } = useParams();
  // console.log(gid, uid);
  

  // remove users
  const handleRemove = () => {
    removeFriend(gid, uid)
    .then(response => {
        console.log('user removed successfully', response.data);   
    })
    .catch(error => {
        console.log('Something went wrong', error);
    })
  }

  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    allowOutsideClick: false,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Remove '
  }).then((result) => {
    if (result.isConfirmed) {
      handleRemove();
      Swal.fire(
        'Deleted!',
        'User have been removed',
        'success'
      ).then((result) => {
        if (result.isConfirmed){
          navigate(-1);
        }
      })
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      navigate(-1);
    }
  })

  return ( 
    <div>
        
    </div>
      
  );
}
 
export default DeleteUser;