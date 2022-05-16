import { useEffect, useState } from 'react';
import axios from 'axios';
import { createPortal } from 'react-dom';
import { typeImplementation } from '@testing-library/user-event/dist/type/typeImplementation';


function Vitrine() {
  return (
    <>
    <header>
      <img src="img/horizontalBlanc.png" alt="PROUT" />
      <nav>
        <a href="/produit">Boutique</a>
        <a href="">Contact</a>
        <a href="">À propos</a>
      </nav>
    </header>

    <main>
      <div class="landing">
        <img src="img/kirkCouleur.png" alt="" />
        <p>C'est nous qu'on fait les meilleurs trucs à manger dans tout l'espace de l'univers. Et ouais.</p>
      </div>

      <div class="firstSection">
        <div class="firstLeft">
          <div class="niktmor">
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p>Lorem ipsum dolor sit amet. Qui itaque sequi et iste itaque ab sunt consequuntur qui dolores nisi quo voluptatem provident.</p>
            <div class="grid">
              <img src="img/financier.jpg" alt="" />
              <img src="img/financier.jpg" alt="" />
              <img src="img/financier.jpg" alt="" />
              <img src="img/financier.jpg" alt="" />
              <img src="img/financier.jpg" alt="" />
              <img src="img/financier.jpg" alt="" />
            </div>
          </div>
        </div>

        <div class="firstRight">
          <div class="beztamer">
            <img src="img/financier.jpg" alt="" />
            <div>
              <h3>Sed ut perspiciatis unde omnis</h3>
              <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="secondSection">
        <div class="secondLeft">
          <img src="img/financier.jpg" alt="" />
        </div>

        <div class="secondRight">
          <h3>Sed ut perspiciatis unde omnis</h3>
          <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.</p>
          <ul>
            <li>
              <img src="img/financier.jpg" alt="" />
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptate</p>
            </li>
            <li>
              <img src="img/financier.jpg" alt="" />
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptate</p>
            </li>
            <li>
              <img src="img/financier.jpg" alt="" />
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptate</p>
            </li>
          </ul>
        </div>
      </div>

      <div class="thirdSection">
        <h2>Snap photos and share like never before</h2>
        <div class="thirdInner">
          <div class="thirdInnerFirst">
            <img src="img/financier.jpg" alt="" />
            <h3>Sed ut perspiciatis</h3>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.</p>
            <button>Learn more</button>
          </div>
          <div class="thirdInnerSecond">
            <img src="img/financier.jpg" alt="" />
            <h3>Sed ut perspiciatis</h3>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.</p>
            <button>Learn more</button>
          </div>
        </div>
      </div>

      <div class="fourthSection">
        <h2>You’re in good company</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
        <div class="fourthGrid">
          <img src="img/financier.jpg" alt="" />
          <img src="img/financier.jpg" alt="" />
          <img src="img/financier.jpg" alt="" />
          <img src="img/financier.jpg" alt="" />
          <img src="img/financier.jpg" alt="" />
          <img src="img/financier.jpg" alt="" />
          <img src="img/financier.jpg" alt="" />
          <img src="img/financier.jpg" alt="" />
        </div>
      </div>

    </main>

    <footer>
      <img src="img/kirkCouleur.png" alt="" />
      <nav>
        <a href="/boutique">Boutique</a>
        <a href="">Contact</a>
        <a href="">À propos</a>
      </nav>
      <div class="copyrights">
        <p>Copyright © 2022 · Registered in France.</p>
      </div>
    </footer>
    </>
  );
}

export default Vitrine;
