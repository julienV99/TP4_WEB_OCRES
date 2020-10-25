import React from 'react';
import './App.css';
import photoProfil from './photoProfil.png';



class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
          img : photoProfil,
          firstname: 'Jeanne',
          lastname: 'Holot',
          birthday : "01/01/1999",
          Post : "Posté le 25/10/2020, Coucouuuuuu :D",
          count: 0,
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
      },

      {
        img : photoProfil,
        firstname: 'Martine',
          lastname: 'Vedella',
          birthday : "02/01/1999",
          Post : "Posté le 25/10/2020, Merciiii mes fans",
      },

      {
        img : photoProfil,
        firstname: 'Claude',
          lastname: 'Legaucher',
          birthday : "03/01/1999",
          Post : "Posté le 25/10/2020, Je vous aimes tous !",
    
      }
    ];
  
  this.setState({
      img: profils[i].img,
      lastname: profils[i].lastname,
      firstname: profils[i].firstname,
      birthday: profils[i].birthday,
      Post : profils[i].Post,

    })
  }

  addLike(){
    this.setState({
      count: this.state.count + 1
    });

  }  

  render() {
    return (
      <div>
        <div className="navigation" align="middle">
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
        </div>
        <div className="Post" >
          <Post Post={this.state.Post}/>
          <button class="btn btn-default pull-right" onClick={()=>{this.addLike()}}> C'est super !!!! {this.state.count} Likes 
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



  

  export default Navigation;
