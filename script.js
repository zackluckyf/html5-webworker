document.addEventListener("DOMContentLoaded", function(event) {
    'use strict';

    var saveButton = document.getElementById('saveButton');
    var deleteButton = document.getElementById('deleteButton');
    var tasksBox = document.getElementById('tasksBox');


    (function() {
        if (window.localStorage) {
            if (window.localStorage.taskList != null) {
                var tasks = window.localStorage.taskList;
                var taskList = tasks.split(',').join('\n');
            }
        }

        saveButton.addEventListener('click', function() {
            save();
            console.log('Saved!');
        });

        deleteButton.addEventListener('click', function() {
            window.localStorage.removeItem('taskList');
            tasksBox.value = '';
            console.log('Deleted!');
        });

        function save() {
            var tasks = tasksBox.value;
            var taskList = tasks.split('\n').join(',');
            window.localStorage.taskList = taskList;
        }

    })();
});
