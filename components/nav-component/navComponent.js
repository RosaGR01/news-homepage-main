import { LitElement, html, css } from 'lit-element';

export class NavCOmponent  extends LitElement {

  constructor() {
    super();
    const validar = false;
  }
  static get styles() {
    return css`
      :host {
        display: inline-block;
        width: 100%;
        height: 50px;
      }
      nav{
        display: flex;
        justify-content: space-between;
        margin: 20px;
      }
      .container-logo img{
        height:30px
      }
      .menu{
        display: flex;

      }
      .menu li{
        list-style: none;
        margin-left: 20px;
        font-size:1.3rem;
        font-weight: 500;
        color: var(--Dark-grayish-blue);
        );
      }
      .menu li:hover{
        color: var(--Soft-orange);
      }
      .container-menu__mobile{
        display: none;
      }
      .container-menu__mobile button{
        background-color: var(--Off-white);
        border: none;
      }

      .main-header{
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: white;
        padding: 0 0.4rem;
      }
      
      .main-logo{
        color: black;
        font-size:32px;
        text-decoration:none;
      }
      
      .main-nav{
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100%;
        margin-left: -100%;
        transition: all .2s linear;
        background-color: rgba(0,0,0,.7);
        z-index: 100;
      }
      
      .main-nav.show{
        margin-left: 0;
      }
      
      .nav-links{
        background-color: rgb(250,250,250);
        display: flex;
        flex-direction: column;
        width: 70%;
        height: 100%;
        align-items: center;
        justify-content: flex-start;
      }
      
      .link-item{
        margin-top: 2rem;
        color: #444444;
        text-decoration: none;
        font-weight: bold;
        position: relative;
      }
      
      .link-item::after {
        position: absolute;
        content: "";
        background-color: black;
        bottom: -5px;
        left: 0;
        width: 0%;
        height: 3px;
        transition: 0.3s ease all;
      }
      
      .link-item:hover::after {
        width: 100%;
      }
      
      .button-menu{
        z-index: 200;
        width: 40px;
        height: 40px;
        border: none;
        display: flex;
        background: none;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }
      
      .button-menu span{
        width: 37px;
        height: 4px;
        margin-bottom: 5px;
        position: relative;
        background: #444444;
        border-radius: 3px;
        transform-origin: 4px 0px;
        transition: all .2s linear;
      }
      
      .button-menu.close span {
        opacity: 1;
        transform: rotate(45deg) translate(0px, 0px);
        background: #ffffff;
      }
      
      .button-menu.close span:nth-child(2){
        transform: rotate(-45deg) translate(-8px, 5px);
      }
      
      .button-menu.close span:nth-child(3){
        display: none;
      }
      
      
      @media screen and (min-width:768px) {
        .button-menu{
          display: none;
        }
      
        .main-logo{
          flex-basis: 30%;
        }
      
        .main-nav{
          position: static;
          margin-left: 0;
          flex-basis: 70%;
          height: 100%;
        }
      
        .nav-links{
          width: 100%;
          flex-direction: row;
          flex-wrap: wrap;
          align-items: center;
          justify-content: flex-end;
          background: white;
        }
      
        .link-item{
          display: inline-block;
          margin-top: 0;
          margin-right: 2rem;
        }
      }


      @media (max-width: 520px) {
        .container-menu__mobile{
            display: block;
        }
        .container-menu{
            display: none;
        }
    }
    

    `;
  }
  render() {
    return html`
    <nav>
        <div class="container-logo">
            <img src="./assets/images/logo.svg" alt="logo w.">
        </div>
        <div class="container-menu__mobile">
        <nav id="nav" class="main-nav" >
            <div class="nav-links" >
              <a class="link-item" href="#" >Link1</a>
              <a class="link-item" href="#" >Link2</a>
              <a class="link-item" href="#" >Link3</a>
              <a class="link-item" href="#" >Link4</a>
            </div>
          </nav>
          <button id="button-menu" class="button-menu" @click="accion()">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div class="container-menu">
            <ul class="menu">
              <li>Home</li>
              <li>New</li>
              <li>Popular</li>
              <li>Trending</li>
              <li>Categories</li>
            </ul>
        </div>
    </nav>
    `;

  }
  accion(){
    const toggleButton = document.getElementById('button-menu')
    const navWrapper = document.getElementById('nav')

    toggleButton.addEventListener('click',() => {
      toggleButton.classList.toggle('close')
      navWrapper.classList.toggle('show')
    })

    navWrapper.addEventListener('click',e => {
      if(e.target.id === 'nav'){
        navWrapper.classList.remove('show')
        toggleButton.classList.remove('close')
      }
    })
  }
}
// const toggleButton = document.getElementById('button-menu')
// const navWrapper = document.getElementById('nav')

// toggleButton.addEventListener('click',() => {
//   toggleButton.classList.toggle('close')
//   navWrapper.classList.toggle('show')
// })

// navWrapper.addEventListener('click',e => {
//   if(e.target.id === 'nav'){
//     navWrapper.classList.remove('show')
//     toggleButton.classList.remove('close')
//   }
// })
customElements.define('nav-component', NavCOmponent);