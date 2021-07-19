import React from 'react'
import styled from 'styled-components'
import MainGrid from '../src/components'
import Box from '../src/components/Box'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations'
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

const Paragraph = styled.p`
  fontSize: 25;
  padding: 10;
  fontWeight: 'bold';
  backgroundColor: 'transparent';
  textAlign: 'center';
  height: 70;
  zIndex: 1;
  color: ${({ theme }) => theme.colors.primary};
  
`

const Logo = styled.img`
  background-color: #ffffff;
  padding: 9px 14px;
  border-radius: 1000px;
  height: 34px;
`

function ProfileComunidadesBar(prop) {
  console.log(prop);
  return (<Box>
  <img src={'http://github.com/'+prop.githubUser+'.png'} style={{ borderRadius: '8px' }} />
  </Box>)
};

function ProfileSideBar(prop) {
  console.log(prop);
  return (<Box as='aside'>
  <img src={'http://github.com/'+prop.githubUser+'.png'} style={{ borderRadius: '8px' }} />
  <p><a className="boxLink" href={'http://github.com/'+prop.githubUser}>@{prop.githubUser}</a></p>
  <hr/>
  <AlurakutProfileSidebarMenuDefault />
  </Box>)
};

export default function Home() {
  const userLogado = 'juunegreiros';
  const pessoasFavoritas = ['juunegreiros','omariosouto','peas','rafaballerini','marcobrunodev','felipefialho','guilhermesilveira'];
  //const comunidades = ['Alurakut'];
  const data =new Date();
  const [comunidades, setComunidades] = React.useState([
    {
      id: '123258',
      title:'Odeio Acordar Cedo',
      image:'https://alurakut.vercel.app/capa-comunidade-01.jpg'
    },
    {
      id: '258456',
      title:'Bom Dia Grupo',
      image:'https://picsum.photos/200/300'
    }]);console.log(comunidades);
  //{title:'Alurakut',image:'http://placehold.it/300x300'}

  return (<>
    <AlurakutMenu />
      <MainGrid>
        {/* <Box style="grid-area: profileArea;">Imagem</Box> */}
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSideBar githubUser={userLogado}/>
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box >
            <h1 className="title">Bem-Vindo(a), @{userLogado}</h1>
            <OrkutNostalgicIconSet />
          </Box>
          <Box>
            <h2>O que voce deseja fazer?</h2>
            <form onSubmit={function handleADDComunidade(event){
              event.preventDefault();
              const dadosForm = new FormData(event.target);
              //console.log(event);
              //comunidades.push('AluraNew');
              //comunidades.push('Alura Stars');
              let data = new Date();
              const comunidade = {
                id: data.toDateString(),
                title: dadosForm.get('title'),
                image: dadosForm.get('url'),
              };
              const newComunidades = [...comunidades, comunidade];
              console.log(comunidades);
              setComunidades(newComunidades);
              
            }}>
              <div>
                
                <input type="text"
                placeholder="Qual vai ser o nome da sua comunidade?" 
                name="title" 
                aria-label="Qual vai ser o nome da sua comunidade?"/>
              </div>
              <div>
                
                <input type="text"
                placeholder="Coloque uma URL para usarmos de capa?" 
                name="url" 
                aria-label="Coloque uma URL para usarmos de capa?"/>
              </div>
              <button> Criar Comunidade </button>
            </form>
          </Box>
        </div>
        <div className="profileArea" style={{ gridArea: 'profileRelationArea' }}>
          <ProfileRelationsBoxWrapper >
            <h2 className="smallTitle">Minhas Comunidades ({comunidades.length})</h2>
            <ul>
            {comunidades.map((itemAtual)=>
                    {return(<li >
                    <a href={'/users/'+itemAtual.title} key={itemAtual.id}>
                      <Logo src={itemAtual.image} />
                      <span>{itemAtual.title}</span>
                    </a>
                    </li>)}
                )}
            </ul>
          </ProfileRelationsBoxWrapper>
          <ProfileRelationsBoxWrapper >
            <h2 className="smallTitle">
            Meus Amigos ({pessoasFavoritas.length})
            </h2>
            <ul>
            {pessoasFavoritas.map((itemAtual)=>
                    {return(<li>
                    <a href={'/users/'+itemAtual} >
                      <Logo src={'http://github.com/'+itemAtual+'.png'} />
                      <span>{itemAtual}</span>
                    </a>
                    </li>)}
                )}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
    )
}
