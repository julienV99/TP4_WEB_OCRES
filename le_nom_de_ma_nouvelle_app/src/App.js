import React from 'react';
import './App.css';
import photoProfil from './photoProfil.png';



class Accueil extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
          img : photoProfil,
          firstname: 'Julien',
          lastname: 'Vidilla',
          birthday : "02/08/1999",
          Post : "Posté le 25/10/2020, Voici un tp4",
          count: 218,

    };
  }

  afficherProfils(i){
    const profils = [
      {
          img : photoProfil,
          firstname: 'Jeanne',
          lastname: 'Holot',
          birthday : "01/01/1999",
          Post : "Posté le 25/10/2020, Coucouuuuuu :D",
          count: 120,
      },

      {
          img : photoProfil,
          firstname: 'Martine',
          lastname: 'Vedella',
          birthday : "02/01/1999",
          Post : "Posté le 25/10/2020, Merciiii mes fans",
          count: 30,
      },

      {
          img : photoProfil,
          firstname: 'Claude',
          lastname: 'Legaucher',
          birthday : "03/01/1999",
          Post : "Posté le 25/10/2020, Je vous aimes tous !",
          count: 350,
      }
    ];
  
  this.setState({
      img: profils[i].img,
      lastname: profils[i].lastname,
      firstname: profils[i].firstname,
      birthday: profils[i].birthday,
      Post : profils[i].Post,
      count: profils[i].count,

    })
  }

  addLike(){
    this.setState({
      count: this.state.count + 1

    });

  } 


changeColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {

    return (
      <div>
        <div className="Accueil" align="middle">
          <button class="btn btn-default pull-right"  onClick={()=>{this.afficherProfils(0)}}>
            Jeanne
          </button>
          {"  "}
          <button class="btn btn-default pull-right"  onClick={()=>{this.afficherProfils(1)}}>
            Martine
          </button>
          {"  "}
          <button class="btn btn-default pull-right"  onClick={()=>{this.afficherProfils(2)}}>
            Claude
          </button>
        </div>
        <div className="profil" align="center">
          <Profil img={this.state.img} firstname={this.state.firstname} lastname={this.state.lastname} birthday={this.state.birthday}/>
          <button class="btn btn-default pull-right"  onClick={this.changeColor.bind(this)}>Change style
          </button>
        </div>
        <div className="Post" >
          <Post Post={this.state.Post}/>
          <button class="btn btn-default pull-right" onClick={()=>{this.addLike()}}> C'est super ! {this.state.count} Likes 
          </button>

        </div>
        
      </div>
    );
  }
}

class Profil extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lastname: null,
      firstname: null,
      birthday: null,
      img: null,
      Post: null
    };
  }

  render() {

    return ( 
    <div>
      <img src={this.props.img}/> 
      <p>Prenom : {this.props.firstname}</p> 
      <p>Nom : {this.props.lastname}</p>
      <p>Birthday : {this.props.birthday}</p>
    </div>
    );
  }
}

class Post extends React.Component {
  render() {
    return (
      <div>
        Dernier Post : {this.props.Post}
      </div>
    );
  }
}



  

  export default Accueil;
