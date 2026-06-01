// const API_KEY = "AIzaSyCFtlUTd3FJ9PPPo9IxebNc3lJqd1B_a-0"
// const CHANNEL_ID = "UCKnMLdK7r4tlbH38heG8lUg"

// Construct the API URL
// const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CHANNEL_ID}&key=${API_KEY}`;

// Fetch subscriber data
// fetch(url)
  // .then(response => response.json())
  // .then(data => {
    // const subCount = data.items[0].statistics.subscriberCount;
    // document.getElementById("subcount").textContent = Number(subCount).toLocaleString()
    // console.log(subCount)
  // })
  // .catch(error => {
    // console.error("Error fetching subscriber data:", error);
    // document.getElementById("subcount").textContent = "Failed to load";
  // });

  // above stuff was made by chatgpt, i am shameful of this, as well as part of the stuff
  // below this


async function loadCharacter() {
    const params = new URLSearchParams(window.location.search);

    const paramaram = params.get("data");

    const aresponse =
        await fetch(`/slips/data/datajson/${paramaram}.json`);

    const data =
        await aresponse.json();

    console.log(data);
    if (data.type == "character") {
      // CHARACTER STUFF
      document.getElementById("wName").textContent =
        data.name;

      document.getElementById("wSpecies").textContent =
        data.species;

      document.getElementById("wAge").textContent =
        data.age;

      document.getElementById("wGender").textContent =
        data.gender;

      document.getElementById("wOrientation").textContent =
        data.orientation;

      document.getElementById("wStatus").textContent =
        data.status;

      document.getElementById("wEmployed").textContent =
        data.employed;

      document.getElementById("wQuote").innerHTML =
        data.quote;

      document.getElementById("wBio").innerHTML =
        data.bio;

    } else if (data.type == "place") {
      // PLACES STUFF
      document.getElementById("wName").textContent =
        data.name;

      document.getElementById("wFloors").textContent =
        data.floors;

      document.getElementById("wLocation").textContent =
        data.location;

      document.getElementById("wQuote").textContent =
        data.quote;

      document.getElementById("wBio").innerHTML =
        data.bio;

      if (data.hasFloorPlan == true) {
        document.getElementById("floorplancolumnelement").style.display = "block";

        const galleryl =
        document.getElementById("wikigalleryrowlarger");
        
        for (const imagePath of data.gallerylarger) {
          const img =
              document.createElement("img");

          img.src = `/media/slips/${imagePath}`;

          galleryl.appendChild(img);
        }
      }
    }

    document.getElementById("wBannerImg").src =
        `/media/slips/${data.bannerImg}`;

    const gallery =
    document.getElementById("wikigalleryrow");
    

    for (const imagePath of data.gallery) {
        const img =
            document.createElement("img");

        img.src = `/media/slips/${imagePath}`;

        gallery.appendChild(img);
    }
}

loadCharacter();