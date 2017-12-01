const fs = require('fs');

fs.readFile(__dirname + '/input.txt', 'utf8', function (err, data) {
    var sum = 0;
    for (var i = 0; i < data.length; i++) {
        var next = (i + (data.length / 2)) % data.length;
        if (data.charAt(i) === data.charAt(next)) {
            sum += parseInt(data.charAt(i));
        }
    }

    console.log(sum);
});