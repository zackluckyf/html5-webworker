  var results = [];

  function messageHandler(e) {
      'use strict';
      if (e.data > 0) {
          generateFibonacciSeries(e.data);
      }
  }

  function calculateNextFibonacciValue(n) {
      'use strict';
      var s = 0;
      var returnValue;

      if (n === 0) {
          return s;
      }
      if (n === 1) {
          s += 1;
          return s;
      } else {
          return (calculateNextFibonacciValue(n - 1) + calculateNextFibonacciValue(n - 2));
      }
  }

  function generateFibonacciSeries(n) {
      'use strict';
      for (var i = 0; i < n; i++) {
          results.push(calculateNextFibonacciValue(i));
      }
      postMessage(results);
  }

  addEventListener('message', messageHandler, true);
