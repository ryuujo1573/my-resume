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
  --radius: ${p => p.radius};
  &>* {
    display: flex;
    align-items: center;
    justify-content: center;

    border: #ccc solid 1px;
    border-radius: var(--radius);
    width: calc(2 * var(--radius));
    height: calc(2 * var(--radius));

    margin-inline: -.6ch;
    box-sizing: border-box;

    padding: 10%;
    transition: all cubic-bezier(0.165, 0.84, 0.44, 1) .5s;
    &:hover {
      border-color: #666;
    }
  }
`
const LanguageSkill = styled.div<{ radius: string, innerRadius?: string }>`
  --radius: ${p => p.radius};
  --border-color: #eee;
  @property --percentage {
    syntax: '<percentage>';
    inherits: false;
    initial-value: 0%;
  }

  @keyframes circular-anim {
    from {--percentage: 0%;} to {--percentage: 100%;}
  }

  display: flex;
  /* box-sizing: content-box; */
  align-items: center;
  justify-content: space-between;

  position: relative;
  margin-bottom: 2em;
  
  &>* {
    --percentage: 0%;
    display: flex;
    align-items: center;
    justify-content: center;

    z-index: 0;
    
    border: #eee solid 1px;
    // https://stackoverflow.com/questions/71860699/is-there-any-way-to-animate-a-conic-gradient-in-css
    // https://dev.to/afif/we-can-finally-animate-css-gradient-kdk
    background: conic-gradient(
      #6cf calc(var(--percentage) * var(--score) / var(--score-max)),
      #fff calc(var(--percentage) * var(--score) / var(--score-max))
    );

    box-sizing: border-box;
    border-radius: var(--radius);
    width: calc(2 * var(--radius));
    height: calc(2 * var(--radius));

    margin-inline: 0ch;

    padding: 5%;
    animation: circular-anim cubic-bezier(0.175, 0.885, 0.32, 1.2) 1s forwards;
    transition: all cubic-bezier(0.165, 0.84, 0.44, 1) 1s;
    border-color: var(--border-color);
    &:hover {
      --border-color: #66ccffab;      
    }

    position: relative;

    &::before {
      content: '';
      display: block;
      position: absolute;
      width: calc(2 * ${p => p.innerRadius ?? p.radius + ' - 20px'});
      height: calc(2 * ${p => p.innerRadius ?? p.radius + ' - 20px'});
      border: var(--border-color) solid 1px;
      border-radius: calc(var(--radius) - 10px);
      z-index: -1;
      background-color: var(--page-color, #fff);
      /* translate: ; */
      transition: all cubic-bezier(0.165, 0.84, 0.44, 1) 1s;
      border-color: var(--border-color);
    }
  }

  &>*::after {
    position: absolute;
    top: 100%;
    z-index: 10;
    opacity: 0;
    content: ' ';
    line-height: 2;
    transition: opacity cubic-bezier(0.165, 0.84, 0.44, 1) 1s;
  }
  &>*:hover::after {
    counter-reset: score var(--score) scoreMax var(--score-max);
    content: counter(score)" / "counter(scoreMax);
    opacity: 1;
  }
`

const Hinted = styled.div<{ value: string, }>`
  position: relative;
  &::after {
    content: '${p => p.value}';
    position: absolute;
    /* display: none; */
    width: fit-content;
    top: calc(100% + 0.5em);
    opacity: 0;
    transition: all cubic-bezier(0.165, 0.84, 0.44, 1) 1s;
    
  }
  &:hover::after {
      /* display: block; */
      opacity: 1;
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
              <p>{this.props.email}</p>
              <p>{this.props.phone}</p>
              <p><a href={'https://github.com/' + this.props.githubId}>{this.props.githubId}</a></p>
            </div>
            <Spacer />
            <Avatar />
          </Header>
          <Row style={{ flex: 1 }}>
            <SideColumn style={{ backgroundColor: '', flex: 1, }}>
              <Section children="PERSONAL SPECIALTIES" />
              <Specialties radius="4ch">
                <Hinted value='设计'><IconIdea /></Hinted>
                <Hinted value='前端'><IconWindows /></Hinted>
                <Hinted value='后端'><IconServer /></Hinted>
              </Specialties>

              <br />
              <Section children="LANGUAGE SKILLS" />
              <LanguageSkill radius="5ch" innerRadius='3.5ch'>
                <div style={{'--score': 525, '--score-max': 710}}>CET-6</div>
                <div style={{'--score': 85, '--score-max': 100}}>CJT-6</div>
              </LanguageSkill>
              <li>
                
              </li>
              <Section children="LANGUAGE SKILLS" />

              <Spacer />
            </SideColumn>
            <Column style={{ flex: 1, marginLeft: '5%', }}>
              <Section children="PERSONAL EXPERIENCE" />
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
