import * as React from 'react';
import styled from 'styled-components';
import { ReactComponent as IconIdea } from '../icons/idea.svg';
import { ReactComponent as IconServer } from '../icons/server.svg';
import { ReactComponent as IconWindows } from '../icons/windows.svg';


const Theme = styled.div`
  --ppi: 120;
  font-family: system-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  * {
      margin: 0;
      padding: 0;
  }

  box-sizing: border-box;
  width: 8.27in;
  height: 11.69in;
  background-color: whitesmoke;
  color: black;
  padding: 0.4in;
`

const Spacer = styled.div<{ flex?: number }>`
  flex: ${p => p.flex ?? 1};
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  /* >*{
    flex: attr(flex);
  } */
`

const SideColumn = styled(Column)`
  max-width: 30%;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  /* >*{
    flex: attr(flex);
  } */
`

const Header = styled(Row)`
  &>*:first-child {
    width: 30%;
  }
`

const Title = styled.h1`
  /* display: block; */
  font-size: 2em;
  line-height: 1;
  text-align: start;
  align-self: flex-start;
  margin-block: 0;
`

const Subtitle = styled(Title)`
  font-size: 1.2em;
  line-height: 1;
  margin-top: 0em;
`

// const AspectRatio = styled.div<{aspectRatio: number}>`
//   >:only-child {
//     ${(props) => props.aspectRatio < 1 ? 'max-height' : 'max-width'}: 100%;
//   }
// `

const Section = styled.div`
  width: 100%;
  margin-block: 1em;
  padding-block: 0.1em;
  border-bottom: #9EC6FF solid 3px;
  text-align: left;
`

const Avatar = styled.div`
  position: relative;
  --width: 1in;
  width: var(--width);
  padding-top: calc(var(--width) * 7 / 5);
  background-color: grey;
`

const Specialties = styled.div<{ radius: string }>`
  display: flex;
  /* box-sizing: content-box; */
  align-items: center;
  justify-content: center;
  &>* {
    display: flex;
    align-items: center;
    justify-content: center;

    border: #ccc solid 1px;
    border-radius: ${props => props.radius};
    width: calc(2 * ${props => props.radius});
    height: calc(2 * ${props => props.radius});

    margin-inline: -.6ch;
    box-sizing: border-box;

    padding: 10%;
    transition: all cubic-bezier(0.165, 0.84, 0.44, 1) .5s;
    &:hover {
      border-color: #666;
    }
    &::after {
      content: 'aaa',
      
    }
  }
`

export interface IResumeProps {
  name: string,
  nickname: string,
  email: string,
  phone: string,
  githubId: string,
  photoSrc: string,
  specialties: {
    description: string,
    iconSrc: string,
  }[]
}

export default class Resume extends React.PureComponent<IResumeProps> {
  public render() {
    return (
      <Theme>
        <Column>
          <Header>
            <div>
              <Title>{this.props.name}</Title>
              <Subtitle>{this.props.nickname}</Subtitle>
            </div>
            <div>
              <p>me@ryuujo.com</p>
              <p>17861068979</p>
              <p><a href='https://github.com/ryuujo1573'>ryuujo1573</a></p>
            </div>
            <Spacer />
            <Avatar />
          </Header>
          <Row style={{ flex: 1}}>
            <SideColumn style={{ backgroundColor: '', flex: 1, }}>
              <Section children="PERSONAL SPECIALTIES" />
              <Specialties radius="4ch">
                <div><IconIdea /></div>
                <div><IconWindows /></div>
                <div><IconServer /></div>
              </Specialties>

              <br />
              <Section children="PERSONAL EXPERIENCES" />

              <Spacer />
            </SideColumn>
            <Column style={{flex: 1, marginLeft: '5%',}}>
              <Section children="PERSONAL EXPERIENCE"/>
              <Spacer />
              <Section children="PROJECTS" />
              <Spacer />
              <Section children="EDUCATION" />
              <Spacer />

            </Column>
          </Row>
        </Column>
      </Theme>
    );
  }
}
