import axios from "axios";

const getProducts = () => {
  setTimeout(() => {
    return new Promise((resolve, reject) => {
      axios.get("http://localhost:3011/products").then((response) => {
        console.log(response.data);
        resolve(response);
      });
    });
  }, 1000);
};

const addProduct = (name, quantity) => {
  setTimeout(() => {
    axios
      .post("http://localhost:3011/products", {
        name: name,
        quantity: quantity,
      })
      .then(
        (response) => {
          console.log(response.data);
          return response;
        },
        (error) => {
          return error;
        }
      );
  }, 2000);
};

const getProductsAsync = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      axios.get("http://localhost:3011/products").then((response) => {
        resolve(response.data);
      });
    }, 3000);
  });
};

(async () => {
  getProducts();
  addProduct("pomme", 15);
  const res = await getProductsAsync();
  console.log(res);
})();
