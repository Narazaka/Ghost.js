
declare class Ghost {
  constructor(tree: any); // unstable
  load(callback: (error: any) => void): void; // stable
  request(request: string, callback: (error: any, response: string) => void): void; // stable
  unload(callback: (error: any) => void): void; // stable
  descript: { [key: string]: string; }; // stable
  tree: any; // unstable
  worker: Worker; // unstable
}


declare module Ghost {
  function createTransferable(tree: any): {directory: any; buffers: ArrayBuffer[]; };
  function detectShiori(buffer: ArrayBuffer): string; // unstable
  function createRequest(method, event: { [key: string]: string; }): string; // unstable
  function parseResponse(response: string): { [key: string]: string; }; // unstable
}

declare module 'ghost' {
  var foo: typeof Ghost;
  module rsvp {
    export var Ghost: typeof foo;
  }
  export = rsvp;
}