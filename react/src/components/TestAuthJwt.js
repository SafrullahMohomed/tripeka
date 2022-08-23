// import { init } from "aos";
// import { useEffect } from "react";
// import { UserService } from "../jwtAuthServices/user.service";

// const TestAuthJwt = () => {
//   const [groups, setGroups] = useState();

//   const init = () => {
//     UserService.getUserBoard()
//       .then((response) => {
//         console.log("Printing employees data", response.data);
//         setGroups(response.data);
//       })
//       .catch((error) => {
//         console.log("Something went wrong", error);
//       });
//   };

//   useEffect(() => {
//     init();
//   }, []);

//   return <h1>{groups}</h1>;
// };

// export default TestAuthJwt;
