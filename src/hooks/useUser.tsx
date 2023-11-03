// import { useQuery } from "@tanstack/react-query";
// import { getUser } from "../services/user";

// const useUser= () => {
//   const { data: user } = useQuery(
//     'user', // TODO: Remove to a constant string file
//     getUser,
//     {
//       refetchOnMount: false,
//       refetchOnWindowFocus: false,
//       refetchOnReconnect: false,
//       initialData: userLocalStorage.getUser,
//       onError: () => {
//         userLocalStorage.removeUser();
//       }
//     });

//   useEffect(() => {
//     if (!user) userLocalStorage.removeUser();
//     else userLocalStorage.saveUser(user);
//   }, [user]);

//   return {
//     user: user ?? null,
//   }
// }

// export default useUser;
