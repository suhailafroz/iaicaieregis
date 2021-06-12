
function exportToExcel(tableId) {
    let tableData = document.getElementById(tableId).outerHTML;
    //click a hidden link to which will prompt for download.
    let a = document.createElement('a')
    a.href = `data:application/vnd.ms-excel, ${encodeURIComponent(tableData)}`
    a.download = 'iaicaie.xls'
    a.click()
}
