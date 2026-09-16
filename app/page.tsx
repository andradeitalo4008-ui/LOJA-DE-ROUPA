import Image from 'next/image';
import { ArrowUpRight, Instagram, Menu, ShoppingBag, Star } from 'lucide-react';

const products = [
  {
    name: 'Camiseta Oversized Blackout',
    price: 'R$ 189,90',
    tag: 'BEST-SELLER',
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1000&q=85',
  },
  {
    name: 'Moletom Concrete',
    price: 'R$ 329,90',
    tag: 'NOVO DROP',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=1000&q=85',
  },
  {
    name: 'Calça Cargo Underground',
    price: 'R$ 279,90',
    tag: 'LIMITADO',
    image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=1000&q=85',
  },
];

export default function Home() {
  return (
    <main>
      <div className="ticker"><span>FRETE GRÁTIS ACIMA DE R$ 399</span><span>10% OFF NO PIX</span><span>DROPS LIMITADOS</span></div>

      <header className="header wrap">
        <button className="icon-button menu" aria-label="Abrir menu"><Menu size={22} /></button>
        <a href="#" className="logo">STREET<span>WAVE</span></a>
        <nav>
          <a href="#drop">NOVO DROP</a><a href="#produtos">MASCULINO</a><a href="#produtos">FEMININO</a><a href="#manifesto">A MARCA</a>
        </nav>
        <button className="icon-button" aria-label="Sacola"><ShoppingBag size={21} /><b>0</b></button>
      </header>

      <section className="hero" id="drop">
        <Image src="https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=2000&q=90" alt="Coleção streetwear Street Wave" fill priority sizes="100vw" />
        <div className="hero-shade" />
        <div className="hero-content wrap">
          <p className="eyebrow">DROP 01 — 2026</p>
          <h1>NÃO SIGA<br />A RUA.<br /><em>CRIE A SUA.</em></h1>
          <p className="hero-copy">Peças limitadas para quem transforma presença em identidade.</p>
          <a className="primary" href="#produtos">CONHECER O DROP <ArrowUpRight size={19} /></a>
        </div>
        <div className="hero-index">01 / 03</div>
      </section>

      <section className="statement wrap">
        <p>MAIS QUE ROUPA</p>
        <h2>STREETWEAR PARA QUEM<br /><span>NÃO PEDE PERMISSÃO.</span></h2>
      </section>

      <section className="products wrap" id="produtos">
        <div className="section-head"><div><p className="eyebrow">ESCOLHAS DA SEMANA</p><h2>DESTAQUES</h2></div><a href="#produtos">VER TUDO <ArrowUpRight size={18} /></a></div>
        <div className="product-grid">
          {products.map((product) => (
            <article className="product" key={product.name}>
              <div className="product-image"><Image src={product.image} alt={product.name} fill sizes="(max-width: 760px) 100vw, 33vw" /><span>{product.tag}</span><button aria-label={`Adicionar ${product.name} à sacola`}><ShoppingBag size={18} /></button></div>
              <div className="product-info"><div><h3>{product.name}</h3><p>Unissex · P ao GG</p></div><strong>{product.price}</strong></div>
            </article>
          ))}
        </div>
      </section>

      <section className="manifesto" id="manifesto">
        <div className="manifesto-photo"><Image src="https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=1400&q=85" alt="Moda urbana autoral" fill sizes="(max-width: 800px) 100vw, 50vw" /></div>
        <div className="manifesto-copy"><p className="eyebrow">NOSSO MANIFESTO</p><h2>A RUA NÃO É TENDÊNCIA.<br />É ORIGEM.</h2><p>A Street Wave nasceu do movimento, do concreto e de quem escolhe escrever a própria história. Cada peça carrega atitude, conforto e autenticidade — sem excesso, sem cópia.</p><a href="#produtos">CONHEÇA A STREET WAVE <ArrowUpRight size={18} /></a></div>
      </section>

      <section className="reviews wrap">
        <div className="stars">{[1,2,3,4,5].map((n) => <Star key={n} size={18} fill="currentColor" />)}</div>
        <blockquote>“O caimento é absurdo e a qualidade surpreendeu. Virou minha peça favorita no primeiro uso.”</blockquote>
        <p>— RAFAEL M. · COMPRA VERIFICADA</p>
      </section>

      <section className="newsletter"><div className="wrap newsletter-inner"><div><p className="eyebrow">ENTRE PARA O MOVIMENTO</p><h2>RECEBA OS PRÓXIMOS DROPS<br />ANTES DE TODO MUNDO.</h2></div><form><label className="sr-only" htmlFor="email">Seu e-mail</label><input id="email" type="email" placeholder="SEU MELHOR E-MAIL" /><button type="submit" aria-label="Cadastrar e-mail"><ArrowUpRight /></button></form></div></section>

      <footer className="footer wrap"><a href="#" className="logo">STREET<span>WAVE</span></a><p>© 2026 STREET WAVE. TODOS OS DIREITOS RESERVADOS.</p><a href="#" aria-label="Instagram"><Instagram size={20} /></a></footer>
    </main>
  );
}
