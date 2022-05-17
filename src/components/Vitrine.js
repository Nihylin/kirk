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
      <div className="landing">
        <img src="img/kirkCouleur.png" alt="" />
        <p>C'est nous qu'on fait les meilleurs trucs à manger dans tout l'espace de l'univers. Et ouais.</p>
      </div>

      <div className="firstSection">
        <div className="firstLeft">
          <div className="niktmor">
            <h2>Nos produits sont validé par les meilleurs</h2>
            <p>Les plus grand gourmets on testé est validé nos produits, nos produits sont donc parfait pour tout les palais et mâchoires de tout nos clients. 
            </p>
            <div className="grid">
              <img src="https://img.lemde.fr/2017/12/07/0/0/3500/2333/664/0/75/0/3892f92_PJ401_FILM-STARWARS-ALIENLIFE_1207_11.JPG" alt="" />
              <img src="https://www.presse-citron.net/app/uploads/2022/03/8-starwarsepisode3larevan_ver_1_0.jpg" alt="" />
              <img src="https://static.hitek.fr/img/actualite/2015/03/fb_cn.webp" alt="" />
              <img src="https://www.netcost-security.fr/wp-content/uploads/2022/01/1643629327_Alien-cetait-la-fin-alternative-du-film-original-qui-758x426.jpg" alt="" />
              <img src="https://i.ebayimg.com/images/g/MEIAAOSwwYpawBEr/s-l1600.jpg" alt="" />
              <img src="https://admin-blogs.lalibre.be/app/uploads/sites/2/2013/05/3529764758-1-1.jpg" alt="" />
            </div>
          </div>
        </div>

        <div className="firstRight">
          <div className="beztamer">
            <img src="https://vl-media.fr/wp-content/uploads/2017/09/Star-Trek-The-Next-Generation-Season-6-Postere-mzhxkkr2igdohkdzr8s0oi0agsx062crtg181on27s.jpg" alt="" />
            <div>
              <h3>Les meilleurs produits de toute les galaxies</h3>
              <p>Notre équipage a parcourue les plus grandes galaxies afin de vous proposer les meilleurs produits, la technologie de spook industrie nous permet égalment une congélation de nos produit aussi rapidement qu'un Han Solo dans de la carbonite. </p>
            </div>
          </div>
        </div>
      </div>

      <div className="secondSection">
        <div className="secondLeft">
          <img src="https://www.journaldugeek.com/content/uploads/2021/12/template-jdg-28.jpg" alt="" />
        </div>

        <div className="secondRight">
          <h3>Les meilleurs avantages l'univers</h3>
          <p>yIDoghQo,Duj tIvoqtaH ! Qui veut dire en Klingont "NE SOIT PAS RIDICULE ET FIE TOI A TON INSTINCT JEUNE KENOBI ! TAIS TOI ET ACHETE LES PRODUIT KIRK ! </p>
          <ul>
            <li>
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/40/USS_Enterprise_NCC-1701-A.png" alt="" />
              <p>Une livraison à la vitesse de la lumière.</p>
            </li>
            <li>
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/40/USS_Enterprise_NCC-1701-A.png" alt="" />
              <p>Une selection de produits faites par nos experts.</p>
            </li>
            <li>
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/40/USS_Enterprise_NCC-1701-A.png" alt="" />
              <p>Une fraicheur sans égale dans toute la galaxie.</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="thirdSection">
        <h2>Snap photos and share like never before</h2>
        <div className="thirdInner">
          <div className="thirdInnerFirst">
            <img  src="https://2geekswhoeat.com/wp-content/uploads/2017/03/Thermal-Detonator-595x397.jpg" alt="" style={{width:"500px",height:"300px"}}/>
            <h3>Les meilleurs boulettes de viande</h3>
            <p>Nos boulettes sont la sélection des animaux les plus tendre de la galaxie d'andromède, des porgs, des wookie et une pincé de xenomorph pour l'acidité.</p>
            <button>Learn more</button>
          </div>
          <div className="thirdInnerSecond">
            <img  src="https://starwarsblog.starwars.com/wp-content/uploads/2022/03/star-wars-padawan-cookbook-cover_TALL.jpg" alt="" style={{width:"500px",height:"300px"}}/>
            <h3>Les meilleur samoussas de tout P3X-P89</h3>
            <p>Une seule bouchée suffit à nourrir l'estomac d'un adult sauf si votre nom est Merry ou bien Peppin.</p>
            <button>Learn more</button>
          </div>
        </div>
      </div>

      <div className="fourthSection">
        <h2>Une sélection de nos produits les plus populaire.</h2>
        
        <div className="fourthGrid">
          <img src="https://www.paysanbretonsurgeles.com/m_enhance/191?style_name=product_pack_920_920_2x&filename=750g_Poelee_Fromagere&ext=png&h=460&w=460&rule=460w" alt="" />
          <img src="https://www.paysanbretonsurgeles.com/sites/default/files/styles/product_pack_920_920_2x/public/2021-01/brocolis-bio-sticker.png?itok=ZPDsTefZ" alt="" />
          <img src="https://fr.openfoodfacts.org/images/products/318/403/427/8943/front_fr.14.full.jpg" alt="" />
          <img src="https://www.paysanbretonsurgeles.com/sites/default/files/styles/product_pack_920_920_2x/public/2021-12/panais_paysanbreton.png?itok=4o7mH2dw" alt="" />
          <img src="https://www.paysanbretonsurgeles.com/sites/default/files/styles/product_pack_920_920_2x/public/2021-12/haricots-blancs_paysanbreton.png?itok=coPI22eX" alt="" />
          <img src="https://www.paysanbretonsurgeles.com/sites/default/files/styles/product_pack_920_920_2x/public/2021-12/Patate_Douce_paysanbreton.png?itok=kftQx9Wb" alt="" />
          <img src="https://www.paysanbretonsurgeles.com/sites/default/files/styles/product_pack_920_920_2x/public/2020-09/haricots-verts-d%C3%A9j%C3%A0-cuit-paysan-breton.png?itok=yLoTwV7q" alt="" />
          <img src="https://www.paysanbretonsurgeles.com/sites/default/files/styles/product_pack_920_920_2x/public/2021-12/trio-poivrons-_paysanbreton.png?itok=IrIpeHSY" alt="" />
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
      <div className="copyrights">
        <p>Copyright © 2022 · Registered in France.</p>
      </div>
    </footer>
    </>
  );
}

export default Vitrine;
