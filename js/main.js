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

// wowhellothere

wowhellothereimages = ["nico.png", "archie.png"]

const whtrndpick = wowhellothereimages[Math.floor(Math.random() * wowhellothereimages.length)];
document.getElementById("wowhellothereimg").src = "media/websiteassets/wowhellothere/" + whtrndpick;
document.getElementById("wowhellotherep").textContent = ">> greeter (" + whtrndpick + ")" + "\n refresh for a another random image! \n probability of every image: 50%";