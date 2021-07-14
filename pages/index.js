import styled from 'styled-components'
import MainGrid from '../src/components'
import Box from '../src/components/Box'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'

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
  return (<Box>
  <img src={'http://github.com/'+prop.githubUser+'.png'} style={{ borderRadius: '8px' }} />
  </Box>)
};

export default function Home() {
  const userLogado = 'juunegreiros';
  const pessoasFavoritas = ['juunegreiros','omariosouto','peas','rafaballerini','marcobrunodev','felipefialho'];

  return (<>
    <AlurakutMenu />
      <MainGrid>
        {/* <Box style="grid-area: profileArea;">Imagem</Box> */}
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSideBar githubUser={userLogado}/>
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box >
            <h1 className="title">Bem Vindo (a)</h1>
            
            <OrkutNostalgicIconSet />
          </Box>
        </div>
        <div className="profileArea" style={{ gridArea: 'profileRelationArea' }}>
          <ProfileRelationsBoxWrapper >
            <h2 className="smallTitle">
            Comunidades ({pessoasFavoritas.length})
            </h2>
            <ul>
            {pessoasFavoritas.map((itemAtual)=>
                    {return(<li>
                    <a href={'/users/'+itemAtual} key={itemAtual}>
                      <Logo src={'http://github.com/'+itemAtual+'.png'} />
                      <span>{itemAtual}</span>
                    </a>
                    </li>)}
                )}
            </ul>
          </ProfileRelationsBoxWrapper>
          <Box >
            Interesses
          </Box>
        </div>
      </MainGrid>
    </>
    )
}
