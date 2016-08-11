const test = (function Module(id) {
  function identify2() {
    console.log(id.toUpperCase());
  }

  const publicAPI = {
    change() { publicAPI.identify = identify2; },
    identify() { console.log(id); },
  };

  return publicAPI;
}('test Module'));

test.identify();
test.change();
test.identify();
