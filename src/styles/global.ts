import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --color-primary: #E11D48;
    --color-secondary: #2563EB;
    --color-gray900: #0F172A;
    --color-gray800: #1E293B;
    
    --weight1: 700;
    --weight2: 600;
    --weight3: 500;
    --weight4: 400;

    --font-size1: 24px;
    --font-size2: 22px;
    --font-size3: 20px;
    --font-size4: 18px;
    --font-size5: 16px;
    --font-size6: 14px;
    --font-size7: 12px;
    --font-size8: 10px;
    --font-size9: 9px;

    --radius1: 16px;
    --radius2: 8px;
    --radius3: 4px;
  }  
  
  * {
    margin:0;
    padding: 0;
    outline:0;
    list-style: none;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  body,html{
    width: 100%;
    min-height: 100vh;
    background-color:#F8FAFC;
  }

  a{
    color: unset;
    text-decoration: none;
  }
  
  button, a {
    cursor: pointer;
  }

  #root{
    min-height: 100vh;
  }
`;
