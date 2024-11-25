import s from './inicio.module.scss'
import imagem1 from '../../assets/imagem1.png'
import imagem2 from '../../assets/imagem2.png'
import imagem3 from '../../assets/imagem3.png'
import imagem4 from '../../assets/imagem4.png'

export default function Inicio() {
    return (
      <main>
        <section className={s.primeiraSessaoInicio}>
          <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
        </section>
        <section className={s.porqueDoarSection}>
          <h2>Por que devo doar?</h2>   
        </section>     
        <div className={s.containerCards}>
          <section>
            <img alt='Imagem ilustrando círculo social de quatro pessoas' src={imagem1}/>
            <p>Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
          </section>
          <section>
            <img alt='' src={imagem2}/>
            <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
          </section>
          <section>
            <img alt='' src={imagem3}/>
            <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
          </section>          
          <section>
            <img alt='' src={imagem4}/>
            <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
          </section>  
        </div>
      </main>
    );
  }
  