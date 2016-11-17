document.addEventListener("DOMContentLoaded", function(event) {
    'use strict';

    var log = null;
    var seriesLength;
    var generateButton;
    var worker;

    (function() {

        log = document.getElementById('log');
        seriesLength = document.getElementById('seriesLength');
        generateButton = document.getElementById('generateButton');
        var num;

        generateButton.addEventListener('click', function() {

            num = parseInt(seriesLength.value);
            while (log.firstChild) {
                log.removeChild(log.firstChild);
            }
            worker = new Worker('fib-worker.js');
            worker.onmessage = messageHandler;
            worker.onerror = errorHandler;
            worker.postMessage(num);
        });

        function messageHandler(e) {
            var results = e.data;
            results.map((item) => {
                logMsg(item);
            });
        }

        function errorHandler(e) {
            logMsg(e.message);
        }

        function logMsg(msg) {
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(msg));
            log.appendChild(li);
        }

    })();
});
