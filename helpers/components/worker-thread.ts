import {
  isMainThread,
  parentPort,
  threadId,
  Worker,
  workerData,
} from 'worker_threads';

export function asyncWorkerWrapper(script: any, callback?: any) {
  if (isMainThread) {
    // This code is executed in the main thread and not in the worker.

    const asyncConcurency = async function (script_: any, callback_: any) {
      const cb = new Promise((resolve, reject) => {
        // Create the worker.
        //# filename <string> | <URL>
        /*
        The path to the Worker’s main script or module. Must be either an absolute path or a relative path (i.e. relative to the current working directory) starting with ./ or ../, or a WHATWG URL object using file: or data: protocol. When using a data: URL, the data is interpreted based on MIME type using the ECMAScript module loader. If options.eval is true, this is a string containing JavaScript code rather than a path.
       */

        //# options <Object>

        /*
        /* argv <any[]> //+ List of arguments which would be stringified and appended to process.argv in the worker. This is mostly similar to the workerData but the values are available on the global process.argv as if they were passed as CLI options to the script.
        /* env <Object> //* If set, specifies the initial value of process.env inside the Worker thread. As a special value, worker.SHARE_ENV may be used to specify that the parent thread and the child thread should share their environment variables; in that case, changes to one thread’s process.env object affect the other thread as well. Default: process.env.
        /* eval <boolean> //+ If true and the first argument is a string, interpret the first argument to the constructor as a script that is executed once the worker is online.
        /* execArgv <string[]> //* List of node CLI options passed to the worker. V8 options (such as --max-old-space-size) and options that affect the process (such as --title) are not supported. If set, this is provided as process.execArgv inside the worker. By default, options are inherited from the parent thread.
        /* stdin <boolean> //+If this is set to true, then worker.stdin provides a writable stream whose contents appear as process.stdin inside the Worker. By default, no data is provided.
        /* stdout <boolean> //* If this is set to true, then worker.stdout is not automatically piped through to process.stdout in the parent.
        /* stderr <boolean> //+ If this is set to true, then worker.stderr is not automatically piped through to process.stderr in the parent.
        /* workerData <any> //* Any JavaScript value that is cloned and made available as require('worker_threads').workerData. The cloning occurs as described in the HTML structured clone algorithm, and an error is thrown if the object cannot be cloned (e.g. because it contains functions).
        /* trackUnmanagedFds <boolean> //+ If this is set to true, then the Worker tracks raw file descriptors managed through fs.open() and fs.close(), and closes them when the Worker exits, similar to other resources like network sockets or file descriptors managed through the FileHandle API. This option is automatically inherited by all nested Workers. Default: true.
        /* transferList <Object[]> //* If one or more MessagePort-like objects are passed in workerData, a transferList is required for those items or ERR_MISSING_MESSAGE_PORT_IN_TRANSFER_LIST is thrown. See port.postMessage() for more information.
        /* resourceLimits <Object> //+ An optional set of resource limits for the new JS engine instance. Reaching these limits leads to termination of the Worker instance. These limits only affect the JS engine, and no external data, including no ArrayBuffers. Even if these limits are set, the process may still abort if it encounters a global out-of-memory situation.
            /* maxOldGenerationSizeMb <number> //? The maximum size of the main heap in MB.
            /* maxYoungGenerationSizeMb <number> //% The maximum size of a heap space for recently created objects.
            /* codeRangeSizeMb <number> //? The size of a pre-allocated memory range used for generated code.
            /* stackSizeMb <number> //% The default maximum stack size for the thread. Small values may lead to unusable Worker instances. Default: 4.
       */
        const worker = new Worker(`${__filename.slice(0, -3)}.js`, {
          workerData: script_,
        });

        // Listen for messages from the worker and print them.
        worker.on('message', resolve);
        worker.on('error', reject);
        worker.on('exit', code => {
          if (code !== 0)
            reject(new Error(`Worker stopped with exit code ${code}`));
        });
      });
      callback_(0, cb, threadId);
    };
    asyncConcurency(script, callback);
    callback(2, null, threadId);
  } else {
    // void workerData;
    // This code is executed in the worker and not in the main thread.

    // Send a message to the main thread.
    // const { parse } = require('some-js-parsing-library');
    const script = workerData;
    parentPort.postMessage(
      `Hello world! from Worker ${threadId} will perform some script ${script}`
    );
    eval(script);
    callback(1, null, threadId);
  }
}
