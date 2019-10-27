class TouchScrollTracker {

  static SCROLL_TO_LEFT = -1;
  static NO_SCROLL = 0;
  static SCROLL_TO_RIGHT = 1;

  constructor(options) {
    const defaultOptions = {
      component: this,
      onScroll: () => {},
    };

    this.options = Object.assign(defaultOptions, options);
    this.fromX = 0;
  }

  touchStart(e) {
    this.fromX = e.changedTouches[0].clientX;
  }

  touchEnd(e) {
    const toX = e.changedTouches[0].clientX;
    const delta = toX - this.fromX;
    const direction = this.getDirection(delta);

    if (direction === TouchScrollTracker.NO_SCROLL) {
      return;
    }

    const {
      component,
      onScroll,
    } = this.options;

    onScroll.call(component, direction);
  }

  getDirection = delta => {
    const absDelta = Math.abs(delta);

    if (absDelta === 0) {
      return TouchScrollTracker.NO_SCROLL;
    }

    return delta > 0
      ? TouchScrollTracker.SCROLL_TO_LEFT
      : TouchScrollTracker.SCROLL_TO_RIGHT;
  };
}

export default TouchScrollTracker;
