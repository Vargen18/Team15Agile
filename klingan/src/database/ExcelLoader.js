import xlsxFile from "read-excel-file";

function getExcel() {
  console.log("Här");
  xlsxFile("./Varudata").then((rows) => {
    console.log(rows);
    console.table(rows);
  });
}

export default getExcel;
