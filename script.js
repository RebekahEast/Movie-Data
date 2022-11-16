let movieData = {
    "The Darjeeling Limited": {
      plot: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
      cast: ["Jason Schwartzman", "Owen Wilson", "Adrien Brody"],
      runtime: 151,
      rating: 7.2,
      year: 2007,
    },
    "The Royal Tenenbaums": {
      plot: "The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons",
      rating: 7.6,
      year: 2001,
      cast: ["Gene Hackman", "Gwnyeth Paltrow", "Anjelica Huston"],
      runtime: 170,
    },
    "Fantastic Mr. Fox": {
      year: 2009,
      plot: "An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers' retaliation.",
      cast: [
        "George Clooney",
        "Meryl Streep",
        "Bill Murray",
        "Jason Schwartzman",
      ],
      runtime: 147,
      rating: 7.9,
    },
    "The Grand Budapest Hotel": {
      rating: 8.1,
      runtime: 159,
      year: 2014,
      plot: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
      cast: ["Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric"],
    },
  };

  document.getElementById("Darjeeling").innerHTML = 
  "PLOT: " + movieData["The Darjeeling Limited"].plot + " " + "<br />" + "<br />" + 
  "RATING: " + movieData["The Darjeeling Limited"].rating + " " + "<br />" + "<br />" + 
  "YEAR: " + movieData["The Darjeeling Limited"].year + " " + "<br />" + "<br />" + 
  "CAST: " + movieData["The Darjeeling Limited"].cast + " " + "<br />" + "<br />" + 
  "RUNTIME: " + movieData["The Darjeeling Limited"].runtime + " minutes"; //how to get gaps in cast?


// alert(movieData) //https://www.freecodecamp.org/news/object-object-in-javascript-meaning-in-js/ alert(JSON.stringify(movieData));

