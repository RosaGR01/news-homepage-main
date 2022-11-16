import { LitElement, html, css } from 'lit-element';

export class MainCOmponent  extends LitElement {
    static get styles() {
      return css`
        :host {
          display: block;
          width: 100%;
          height: 20%;
         
        }
        .banner{
            width: 100%;
            margin-top:25px
        }
        .banner img{
            width: 100%;
            height: 150px;
        }
        .container-art{
            width:100%;
            display:flex;
        }
        .container-question{
            width: 100%;
            margin-right: 40px;
        }
        .container-question h2{
            font-size:3rem ;
            font-weight: 900;
            line-height: 2.8rem;
            color: var(--Very-dark-blue);
        }
        .container-art p{
          line-height: 1.5rem;
        }
        button{
            width: 120px;
            height:25px;
            margin: 20px 0;
            border:none;
            font-size: .7rem;
            letter-spacing:2.8px;
            color:var(--Off-white);
            background-color:var(--Soft-red);
        }
        @media (max-width:500px) {
          .banner img{
            height: 250px;
          }
          .container-art{
            flex-direction: column;
          }
        }
      `;
    }

  constructor() {
    super();
  }

  render() {
    return html`
      <main>
        <div class="banner">
          <picture>
            <source srcset="./assets/images/image-web-3-desktop.jpg"
                    media="(min-width: 500px)">
            <source srcset="./assets/images/image-web-3-mobile.jpg"
            media="(max-width: 499px)">
            <img src="./assets/images/image-web-3-desktop.jpg" alt="">
          </picture>
        </div>
        <section class="container-art">
            <div class="container-question"> 
            <h2>The Bright Future of Web 3.0?</h2> 
            </div>
            <div>
            <p>  We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
            But is it really fulfilling its promise?</p>
            <button>REAND MORE</button>
            </div>
        </section>
    </main>
    `;
  }
}


customElements.define('main-component', MainCOmponent);