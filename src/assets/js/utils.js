// 屏幕缩放
export function screenSize(editorDom) {
  let screenWidth = document.body.clientWidth || document.documentElement.clientWidth;
  let screenHeight = document.body.clientHeight || document.documentElement.clientHeight;
  let defWidth = 1920;
  let defHeight = 1080;
  let xScale = screenWidth / defWidth;
  let yScale = screenHeight / defHeight;
  editorDom.style.cssText += ';transform: scale(' + xScale + ',' + yScale + ')';

  $(window).resize(() => {
    let screenWidth = document.body.clientWidth || document.documentElement.clientWidth;
    let screenHeight = document.body.clientHeight || document.documentElement.clientHeight;
    xScale = screenWidth / defWidth;
    yScale = screenHeight / defHeight;
    editorDom.style.cssText += ';transform: scale(' + xScale + ',' + yScale + ')';
  })
}