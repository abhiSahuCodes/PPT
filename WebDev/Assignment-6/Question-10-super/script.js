// super 

class City {
    constructor(place) {
      this.place = place;
    }
  
    location() {
      console.log("Staying at Attabira");
    }
  }
  
  class home extends City {
    constructor(place, color) {
      super(place);
      this.color = color;
    }
  
    location() {
      super.location();
      console.log(`The color of my home color: ${this.color}`);
    }
  }
  
  const myHome = new home("SahuHome", "White");
  myHome.location();
  