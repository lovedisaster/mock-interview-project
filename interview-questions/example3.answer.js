/* 
This task is to test your understand of one of the SOLID 
design principle, Open-Close Principle. 
What is mean is, your code should be open for Extensions. 
But close for modifications. 
*/

class Report {
    constructor(data) {
      this.data = data;
    }
  
    generate(reportFormat) {
      reportFormat.generate(this.data);
    }
}
  
class CSVFormat extends Report{
    generate(data) {
        // Logic to generate CSV report from data
        console.log('Generated report in CSV format');
    }
}

class JSONFormat extends Report{
    generate(data) {
        // Logic to generate JSON report from data
        console.log('Generated report in JSON format');
    }
}
  
const report = new Report([{ product: 'Shoes', sold: 100 }, { product: 'Shirts', sold: 50 }]);
report.generate(new CSVFormat());
report.generate(new JSONFormat());