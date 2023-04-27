export const Greeter = (name: string) => `Hello ${name}`;
export const initTouchHandler = (box: HTMLElement, leftHandler: () => void, rightHandler: () => void) => {
  let startTime: number; // 触摸开始时间
  let startDistanceX: number; // 触摸开始X轴位置
  let startDistanceY: number; // 触摸开始Y轴位置
  let endTime: number; // 触摸结束时间
  let endDistanceX: number; // 触摸结束X轴位置
  let endDistanceY: number; // 触摸结束Y轴位置
  let moveTime: number; // 触摸时间
  let moveDistanceX: number; // 触摸移动X轴距离
  let moveDistanceY: number; // 触摸移动Y轴距离
  box.addEventListener(
    'touchstart',
    (evt: TouchEvent) => {
      startTime = new Date().getTime();
      startDistanceX = evt.touches[0].screenX;
      startDistanceY = evt.touches[0].screenY;
    },
    false,
  );
  box.addEventListener('touchend', (e) => {
    endTime = new Date().getTime();
    endDistanceX = e.changedTouches[0].screenX;
    endDistanceY = e.changedTouches[0].screenY;
    moveTime = endTime - startTime;
    moveDistanceX = startDistanceX - endDistanceX;
    moveDistanceY = startDistanceY - endDistanceY;
    // console.log(moveDistanceX, moveDistanceY)
    // 判断滑动距离超过40 且 时间小于500毫秒
    if ((Math.abs(moveDistanceX) > 40 || Math.abs(moveDistanceY) > 40) && moveTime < 500) {
      // 判断X轴移动的距离是否大于Y轴移动的距离
      if (Math.abs(moveDistanceX) > Math.abs(moveDistanceY)) {
        // 左右
        // console.log(moveDistanceX > 0 ? '左' : '右')
        if (moveDistanceX > 0) {
          leftHandler();
        } else {
          rightHandler();
        }
      } else {
        // 上下
        // console.log(moveDistanceY > 0 ? '上' : '下')
      }
    }
  });
};
