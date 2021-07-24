// task 1

function cachingDecoratorNew(func) {
  let cache = {};

  function wrapper(...args) {
    let hash = args.join();

    if (args.length > 5) {
      hash = args.slice(args.length - 5, args.length).join();
    }

    if (hash in cache) {
      console.log("Из кеша: " + cache[hash]);
      return "Из кеша: " + cache[hash];
    } else {
      let result = func.call(this, ...args);
      cache[hash] = result;
      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;
    }
  }
  return wrapper;
}

//task 2

function debounceDecoratorNew(func, ms) {
  let isFirstLaunch = true;

  return function (...args) {
    if (isFirstLaunch) {
      isFirstLaunch = false;
      func.apply(this, args);
    }

    let savedThis = this;
    console.log(savedThis);

    setTimeout(function () {
      func.apply(savedThis, args);
    }, ms);
  };
}

//task 3

function debounceDecorator2(func) {
  function wrapper(...args) {
    wrapper.history.push(args);
    wrapper.count++;
    return func.call(this, ...args);
  }
  wrapper.count = 0;
  wrapper.history = [];
  return wrapper;
}