/**
 * Web App 入口函數
 */
function doGet() {
  return HtmlService.createTemplateFromFile('Index')
    .evaluate()
    .setTitle('個人檔案 - 蔡守富')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

/**
 * 獲取文字資料 (不包含大型圖片字串)
 */
function getMyDetailedProfile() {
  const ssId = '15Col7LxzWXuQj5jNlwZSCGrbfhWkU9hUUBU4vUrooFU';
  const sheet = SpreadsheetApp.openById(ssId).getSheets()[0];
  const data = sheet.getDataRange().getValues();
  const base = data[1]; 

  const collectColumn = (columnIndex) => {
    return data.slice(1)
               .map(row => row[columnIndex])
               .filter(cell => cell !== "" && cell !== null && String(cell).trim() !== ""); 
  };

  return {
    name: base[0],
    nickname: base[1],
    title: base[2],
    education: base[3],
    contactApps: collectColumn(7),
    contactIDs: collectColumn(8),
    currentRoles: collectColumn(9),
    expWorks: collectColumn(10),
    expActivities: collectColumn(11),
    compExps: collectColumn(12)
  };
}

/**
 * 專門獲取圖片的函數 (非同步呼叫)
 */
function getProfilePhoto() {
  try {
    const fileId = "1nb2zou9recp1Rq_FqnbLn6LooYLnfr97"; 
    const file = DriveApp.getFileById(fileId);
    const blob = file.getBlob();
    const photoData = "data:" + blob.getContentType() + ";base64," + Utilities.base64Encode(blob.getBytes());
    console.log("圖片非同步抓取成功，長度: " + photoData.length);
    return photoData;
  } catch(e) {
    console.error("圖片抓取失敗: " + e.toString());
    return "https://api.dicebear.com/7.x/avataaars/svg?seed=Justin";
  }
}
