/**
 *
 * title: fetchUtil.js
 *
 * author: WangPei.
 *
 * date: 2017/5/22.
 *
 */
function isContains(str, substr) {
  return str.indexOf(substr) >= 0;
}
function fetchUtil(method, url, params) {
  let methods = method.toUpperCase();
  let headers = {
    "Content-type": "application/json; charset=utf-8",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36"
  };
  // if (isContains(params, "=")) {
  //   headers = {
  //     "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
  //   };
  // }
  return new Promise(function(resolve, reject) {
    fetch(url, {
      // credentials: "include",
      mode: "cors", //跨域请求
      headers: headers,
      method: methods,
      body: params
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          reject({ status: response.status });
        }
      })
      .then(response => {
        resolve(response);
      })
      .catch(err => {
        // reject({status:-1});
        console.log("fetch fail", err.toString() + "  failed url  " + url);
      });
  });
}
export default fetchUtil;
