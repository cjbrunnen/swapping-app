angular
.module("swishListApp")
.factory("Transaction", Transaction);

Transaction.$inject = ["$resource", "API"];
function Transaction($resource, API) {
  return $resource(`${API}/transactions/:id`, { id: "@_id" }, {
    'query':    { method: "GET", isArray: false },

  });
}
