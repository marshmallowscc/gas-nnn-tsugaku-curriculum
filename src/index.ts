// Compiled using gas-nnn-tsugaku-curriculum 1.0.0 (TypeScript 4.9.5)
const CAL_ID: any = PropertiesService.getScriptProperties().getProperty("CAL_ID")
const SHEET_URL: any = PropertiesService.getScriptProperties().getProperty("SHEET_URL")
const calendar = CalendarApp.getCalendarById(CAL_ID)
const spreadSheet = SpreadsheetApp.openByUrl(SHEET_URL)
const sheet = spreadSheet.getSheetByName('授業選択')
const weekStart: Date = week_start()

function main() {
  
}

function week_start(){
  let today = new Date();
  let this_year = today.getFullYear();
  let this_month = today.getMonth();
  let date = today.getDate();
  let day_num = today.getDay();
  let this_monday = date - day_num + 1

  //月曜日の年月日
  let start_date = new Date(this_year, this_month, this_monday);
  return start_date
}


function deleteEvent() {
  const delEvents = calendar.getEvents(weekStart, new Date(weekStart.setDate(weekStart.getDate() + 90)))
  console.log(delEvents[0])
}


// function deleteEvent() {
//   const delStart = sheet.getRange(2 ,7).getValue();
//   console.log(delStart)
//   const delEvents = calendar.getEvents(delStart, new Date('2025-04-19'));
//   console.log(delEvents.length)
//   for(let i = 0; i < delEvents.length; i++) {
//     let delEvent = delEvents[i];
//     delEvent.deleteEvent();
//     // console.log('削除しました')
//   }
// }
