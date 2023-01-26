import { useEffect, useState } from "react";
import axios from "axios";

const useGetUserData = (totalRecordToShow) => {
  const [userData, setUserData] = useState();
  const [pagesToShow, setPagesToShow] = useState();

  useEffect(() => {
    const getUserData = async () => {
      try {
        const { data } = await axios("https://dummyjson.com/users?limit=100");
        setUserData(data.users);
        const totalPages = Math.round(data.users.length / totalRecordToShow);
        getPages(totalPages);
      } catch (e) {
        console.log(e);
      }
    };

    getUserData();
  }, []);

  const getPages = (totalPages) => {
    const pagesToShow = [];
    for (let i = 1; i <= totalPages; i++) {
      pagesToShow.push(i);
    }
    setPagesToShow(pagesToShow);
  };

  return { userData, pagesToShow };
};

export default useGetUserData;
