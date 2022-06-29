import styled from 'styled-components';

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
`

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding: 2rem;
  place-items: center;
  column-gap: 3rem;
  row-gap: 3rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
    flex-direction: column;
    padding: 3rem;
    column-gap: 2rem;
    row-gap: 3rem;

  }
`



export const BlogCard = styled.div`
  background: #1c1c1c;
  border-radius: 5px;
  text-align: center;
  width: 400px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
  

`;


export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 1.2px;
  color: #9cc9e3;
  padding: .5rem 0;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
`;

export const Hr = styled.hr`
  width: 150px;
  height: 2px;
  margin: 10px auto;
  border: 0;
  background: #ff8100;
`;

export const Hrx = styled.hr`
  width: 300px;
  height: 2px;
  margin: 10px auto;
  border: 0;
  background: #545454;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  //padding: 0 25px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: .3rem

  }
`;


export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 0rem 0 2rem 0;
`;

export const ExternalLinks = styled.a`
  color: #d4c0c0;
  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  background: #ab6112;
  border-radius: 5px;
  transition: 0.5s;

  &:hover {
    background: #801414;

  }
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 2rem;
  
`
export const Tag = styled.li`
  color: #d8bfbf;
  font-size: 1.5rem;
`
