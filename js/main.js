const API_KEY = "AIzaSyCFtlUTd3FJ9PPPo9IxebNc3lJqd1B_a-0"
const CHANNEL_ID = "UCKnMLdK7r4tlbH38heG8lUg"

// Construct the API URL
const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CHANNEL_ID}&key=${API_KEY}`;

// Fetch subscriber data
fetch(url)
  .then(response => response.json())
  .then(data => {
    const subCount = data.items[0].statistics.subscriberCount;
    document.getElementById("subcount").textContent = Number(subCount).toLocaleString()
    console.log(subCount)
  })
  .catch(error => {
    console.error("Error fetching subscriber data:", error);
    document.getElementById("subcount").textContent = "Failed to load";
  });

  // above stuff was made by chatgpt, i am shameful of this, as well as part of the stuff
  // below this


async function loadCharacter() {
    const params = new URLSearchParams(window.location.search);

    const characterName = params.get("char");

    const response =
        await fetch(`/slips/characters/charactersjson/${characterName}.json`);

    const character =
        await response.json();

    console.log(character);

    document.getElementById("wName").textContent =
      character.name;

    document.getElementById("wSpecies").textContent =
      character.species;

    document.getElementById("wAge").textContent =
      character.age;

    document.getElementById("wGender").textContent =
      character.gender;

    document.getElementById("wOrientation").textContent =
      character.orientation;

    document.getElementById("wStatus").textContent =
      character.status;

    document.getElementById("wEmployed").textContent =
      character.employed;

    document.getElementById("wQuote").innerHTML =
      character.quote;

    document.getElementById("wBio").innerHTML =
      character.bio;

    document.getElementById("wBannerImg").src =
      `/media/slips/${character.bannerImg}`;

    const gallery =
    document.getElementById("wikigalleryrow");

    for (const imagePath of character.gallery) {
        const img =
            document.createElement("img");

        img.src = `/media/slips/${imagePath}`;

        gallery.appendChild(img);
    }
}

loadCharacter();