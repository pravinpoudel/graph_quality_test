"use strict";

var _greadbility = require("./greadbility.js");

(function _callee() {
  var edgeUrl, nodeUrl, edgesList, nodesList, edgeResponse, message, edgeResult, nodeResponse, nodeResult, _message;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          edgeUrl = "assets/BH_edges_sfba.json";
          nodeUrl = "assets/BH_nodes_sfba.json";
          edgesList = [];
          nodesList = [];
          _context.next = 6;
          return regeneratorRuntime.awrap(fetch(edgeUrl));

        case 6:
          edgeResponse = _context.sent;

          if (edgeResponse.ok) {
            _context.next = 10;
            break;
          }

          message = "An error has occured: ".concat(edgeResponse.status);
          throw new Error(message);

        case 10:
          _context.next = 12;
          return regeneratorRuntime.awrap(edgeResponse.json());

        case 12:
          edgeResult = _context.sent;
          edgesList = edgeResult;
          _context.next = 16;
          return regeneratorRuntime.awrap(fetch(nodeUrl));

        case 16:
          nodeResponse = _context.sent;
          _context.next = 19;
          return regeneratorRuntime.awrap(nodeResponse.json());

        case 19:
          nodeResult = _context.sent;
          nodesList = nodeResult;

          if (nodeResponse.ok) {
            _context.next = 24;
            break;
          }

          _message = "An error has occured: ".concat(nodeResponse.status);
          throw new Error(_message);

        case 24:
          console.log("start");
          console.log((0, _greadbility.greadability)(nodesList, edgesList));
          console.log("finished");

        case 27:
        case "end":
          return _context.stop();
      }
    }
  });
})();
//# sourceMappingURL=index.dev.js.map
