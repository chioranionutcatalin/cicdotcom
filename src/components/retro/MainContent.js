import React from 'react';
import {sections, githublink, homeContent, studies, skills, experienceContent} from 'defs/defs';
import {RetroTableWrapper, JumboBox} from 'components/retro/styled';
import {Container} from 'react-bootstrap';


export const MainContent = (props) => {
    const {section} = props;
    let sectionContent;
    switch(section) {
        case sections.Home:
            sectionContent = <Home/>;
            break;
        case sections.About:
            sectionContent =  <About/>;
            break;
        case sections.Experience:
            sectionContent =  <Experience/>;
            break;
        default:
            sectionContent = <Blog/>;
    }

    return (
        <JumboBox>{sectionContent}</JumboBox>
    );
 };

const addComment = (event) => {
    event.preventDefault();
    JSON.stringify(event);
};


export const Home = () => {
    return (
        <Container>
            <hr/>
                <h2>
                    {homeContent.websiteTitle}
                </h2>
            <hr/>
            <h4>
                {homeContent.title}
            </h4>
            <p>
                {homeContent.description}
            </p>
            <div>
                <a href="https://info.flagcounter.com/OTDv"><img src="https://s05.flagcounter.com/countxl/OTDv/bg_FFFFFF/txt_000000/border_787878/columns_3/maxflags_12/viewers_0/labels_0/pageviews_0/flags_0/percent_0/" alt="Flag Counter" border="0"/></a>
            </div>
        </Container>
    );
};

export const Experience = () => {


    const headerItems = Object.keys(experienceContent.Softvision);
    const svJob = Object.values(experienceContent.Softvision);
    const redSharpJob = Object.values(experienceContent.Redsharp);

    return (
       <div>
           <h4>
               General working experience:
           </h4>
           <RetroTableWrapper>
               <table>
                   <tr>
                       <th>{'Company'}</th>
                       {headerItems.map((item, idx) => <th key={idx}>{item}</th>)}
                   </tr>
                   <tr>
                       <td>{Object.keys(experienceContent)[0]}</td>
                       {redSharpJob.map((dataItem, indexRow) => <td key={indexRow}>{dataItem}</td>)}
                   </tr>
                   <tr>
                       <td>{Object.keys(experienceContent)[1]}</td>
                       {svJob.map((dataItem, indexRow) => <td key={indexRow}>{dataItem}</td>)}
                   </tr>
               </table>
           </RetroTableWrapper>
       </div>
    );
};

export const About = () => {
    return (
        <div>
                <h4>
                    General knowledge:
                </h4>
                <p>
                    {skills}
                </p>

            <h4>
                Education:
            </h4>
            <RetroTableWrapper>
                <table>
                    <tr>
                        <th/>
                        <th>{Object.keys(studies)[0]}</th>
                        <th>{Object.keys(studies)[1]}</th>
                    </tr>
                    <tr>
                        <td>{studies[Object.keys(studies)[0]].from}</td>
                        <td>{studies[Object.keys(studies)[0]].in}</td>
                        <td>{studies[Object.keys(studies)[1]].in}</td>
                    </tr>
                </table>
            </RetroTableWrapper>
            <hr/>
            <h4>
                Gitbub link:
            </h4>
            <a href={githublink}>
                {githublink}
            </a>
            <hr/>
            <h4>
                Curriculum vitae:
            </h4>
            <a href="https://drive.google.com/uc?export=download&id=0B4dceAPGmPoQQ2RBZ3VYa2x6Z0FRQmhySnhSTDc0U1Zqcmgw">Download CV</a>
            <hr/>
            <h4>
                Send Message
            </h4>
            <form>
                <table>
                    <tr>
                        <td><label htmlFor="name">Name:</label></td>
                        <td><input type="text" id="name" name="name"/></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="email">Email:</label></td>
                        <td><input type="text" id="email" name="email"/></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="message">Message:</label></td>
                        <td><textarea id="message" name="message" rows="5" cols="20"/></td>
                    </tr>
                    <tr>
                        <button onClick={() => addComment()}>Send</button>
                    </tr>
                </table>
            </form>
        </div>
    );
};

export const Blog = () => {
  return <h1 style={{backgroundColor: 'red'}}>Under construction!</h1>;
};