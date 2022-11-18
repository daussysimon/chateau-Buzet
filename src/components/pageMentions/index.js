import secondLogo from 'src/assets/pictures/second_logo.png';

const pageMentions = ({ data }) => (
  <main className="main pageMentions">
    <div className="container__mentions">
      <header>
        <img className="header__imgLeft" src={secondLogo} alt="grappe de raisin" />
        <div className="mentions__title">
          <h1>{data.title}</h1>
          <p>{data.date}</p>
        </div>
        <img className="header__imgRight" src={secondLogo} alt="grappe de raisin" />
      </header>
      <div className="mentions__contain">
        { Object.keys(data.contain).map((key) => {
          if (key.includes('subtitle')) {
            return <h3 className="contain__title" key={key}>{data.contain[key]}</h3>;
          }
          return <p className="contain__para" key={key}>{data.contain[key]}</p>;
        })}
      </div>
    </div>
  </main>
);
export default pageMentions;
