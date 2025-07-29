const Singleton = (function () {
  let instance;

  function createInstance() {
    const object = { value: 5 };
    return object;
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

const firstInstance = Singleton.getInstance();
const secondInstance = Singleton.getInstance();

console.log(firstInstance === secondInstance);
