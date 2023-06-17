export const TokenUpdate = () => {
  const tokentime = new Date();
  const storageTime = new Date(localStorage.getItem("tokentime"));

  if (
    storageTime.setMinutes(storageTime.getMinutes() + 15) >= tokentime.getTime()
  ) {
    // Get New Token
    // Update the token
  }
};
