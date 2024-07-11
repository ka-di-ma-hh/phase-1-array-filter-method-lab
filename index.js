// Code your solution here

{
    const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
    const findMatching = (drivers, name) => {
      return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase())
    }
   
    findMatching(drivers, 'Bobby')
  }
  {
    const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "bobby"];
    const fuzzyMatch = (drivers, nameLetters) => {
      return drivers.filter(driver => driver.toLowerCase().startsWith(nameLetters.toLowerCase()))
    }
    fuzzyMatch(drivers, 'sa')
  }
  
  {
    const drivers = [
      {
        name: "Bobby",
        hometown: "Pittsburgh",
      },
      {
        name: "Sammy",
        hometown: "New York",
      },
      {
        name: "Sally",
        hometown: "Cleveland",
      },
      {
        name: "Annette",
        hometown: "Los Angeles",
      },
      {
        name: "Bobby",
        hometown: "Tampa Bay",
      },
    ];
  
    const matchName = (drivers, name) => {
      return drivers.filter(driver => driver.name === name)
    }
    matchName(drivers,'Bobby')
  }
