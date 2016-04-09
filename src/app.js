/**
 * Created by yang on 2016/4/9.
 */
'use strict';

import fs from 'fs';

var readFile = file => new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
        if (err) {
            reject(err);
        }
        resolve(data);
    });
});

var readFileAsync = async () => {
    var f = await readFile('d:/my-default.cnf');
    console.log(f);
};

readFileAsync();