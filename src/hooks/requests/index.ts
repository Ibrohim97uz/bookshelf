import useQuery from "./use-query";
import useMutation from "./use-mutation";

export const routes = {
  register: "/signup",
  books: "/books",
};

// SIGNUP

export const UseRegisterUser = () => {
  return useMutation("post", `${routes.register}`);
};

//BOOKS

export const UseCreateBook = () => {
  return useMutation("post", `${routes.books}`);
};

export const UseEditBook = (id: string) => {
  return useMutation("patch", `${routes.books}/${id}`);
};
export const UseDeleteBook = (id: string) => {
  return useMutation("delete", `${routes.books}/${id}`);
};

export const UseGetAllBooks = () => {
  return useQuery(routes.books);
};
