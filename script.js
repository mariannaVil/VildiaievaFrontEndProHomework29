function Student(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.points = [];
    this.visits = new Array(25).fill(false);
    this.currentVisitIndex = 0; 
  
    this.addPoints = function (point) {
      this.points.push(point);
    };
  
    this.calculateAveragePoints = function () {
      return this.points.length === 0 ? 0 : this.points.reduce((acc, point) => acc + point, 0) / this.points.length;
    };
  
    this.getAge = function () {
      let thisYear = new Date().getFullYear();
      return thisYear - this.birthYear;
    };
  
    this.setVisitStatus = function (isPresent) {
      if (this.currentVisitIndex < this.visits.length) {
        this.visits[this.currentVisitIndex] = isPresent;
        this.currentVisitIndex++;
      }
    };
  
    this.present = function () {
      this.setVisitStatus(true);
    };
  
    this.absent = function () {
      this.setVisitStatus(false);
    };
  
    this.summary = function () {
      const averagePoints = this.calculateAveragePoints();
      const visitRatio = this.visits.filter(visit => visit).length / this.visits.length;
  
      return (averagePoints > 90 && visitRatio > 0.9) ? "Молодець!" :
             (averagePoints > 90 || visitRatio > 0.9) ? "Добре, але можна краще" : "Редиска!";
    };
  }
  
  let student1 = new Student("Сергій", "Краснянський", 2000);
  let student2 = new Student("Марія", "Волошина", 2002);
  
  student1.addPoints(95);
  student2.addPoints(85);
  student1.present();
  student2.absent();
  
  console.log(student1.summary());
  