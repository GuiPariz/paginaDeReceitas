import styled from "styled-components";

export default function Home() {
  return (
    <Background>
      <Container>
        <Banner>
          <h1>Waffle clássico</h1>
          <figure>
            <img
              src="https://images.pexels.com/photos/14705141/pexels-photo-14705141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Um Wafle"
            />
          </figure>
          <span>Receita de wafle classico</span>
        </Banner>

        <Ingredients>
          <h2>Ingredientes</h2>
          <ul>
            <li>2 xícaras (chá) de farinha de trigo</li>
            <li>2 colheres (sopa) de açúcar</li>
            <li>1/2 colher (chá) de sal</li>
            <li>2 colheres de amido</li>
            <li>3 ovos batidos</li>
            <li>4 colheres (sopa) de manteiga sem sal derretida</li>
            <li>1 e 3/4 de xícara (chá) de leite</li>
            <li>1 colher (sopa) de essência de baunilha</li>
          </ul>
        </Ingredients>
        <Preparation>
          <h2>Modo de preparo</h2>
          <ul>
            <li>
              1. Peneire em um recipiente a farinha de trigo, o açúcar, o amido,
              o fermento e o sal. Reserve.
            </li>
            <li>
              2. Em outro recipiente miture os ovos batido com o leite, a
              manteiga e a essência de baunilha.
            </li>
            <li>
              3. Depeje sobre a mistura de farinha e rapidamente incorpore os
              ingredientes.
            </li>
            <li>
              4. Aqueça o aparelho para wafles. Coloque uma concha da massa e
              espalhe até cobrir o molde do aparelho, feche a tampa e deixe a
              massa assar até ficar bem dourada.
            </li>
            <li>5. Retire com espatulas de silicone e sirva com mel, frutas ou geleia.</li>
          </ul>
        </Preparation>
        <Declarations>
          <h2>informaçõess adicionais</h2>
          Você poderá servir esses wafles com geléia no café da manhã.
        </Declarations>
      </Container>
    </Background>
  );
}

const Background = styled.div`
  background-color: #eaeaea;
  height: 100%;
  padding: 3rem 0;
`;

const Container = styled.div`
  background-color: #ffffff;
  width: 60%;
  margin: 0 auto;
  border-radius: 12px;
  padding: 2rem 4rem;
  h2 {
    color: #1b1b1b;
    margin: 2rem auto;
    text-transform: uppercase;
  }
  li {
    color: #39393a;
    font-size: 1rem;
    margin: 1.5rem 0;
  }
`;

const Banner = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  h1 {
    font-size: 2rem;
    margin: 3rem auto;
    font-weight: bold;
    color: #1b1b1b;
    text-transform: uppercase;
  }
  figure {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 22.5rem;
    overflow: hidden;
    margin: 0 auto;
    border-radius: 10px;
    position: relative;
    img {
      position: absolute;
      top: -12.5rem;
    }
  }
  span {
    margin-top: 0.5rem;
    font-weight: lighter;
    color: #8f8f8f;
  }
`;

const Ingredients = styled.div`
  display: flex;
  flex-direction: column;
`;

const Preparation = styled.div`
  display: flex;
  flex-direction: column;
  li {
    list-style: none;
  }
`;

const Declarations = styled.div`
  display: flex;
  flex-direction: column;
  color: #8f8f8f;
`;
