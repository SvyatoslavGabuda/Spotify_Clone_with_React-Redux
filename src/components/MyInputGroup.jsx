import { Button, Form } from "react-bootstrap";

const MyInputGroup = () => {
  let headers = new Headers({
    // sets the headers
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    "X-RapidAPI-Key": "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
  });
  // const search = async () => {
  //   let div = document.querySelector("#searchResults .row");
  //   div.innerHTML = "";
  //   let searchQuery = document.querySelector("#searchField").value; // gets the value from the search box

  //   if (searchQuery.length > 2) {
  //     //if there's a value in the search box => fetch the information from rapidapi & display the result
  //     document.querySelector("#searchResults").style.display = "block";

  //     try {
  //       let response = await fetch(
  //         "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + searchQuery,
  //         {
  //           method: "GET",
  //           headers,
  //         }
  //       ); // gets the information

  //       if (response.ok) {
  //         let result = await response.json(); // transforms the response to json
  //         let songs = result.data; // gets the songs info

  //         for (let x = 0; x < result.data.length; x++) {
  //           div.innerHTML += albumCard(result.data[x]);
  //         }
  //       } else {
  //         console.log("error");
  //       }
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   } else {
  //     //else just hide the section!
  //     document.querySelector("#searchResults").style.display = "none";
  //   }
  // };

  return (
    <>
      <Form className="input-group mt-3">
        <Form.Group className="">
          <Form.Control type="text" placeholder="Search" id="searchField" className="mb-2" />
        </Form.Group>

        <Button className="btn btn-outline-secondary btn-sm" type="button">
          Go
        </Button>
      </Form>
    </>
  );
};

export default MyInputGroup;
