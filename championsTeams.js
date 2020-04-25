// call to API
let request = new XMLHttpRequest();
request.open("GET", "https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&year=2015&page=1");
request.send();
// let result;
request.onload = () => {
    // console.log(request);
    if (request.status ===200) {
        var results = (JSON.parse(request.response));
    }


	let numPages = results.total_pages;

	// For each page, get team names and add to array
	let allTeams = [];
	for (var i = 1; i < numPages+1; i++) {
		let request = new XMLHttpRequest();
		request.open("GET", "https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&year=2015&page=" + i);
		request.send()
		request.onload = () => {
	    // console.log(request);
		    if (request.status ===200) {
		        let results = (JSON.parse(request.response));
		    }

		    for (var i = 0; i < results.per_page; i++) {
		   		allTeams.push(results.data[i].team1);
		   		allTeams.push(results.data[i].team2);
		    }
		}
	}
	console.log(allTeams)

	// filter out teams and that occur greater than 5
}

