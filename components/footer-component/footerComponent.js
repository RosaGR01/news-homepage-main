import { LitElement, html, css } from 'lit-element';

class FooterCOmponent  extends LitElement {
    static get styles() {
      return css`
        :host {
          display: block;
          height: 80px;
        }
        footer{
            display: flex;
            width:100%;
            height: 80px;
        }
        section{
            display : flex;
        }
        .container-info{
            margin: 0 15px;
        }
        .margin{
            margin-top:0;
        }
        .color{
            color:var(--Very-dark-blue);
        }
        @media (max-width:500px) {
          footer{
            flex-direction: column;
          }
          section{
            margin: 10px 0;
          }
          section img{
            width: 70px
          }
        }
      `;
    }

  constructor() {
    super();
  }

  render() {
    return html`
      <footer>
        <section>
            <img src="assets/images/image-retro-pcs.jpg" alt="">
            <div class="container-info">
            <h1 class="margin">01</h1>
            <h3 class="margin color">Reviving Retro PCs</h3>
            <p class="margin"> What happens when old PCs are given modern upgrades?</p>
            </div>
        </section>

        <section>
            <img src="assets/images/image-top-laptops.jpg" alt="">
            <div class="container-info">
            <h1 class="margin">02</h1>
            <h3 class="margin color">Top 10 Laptops of 2022</h3>
            <p class="margin">Our best picks for various needs and budgets.</p>
            </div>
        </section>

        <section>
            <img src="assets/images/image-gaming-growth.jpg
            
            " alt="">
            <div class="container-info">
            <h1 class="margin">03</h1>
            <h3 class="margin color">The Growth of Gaming</h3>
            <p class="margin">How the pandemic has sparked fresh opportunities.</p>
            </div>
        </section>
    </footer>
    `;
  }
}


customElements.define('footer-component', FooterCOmponent);
