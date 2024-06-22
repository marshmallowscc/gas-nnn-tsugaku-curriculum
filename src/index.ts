// Compiled using gas-nnn-tsugaku-curriculum 1.0.0 (TypeScript 4.9.5)
const CAL_ID: any = PropertiesService.getScriptProperties().getProperty("CAL_ID")
const SHEET_URL: any = PropertiesService.getScriptProperties().getProperty("SHEET_URL")
const calendar = CalendarApp.getCalendarById(CAL_ID)
const spreadSheet = SpreadsheetApp.openByUrl(SHEET_URL)
const sheet = spreadSheet.getSheetByName('授業選択')

function main() {
  
}

function createEvent() {
  
}

// function addEvent() {
//   const listLastRow = 9;
//   // console.log(listLastRow)
//   let listCol = 4

//   for(listCol = 4; listCol < 7; listCol++) {
//     console.log(listCol)

//     for(let i = 1; i < listLastRow; i++) {
//       // console.log(i);
//       // タイトル
//       const title = sheet.getRange(i + 1, listCol).getValue()
//       // titleが登録されていない場合、この行をパスする
//       if(title == '') {
//         continue
//       }
//       console.log(title)
//       const day = sheet.getRange(1, listCol).getValue().getDay();
//       const days = [CalendarApp.Weekday.SANDAY, CalendarApp.Weekday.MONDAY, CalendarApp.Weekday.TUESDAY, CalendarApp.Weekday.WEDNESDAY, CalendarApp.Weekday.THURSDAY, CalendarApp.Weekday.FRIDAY, CalendarApp.Weekday.SATURDAY];
      
//       const ssDate = sheet.getRange(1, listCol).getValue().getDate();
//       console.log(ssDate)
//       // 開始時間
//       const startHours = sheet.getRange(i + 1, 2).getValue().getHours()
//       const startMinutes = sheet.getRange(i + 1, 2).getValue().getMinutes()
//       let startTime = new Date(sheet.getRange(2, 7).getValue())
//       startTime = new Date(startTime.setDate(ssDate))
//       startTime = startTime.setHours(startHours, startMinutes, 0)
//       startTime = new Date(startTime)
//       console.log(startTime)

//       // 終了時間
//       const endHours = sheet.getRange(i + 1, 3).getValue().getHours()
//       const endMinutes = sheet.getRange(i + 1, 3).getValue().getMinutes()
//       let endTime = new Date(sheet.getRange(2, 7).getValue())
//       endTime = new Date(endTime.setDate(ssDate))
//       endTime = endTime.setHours(endHours, endMinutes, 0)
//       endTime = new Date(endTime)
//       console.log(endTime)
      
//       let recurrence = CalendarApp.newRecurrence()
//       .addWeeklyRule().onlyOnWeekday(days[day]).times(12);
//       calendar.createEventSeries(title, startTime, endTime, recurrence)
//     }
//   }

  
// }


function next_monday(){
  let now = new Date();
  let y = now.getFullYear();
  let m = now.getMonth();
  //曜日の番号を取得
  let day_num = now.getDay();
  let d = now.getDate() - day_num + 1;

  return new Date(y, m, d);
}


function deleteEvent() {
  const delEvents = calendar.getEvents(next_monday(), new Date(next_monday().setDate(next_monday().getDate() + 90)))
  console.log(delEvents.length)
  for (let i = 0; i < delEvents.length; i++) {
    let delEvent = delEvents[i];
    delEvent.deleteEvent();
    console.log('削除しました')
  }
}