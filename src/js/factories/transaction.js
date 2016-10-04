angular
.module("swishListApp")
.factory("Transaction", Transaction);

Transaction.$inject = ["$resource", "API"];
function Transaction($resource, API) {
  return $resource(`${API}/transactions/:id`, { id: "@_id" }, {
    'query'    : { method: "GET", isArray: false                           },
    'swishback': { method: "PUT", url: `${API}/transactions/:id/swishback` },
    'approve'  : { method: "PUT", url: `${API}/transactions/:id/approve`   },
    'reject'   : { method: "PUT", url: `${API}/transactions/:id/reject`    }
  });
}
