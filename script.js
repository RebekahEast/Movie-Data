let movieData = {
    "The Darjeeling Limited": {
      plot: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
      cast: ["Jason Schwartzman", " Owen Wilson", " Adrien Brody"],
      runtime: 151,
      rating: 7.2,
      year: 2007,
    },
    "The Royal Tenenbaums": {
      plot: "The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons",
      rating: 7.6,
      year: 2001,
      cast: ["Gene Hackman", " Gwnyeth Paltrow", " Anjelica Huston"],
      runtime: 170,
    },
    "Fantastic Mr. Fox": {
      year: 2009,
      plot: "An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers' retaliation.",
      cast: [
        "George Clooney",
        " Meryl Streep",
        " Bill Murray",
        " Jason Schwartzman",
      ],
      runtime: 147,
      rating: 7.9,
    },
    "The Grand Budapest Hotel": {
      rating: 8.1,
      runtime: 159,
      year: 2014,
      plot: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
      cast: ["Ralph Fiennes", " F. Murray Abraham", " Mathieu Amalric"],
    },
  };

  document.getElementById("Darjeeling").innerHTML = 
  "The Darjeeling Limited" + "<br />" + "<br />" +
  "PLOT: " + movieData["The Darjeeling Limited"].plot + " " + "<br />" + "<br />" + 
  "RATING: " + movieData["The Darjeeling Limited"].rating + " " + "<br />" + "<br />" + 
  "YEAR: " + movieData["The Darjeeling Limited"].year + " " + "<br />" + "<br />" + 
  "CAST: " + movieData["The Darjeeling Limited"].cast + " " + "<br />" + "<br />" + 
  "RUNTIME: " + movieData["The Darjeeling Limited"].runtime + " minutes"; 

  document.getElementById("Tenenbaums").innerHTML = 
  "The Royal Tenenbaums" + "<br />" + "<br />" +
  "PLOT: " + movieData["The Royal Tenenbaums"].plot + " " + "<br />" + "<br />" + 
  "RATING: " + movieData["The Royal Tenenbaums"].rating + " " + "<br />" + "<br />" + 
  "YEAR: " + movieData["The Royal Tenenbaums"].year + " " + "<br />" + "<br />" + 
  "CAST: " + movieData["The Royal Tenenbaums"].cast + " " + "<br />" + "<br />" + 
  "RUNTIME: " + movieData["The Royal Tenenbaums"].runtime + " minutes"; 

  document.getElementById("Fantastic").innerHTML = 
  "Fantastic Mr. Fox" + "<br />" + "<br />" +
  "PLOT: " + movieData["Fantastic Mr. Fox"].plot + " " + "<br />" + "<br />" + 
  "RATING: " + movieData["Fantastic Mr. Fox"].rating + " " + "<br />" + "<br />" + 
  "YEAR: " + movieData["Fantastic Mr. Fox"].year + " " + "<br />" + "<br />" + 
  "CAST: " + movieData["Fantastic Mr. Fox"].cast + " " + "<br />" + "<br />" + 
  "RUNTIME: " + movieData["Fantastic Mr. Fox"].runtime + " minutes"; 

  document.getElementById("Budapest").innerHTML = 
  "The Grand Budapest Hotel" + "<br />" + "<br />" +
  "PLOT: " + movieData["The Grand Budapest Hotel"].plot + " " + "<br />" + "<br />" + 
  "RATING: " + movieData["The Grand Budapest Hotel"].rating + " " + "<br />" + "<br />" + 
  "YEAR: " + movieData["The Grand Budapest Hotel"].year + " " + "<br />" + "<br />" + 
  "CAST: " + movieData["Fantastic Mr. Fox"].cast + " " + "<br />" + "<br />" + 
  "RUNTIME: " + movieData["Fantastic Mr. Fox"].runtime + " minutes"; 

  const panels = document.querySelectorAll('.panel')
  const box = document.createElement("div");
  box.class = "panel";

  panels.forEach(panel => {
      panel.addEventListener('click', () => {
          removeActiveClasses()
          panel.classList.add('active')
      })
  })
  
  function removeActiveClasses() {
    const all_panels = document.querySelectorAll('.panel')
    all_panels.forEach(panel => {
      panel.classList.remove('active')
    })
  }


var form = document.getElementById("input");


form.addEventListener('submit', function(event){ 
    event.preventDefault(); 
    var title = document.getElementById("name").value;
    var cast = document.getElementById("cast").value;
    var year = document.getElementById("year").value;
    var runtime = document.getElementById("runtime").value;
    var plot = document.getElementById("plot").value;
    let rating = document.getElementById("rating").value;
    let display_comment = document.createElement("div");
    display_comment.className = 'panel';

    console.log(title);
    console.log(cast);
    console.log(year);
    console.log(plot);
    console.log(rating);

    display_comment.innerHTML = title + "<br>" + "<br>" + "PLOT: " + plot + "<br>" + "<br>" + "RATING: " + rating + "<br>" + "<br>" + "YEAR: " + year + "<br>" + "<br>" + "CAST: " + cast + "<br>" + "<br>" + "RUNTIME: " + runtime + " minutes"; 
 
    console.log(display_comment);

    var container = document.getElementById("container");
    
    container.appendChild(display_comment);

    display_comment.addEventListener('click', () => {
      removeActiveClasses()
      display_comment.classList.add('active')
  })

    event.target.reset() 
})


function appending_comment(){
  var div_submitted = document.getElementById('created_div');
  if (div_submitted.style.display == 'none') {
    div_submitted.style.display = 'block';
    document.body.appendChild(box);
  }
}
