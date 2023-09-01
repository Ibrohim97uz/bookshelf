const resetLocalStorage = (): void => {
  window.localStorage.removeItem("Key");
};

export { resetLocalStorage };
