console.log("Hello Back to School");
let viz;
//1. create a variable to store the viz container
//2. create a variable to store the dashboard options
//3. create a variable to store the URL
//if it doesn't load, might need to specify height and width
const options = {
  device: "desktop",
  height: "800px",
  width: "1100px",
};
const containerDiv = document.getElementById("vizContainer");
const url =
  "https://public.tableau.com/views/Book3_16704095933730/EmbbeddingDashboard";
function initViz() {
  viz = new tableau.Viz(containerDiv, url, options);
}
document.addEventListener("DOMContentLoaded", initViz);
const exportpdfbutton = document.getElementById("exportPDF");
exportpdfbutton.addEventListener("click", exportPDFfunction);
function exportPDFfunction() {
  viz.showExportPDFDialog();
}
const exportpowerpointbutton = document.getElementById("exportPowerPoint");
exportpowerpointbutton.addEventListener("click", exportpowerpointfunction);
function exportpowerpointfunction() {
  viz.showExportPowerPointDialog();
}
function getRangeValues() {
  const minValue = document.getElementById("MinValue").value;
  const maxValue = document.getElementById("MaxValue").value;
  console.log(minValue, maxValue);
  const workbook = viz.getWorkbook();
  const activeSheet = workbook.getActiveSheet();
  const sheets = activeSheet.getWorksheets();
  console.log(sheets);
  const sheetToFilter = sheets[0];
  sheetToFilter
    .applyRangeFilterAsync("SUM(Sales)", { min: minValue, max: maxValue })
    .then(alert("viz filtered"));
}
document
  .getElementById("filterButton")
  .addEventListener("click", getRangeValues);
