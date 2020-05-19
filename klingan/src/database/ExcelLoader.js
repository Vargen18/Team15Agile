function getExcel() {
  const xlsxFile = require("read-excel-file/node");
  console.log("Här");
  xlsxFile("./Varudata.xlsx").then((rows) => {
    console.log(rows);
    console.table(rows);
  });
}
