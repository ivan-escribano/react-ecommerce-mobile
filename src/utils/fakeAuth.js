//!RETURN TOKEN FUNCTION
const fakeAuth = () => {
  return new Promise((resolve) => {
    //Set timeout because its simulating petition to a server that can have a waiting time return promise
    setTimeout(() => resolve("2342f2f1d131rf12"), 250);
  });
};

export default fakeAuth;
