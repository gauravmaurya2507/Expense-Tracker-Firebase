export const useGetUserInfo = () => {
  const { name, profilePhoto, userID, isAuth } = JSON.parse(
    localStorage.getItem("auth")) || {};
//   const data = JSON.parse(localStorage.getItem("auth"));
//   console.log("hgggg => ", data.userId);

  return { name, profilePhoto, userID, isAuth };
};
