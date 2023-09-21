class Report {
    constructor(data) {
      this.data = data;
    }
  
    generateCSV() {
      console.log('Generated report in CSV format');
    }

    generateJSON() {
      console.log('Generated report in JSON format');
    }
}
  
const report = new Report([{ product: 'Shoes', sold: 100 }, { product: 'Shirts', sold: 50 }]);
report.generateCSV();
report.generateJSON();