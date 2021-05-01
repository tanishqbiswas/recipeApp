import React from "react";
import "./recipe.css";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
class Recipe extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      search: "",
      ims: "",
      value: 0,
      valueone: 0,
      nodata: "",
      catmeal: "",
      areameal: "",
      ingrd: [],
      ingms: [],
      bgColor: "",
      valuecolor: 0,
      desc: "",
      sourceurl: "",
      valuehead: 0,
      color: "black",
    };
  }

  searchHandler = (e) => {
    this.setState({
      search: e.target.value,
    });
    console.log(this.state.search);
  };

  findoneHandler = () => {
    // in this i called API if it will not execute then else will execute
    //and setting state according to need
    let that = this;

    var xmlhttp = new XMLHttpRequest();
    var url =
      "https://www.themealdb.com/api/json/v1/1/search.php?s=" +
      this.state.search;
    var data = [];
    xmlhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        if (JSON.parse(this.responseText).meals != null) {
          that.setState({
            value: 1,
            valuehead: 1,
            valueone: 0,
            name: JSON.parse(this.responseText).meals[0].strMeal,
            ims: JSON.parse(this.responseText).meals[0].strMealThumb,
            catmeal: JSON.parse(this.responseText).meals[0].strCategory,
            areameal: JSON.parse(this.responseText).meals[0].strArea,
            desc: JSON.parse(this.responseText).meals[0].strInstructions,
            sourceurl: JSON.parse(this.responseText).meals[0].strSource,
          });
          data = JSON.parse(this.responseText).meals;
          console.log("inner", data[0]);

          var b = data[0];
          console.log("outer", data);
          let arr = [];
          for (var key in b) {
            if (
              key.match("strIngredient") &&
              b[key] !== "" &&
              b[key] !== null
            ) {
              arr.push(b[key]);
            }
          }
          console.log(arr);
          that.setState({
            ingrd: arr,
          });
          // here I m aextracting weight measue of ingredients and above code is taking name of it
          let arrone = [];
          for (var val in b) {
            if (val.match("strMeasure") && b[val] !== "" && b[val] !== null) {
              arrone.push(b[val]);
            }
          }
          that.setState({
            ingms: arrone,
          });
        } else {
          that.setState({
            nodata: "No data found",
            value: 0,
            valueone: 1,
            valuehead: 1,
          });
        }
      }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
  };
  likeClickHandler = () => {
    //It will change the color of Heart border when we click it.
    if (this.state.color === "black") {
      this.setState({ color: "red" });
    } else {
      this.setState({ color: "black" });
    }
  };

  render() {
    return (
      <div>
        <div class="card text-white bg-warning">
          <div class="card-body">
            <div className="hd">Recipe Finder</div>
          </div>
        </div>
        <div class="card text-white bg-info">
          <div class="card-body">
            <div className="search">
              <input
                className="boxin"
                type="text"
                value={this.state.search}
                placeholder="Enter the Name of Dish"
                onChange={this.searchHandler}
              ></input>

              <button type="button" class="btn btn-danger"
                type="submit"
                onClick={this.findoneHandler.bind(this)}>Get Recipe</button>
            </div>
          </div>
        </div>

        {this.state.valuehead === 0 ? (
          <div className="hdone">
            Type a Dish Name to Search for it's ingredients
          </div>
        ) : (
          ""
        )}

        {this.state.value === 1 ? (
          <div className="contain">
            <div className="heading">
              <center>
                <a href={this.state.sourceurl} className="link">
                  <span className="headone">{this.state.name}</span>
                </a>
              </center>
              <center>
                <div className="like">
                  {/* Like functionality */}
                  <FavoriteBorderOutlinedIcon
                    className={this.state.color}
                    onClick={() => this.likeClickHandler()}
                  />
                </div>
              </center>
            </div>

            <div className="containerone">
              <div>
                <img src={this.state.ims} alt="food" className="pic" />
              </div>

              <div className="containertwo">
                <div>
                  <i>Category of Meal - </i> {this.state.catmeal}
                </div>
                <div>
                  <i>Area of the Meal - </i> {this.state.areameal}
                </div>
                <div>
                  <p className="ingrdhead">Ingredients</p>
                  <div id="box">
                    {/* this div for ingrd name */}

                    <span>
                      {this.state.ingrd.map((element) => {
                        return <p key={element}>{element} --- </p>;
                      })}
                    </span>
                    <span>
                      {this.state.ingms.map((element) => {
                        return (
                          <p key={this.state.ingms.indexOf(element)}>
                            {element}
                          </p>
                        );
                      })}
                    </span>

                    {/* this is for weight measure */}
                    <div>{}</div>
                  </div>
                </div>

                <div>
                  <center>
                    {" "}
                    <p className="ingrdhead">Recipes</p>
                  </center>
                  <div className="desc">{this.state.desc}</div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        {this.state.valueone === 1 ? (
          <div>
            <center>No Data Has been recieved</center>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
export default Recipe;
