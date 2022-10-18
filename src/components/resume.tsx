import * as React from 'react';
import styled from 'styled-components';
import { ReactComponent as IconIdea } from '../icons/idea.svg';
import { ReactComponent as IconServer } from '../icons/server.svg';
import { ReactComponent as IconWindows } from '../icons/windows.svg';


const Theme = styled.div`
  --ppi: 120;
  font-family: system-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  pre {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
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

const Avatar = styled.div<{ src: string }>`
  position: relative;
  --width: 1in;
  width: var(--width);
  padding-top: calc(var(--width) * 7 / 5);
  background: ${p => `url(${p.src}) center / contain no-repeat`}, lightgray;
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
    @media print {
      --percentage: 100%;
    }
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
    animation: circular-anim cubic-bezier(0.165, 0.84, 0.44, 1) 1s forwards;
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
    @media print {
      counter-reset: score var(--score) scoreMax var(--score-max);
      content: counter(score) ' / ' counter(scoreMax);
      opacity: 1;
    }
  }
  &>*:hover::after {
    counter-reset: score var(--score) scoreMax var(--score-max);
    content: counter(score) ' / ' counter(scoreMax);
    opacity: 1;
  }
`

const Hinted = styled.div<{ value: string, }>`
  position: relative;
  &::after {
    content: '${p => p.value}';
    /* display: none; */
    position: absolute;
    width: ${p => p.value.getCharLength()}ch;
    top: calc(100% - 1.5em);
    opacity: 0;
    translate: 0 0%;
    transition: all cubic-bezier(0.165, 0.84, 0.44, 1) 1s;
    z-index: 10;
  }
  &:hover::after {
      /* display: block; */
      opacity: 1;
      translate: 0 2em;
  }
`

const TagHinted = styled.div<{ value: string, }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  --char-count: ${p => p.value.getCharLength()};
  &::after {
    position: absolute;
    content: '${p => p.value}';
    font-size: 12px;
    transition: all cubic-bezier(0.165, 0.84, 0.44, 1) 0.5s;
    width: calc(1ch * var(--char-count));
    line-height: 2;
    translate: 80%;
    opacity: 0;
    z-index: 10;
    color: #368;
    background-color: #b3e4ffcc;
    border-radius: 0.5em;
    
  }
  &:hover::after {
      opacity: 1;
      translate: 100%;
  }
`

const fontSizePx = 14;
const _dimension = '1.5em';
const DivAbility = styled.div`
  display: flex;
  align-items: center;
  min-height: ${_dimension};
  font-size: ${fontSizePx}px;
  >span {
    flex: 1;
    text-align: left;
    font-family: monospace;
    line-break: anywhere;
    word-break: break-all;
  }
`
const Dot = styled.div<{ yes: boolean }>`
  margin: 0.5ch 0.2em;
  width: ${_dimension};
  height: ${_dimension};
  border-radius: 114514ch;
  background-color: ${p => p.yes ? '#6cf' : '#B3E5FF'};
`
const Ability: React.FunctionComponent<{ desc: string, point: 1 | 2 | 3 }> = ({ desc, point }) => {
  const maxLength = 13;

  const levels = ['初步接触', '较为熟悉', `熟练掌握`];
  let shouldShrink = desc.length > maxLength;
  return (
    <DivAbility>
      <span style={shouldShrink ? { fontSize: `${shouldShrink ? Math.floor((maxLength + 1) / desc.length * fontSizePx) : fontSizePx}px` } : undefined}>{desc}
      </span>
      <TagHinted value={levels[point - 1]}>
        {levels.map(
          (_, i) =>
            <Dot key={i} yes={i < point} />
        )}
      </TagHinted>
    </DivAbility>
  );
}

const Rounded = styled.img<{ dimension: string }>`
  width: ${p => p.dimension};
  height: ${p => p.dimension};
  background-color: white;
  border-radius: 21%;
  border: none;
  padding: 5px;
  box-sizing: border-box;
  box-shadow: 0 0 10px calc(${$ => $.dimension} * 0.02) #0000003e;
`

const DivPassion = styled.div`
  display: flex;
  &>span {
    flex: 1;
    text-align: start;
    align-self: center;
    margin-inline-start: 1ch;
  }
`

const Passion = ({desc, iconSrc}) =>
  <DivPassion>
    <Rounded dimension='42px' src={iconSrc}/>
    <span>{desc}</span>
  </DivPassion>

const ExpWrap = styled.div<{ pale?: boolean }>`
      position: relative;
      justify-items: left;
      margin-block-end: 1em;
      ${p => p.pale ? `
          @media (any-hover: hover) {
            transition: all cubic-bezier(0.165, 0.84, 0.44, 1) 0.5s;
            color: grey;
            :hover {
              color: black;
            }
          }
          @media (any-hover: none) {
            display: none;
          }
          
      ` : ''}
      >div {
        text-align: left;
      }
      .role {
        font-size: .8em;
        margin-block-end: .4em;
      }
      .period {
        position: absolute;
        right: 0;
        top: 0;
      }
      .desc {
        font-size: 1em;
      }
    `
const Exp = ({ role, period, desc, pale }: { role, period, desc, pale?: boolean }) => {

  return (
    <ExpWrap pale={pale}>
      <div className={'role'}>{role}</div>
      <div className={'period'}><pre>{period}</pre></div>
      <div className={'desc'}>{desc}</div>
    </ExpWrap>
  )
}


export interface IResumeProps {
  name: string,
  nickname: string,
  email: string,
  phone: string,
  githubId: string,
  photoSrc: string,
  specialties: {
    desc: string, iconSrc: string,
  }[],
  lang: {
    [key: string]: `${'a' | 'b' | 'c'}${1 | 2}`,
  },
  skills: {
    desc: string, point: 1 | 2 | 3,
  }[],
  passions: {
    desc: string, iconSrc: string,
  }[],
  exps: { role: string, period: string, desc: string, pale?: boolean }[],

}

export default class Resume extends React.PureComponent<IResumeProps> {
  public render() {
    return (
      <Theme>{/*^_^*/}
        <Column>{/*"o"*/}
          <Header>{/*'w'*/}
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
            <Avatar src={this.props.photoSrc} />
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
                <div style={{ '--score': 525, '--score-max': 710 }}>CET-6</div>
                <div style={{ '--score': 85, '--score-max': 100 }}>CJT-6</div>
              </LanguageSkill>
              <li>

              </li>
              <Section children="ABILITY STACK" />
              {this.props.skills.map((p) => <Ability {...p} />)}

              <Section children="PASSIONS" />
              {this.props.passions.map((p) => <Passion {...p} />)}

            </SideColumn>
            <Column style={{ flex: 1, marginLeft: '5%', }}>
              <Section children="PERSONAL EXPERIENCE" />
              {this.props.exps.map((props) => <Exp {...props} />)}
              <Section children="PRACTICES" />
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
