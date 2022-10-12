import styled from 'styled-components';

// CSS in JS
const Section = styled.section`
  margin: 40px 0;
  .date {
    margin: 0 0 5px;
    font-weight: bold;
    color: #777;
  }
  h2 {
    margin-bottom: 1.75em;
    color: #333;
  }
  h3 {
    background: #eee;
    margin: 0 0 20px;
    padding: 10px;
    border-radius: 3px;
  }
  dl {
    display: flex;
    flex-wrap: wrap;
    @media(max-width: 600px) {
      display: block;
    }
    dt, dd {
      padding: 0.5em 0;
      margin: 0;
      overflow-wrap: break-word;
	    word-wrap: break-word;
    }
    dt {
      width: 20%;
      padding-right: 1em;
      @media(max-width: 600px) {
        width: 100%;
        padding: 0;
      }
      ::after {
        content: "："
      }
    }
    dd {
      width: 80%;
      @media(max-width: 600px) {
        width: 100%;
        padding: 0 0 15px;
      }
      .peapleList {
        margin: 0 0 5px;
        .peaples {
          margin: 0;
          padding: 0;
          li {
            display: inline;
            :not(:last-child)::after {
              content: ", "
            }
          }
        }
      }
    }
  }
`;

export default Section;