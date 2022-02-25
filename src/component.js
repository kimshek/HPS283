import React, { useState } from 'react';

import {PythonShell} from 'python-shell';

// let options = {
//   mode: 'text',
//   pythonPath: '../../../../AppData/Local/Programs/Python/Python39',
//   pythonOptions: ['-u'], // get print results in real-time
//   scriptPath: './test.py',
//   // args: ['value1', 'value2', 'value3']
// };

function Component(props){
    const [enabled, setEnabled] = useState("enabled");

    var click = function(){
        // PythonShell.run('test.py', options, function (err, results) {
        //     if (err) throw err;
        //     // results is an array consisting of messages collected during execution
        //     console.log('results: %j', results);
        // });
        if(enabled == "enabled"){
            setEnabled("disabled");
        }
        else{
            setEnabled("enabled");
        }
    }

    // var test = () =>{
        
    //   };


    return (
        <div>
            <h1>{enabled}</h1>
            <h2>{props.text}</h2>
            <button type="button" onClick = {click}>
                Click
            </button>
        </div>
    
    );
}

export default Component;