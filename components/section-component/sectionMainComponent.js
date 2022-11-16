import { LitElement, html, css } from 'lit-element';

export class SectionMAinCOmponent  extends LitElement {
    static get styles() {
      return css`
        :host {
          display: block;
          background-color: var(--Very-dark-blue);
        }
        section{
            padding:10px;
        }
        h1{
            color:var(--Soft-orange);
            font-size: 2rem;
        }
        .title-post{
          color: var(--Off-white);
          margin-bottom:0;
        }
        .text-post{
          color:var(--Grayish-blue);
          margin-top:7px
        }
        .bar{
          background-color:var(--Dark-grayish-blue);
          width:100%;
          height:.5px;
          margin: 22px 0;
        }
      `;
    }

  constructor() {
    super();
  }

  render() {
    return html`
        <section>
            <h1>
                New
            </h1>
            <div>
                <h3 class="title-post">Hydrogen VS Electric Cars</h3>
                <p class="text-post">Will hydrogen-fueled cars ever catch up to EVs?
                </p>
            </div>
            <div class="bar"></div>
            <div>
                <h3 class="title-post">The Downsides of AI Artistry</h3>
                <p class="text-post">  What are the possible adverse effects of on-demand AI image generation?
                </p>
            </div>
            <div class="bar"></div>
            <div>
                <h3 class="title-post">Is VC Funding Drying Up?</h3>
                <p class="text-post">  Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
            </div>
        </section>
    `;
  }
}



customElements.define('section-new', SectionMAinCOmponent);