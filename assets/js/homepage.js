const getUserRepos = function(user) {
    // format the github api url
    let apiUrl = "https://api.github.com/users/" + user + "/repos";
  
    // make a request to the url
    fetch(apiUrl).then(function(response) {
      response.json().then(function(data) {
        console.log(data);
      });
    });
  };

// const getUserRepos = function () {
//     fetch("https://api.github.com/users/octocat/repos").then(function (response) {
//         response.json().then(function (data) {
//             console.log(data);
//         });
//     });
// };
    //     fetch("https://api.github.com/users/octocat/repos").then(function (response) {
    //         console.log("inside", response);
    //     });

    //     console.log("outside");
    // };

    getUserRepos("nizzyno");