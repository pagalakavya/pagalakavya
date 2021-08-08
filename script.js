//Problem Statement:

//1. Create a JavaScript restaurantManager class with the following properties:

//Solution:
class RestaurantManager {
    restaurantList = [
      {
        name: "Restaurant1",
        address: "Address1",
        city: "City1",
      },
      {
        name: "Restaurant2",
        address: "Address2",
        city: "City2",
      },
      {
        name: "Restaurant3",
        address: "Address3",
        city: "City3",
      },
      {
        name: "Restaurant4",
        address: "Address4",
        city: "City3",
      },
      {
        name: "Restaurant5",
        address: "Address5",
        city: "City2",
      },
      {
        name: "Restaurant6",
        address: "Address6",
        city: "City3",
      },
    ];
  
    printAllRestaurantName = () => {
      for (let i of this.restaurantList) {
        console.log(i.name);
      }
    };
  
    filterRestaurantByCity = (city) => {
      for (let i of this.restaurantList) {
        if (i.city.toLocaleLowerCase() === city.toLocaleLowerCase()) {
          console.log(i.name);
        }
      }
    };
  }
  
  let result = new RestaurantManager();
  console.log("All Restaurant List:");
  result.printAllRestaurantName();
  console.log(`--------------`);
  console.log("Filtered Restaurant by city:");
  result.filterRestaurantByCity("city2");
  
  //2. Please find order details for Punjabi Tadka restaurant in Delhi as:
  
  //Solution
  
  let orderData = {
    "Below 500": 20,
    "500-1000": 29,
    "1000-1500": 30,
    "1500-2000": 44,
    "Above 2000": 76,
  };
  
  //a. Calculate the total number of orders placed for the restaurant.
  //Solution:
  
  let totalOrder = () => {
    let total = 0;
    for (let order in orderData) {
      total += orderData[order];
    }
    return total;
  };
  console.log("Solution 2 a");
  console.log("The total number of orders is: " + totalOrder());
  
  // b. Calculate the number of order proportion options.
  
  //Solution
  
  let totalOptions = () => {
    let total = 0;
    for (let order in orderData) {
      total++;
    }
    return total;
  };
  console.log("Solution 2 b");
  console.log(
    "The total number of order proportion options are: " + totalOptions()
  );
  
  //c. Calculate the percentage of each proportion in below format:
  //Solution
  
  const calculateOrderPercentage = (order) => {
    let value = (orderData[order] / totalOrder()) * 100;
    return value.toFixed(2);
  };
  
  const orderProportionList = () => {
    const orderList = [];
    let id = 1;
    for (let order in orderData) {
      let orderObject = {
        id: id++,
        order: order,
        "order percentage": calculateOrderPercentage(order),
        restaurant: "Punjabi Tadka",
      };
      orderList.push(orderObject);
    }
  
    console.log(orderList);
  };
  
  orderProportionList();
