import { asyncWorkerWrapper } from './worker-thread';

void asyncWorkerWrapper;

asyncWorkerWrapper('console.log("hello from the requester")', (x: number) =>
  console.log(x)
);
