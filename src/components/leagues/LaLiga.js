import axios from 'axios';
import { useState, useEffect } from 'react';
function LaLiga() {
  const [league, setLeague] = useState();
  const [standings, setStandings] = useState();

  const getData = async () => {
    await axios
      .get(
        'https://api-football-standings.azharimm.dev/leagues/esp.1/standings?season=2022&sort=asc'
      )
      .then((response) => {
        setLeague(response.data.data);
        setStandings(response.data.data.standings);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(standings);
  return (
    <div className='laligastandings'>
      {standings && league && (
        <>
          <h1>
            {league.abbreviation} {league.seasonDisplay}
          </h1>
          <table>
            <thead>
              <tr>
                <td>#</td>
                <td style={{ textAlign: 'left' }}>Drużyna</td>
                <th>M</th>
                <th>W</th>
                <th>R</th>
                <th>B</th>
                <th>P</th>
              </tr>
            </thead>
            <tbody>
              {standings.map((item) => {
                return (
                  <tr key={item.team.name}>
                    {item.note != null ? (
                      <td className='position_color'>
                        <span style={{ backgroundColor: item.note.color }}>
                          {item.stats[10].value}.
                        </span>
                      </td>
                    ) : (
                      <td>{item.stats[10].value}.</td>
                    )}
                    <td className='team_info'>
                      <img src={item.team.logos[0].href} alt='' />
                      {item.team.name}
                    </td>
                    <td>{item.stats[0].value}</td>
                    <td>{item.stats[6].value}</td>
                    <td>{item.stats[5].value}</td>
                    <td className='goals_stats'>
                      {item.stats[4].value}:{item.stats[3].value}
                    </td>
                    <td>{item.stats[1].value}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default LaLiga;
