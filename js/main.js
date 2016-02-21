require(
  ['factoryPattern/init'],
  function(factoryPattern) {
    var patterns = {
      factoryPattern: factoryPattern
    };

    window.runPattern = function(pattern) {
      patterns[pattern].init();
    };
  }
);
