const clubs = [
  {
    stadium: 'Emirates Stadium',
    strTeam: 'Arsenal',
    strTeamBadge: 'https://r2.thesportsdb.com/images/media/team/badge/uyhbfe1612467038.png/medium',
    strDescriptionEN:
      "Arsenal Football Club is a professional football club based in Holloway, London which currently plays in the Premier League, the highest level of English football. One of the most successful clubs in English football, they have won 13 First Division and Premier League titles and a joint record 11 FA Cups. Arsenal's success has been particularly consistent: the club has accumulated the second most points in English top-flight football, hold the ongoing record for the longest uninterrupted period in the top flight, and would be placed first in an aggregated league of the entire 20th century. Arsenal is the second side to complete an English top-flight season unbeaten (in the 2003–04 season), playing almost twice as many matches as the previous invincibles Preston North End in the 1888–89 season. Arsenal was founded in 1886 in Woolwich and in 1893 became the first club from the south of England to join the Football League. In 1913, they moved north across the city to Arsenal Stadium in Highbury. In the 1930s, they won five League Championship titles and two FA Cups. After a lean period in the post-war years they won the League and FA Cup Double, in the 1970–71 season, and in the 1990s and first decade of the 21st century, won two more Doubles and reached the 2006 UEFA Champions League Final. Since neighbouring Tottenham Hotspur, the two clubs have had a fierce rivalry, the North London derby. Arsenal have one of the highest incomes and largest fanbases in the world. The club was named the fifth most valuable association football club in the world, valued at £1.3 billion in 2014.",
  },
  {
    stadium: 'Villa Park',
    strTeam: 'Aston Villa',
    strTeamBadge: 'https://r2.thesportsdb.com/images/media/team/badge/jykrpv1717309891.png/medium',
    strDescriptionEN:
      'Aston Villa Football Club (/ˈæstən ˈvɪllə/; also known as Villa, The Villa, The Villans, The Lions) are a professional football club based in Witton, Birmingham, who play in the Premier League, the highest level of English football. Founded in 1874, they have played at their current home ground, Villa Park, since 1897. Aston Villa were founder members of The Football League in 1888. They were also founder members of the Premier League in 1992, and have remained there ever since. The club were floated by the previous owner and chairman Doug Ellis, but in 2006 full control was acquired by American businessman Randy Lerner. Lerner announced on 12 May 2014 that he is selling the club. Aston Villa are among the oldest and the most successful football clubs in the history of English football. Villa won the 1981–82 European Cup, and are thus one of five English clubs to win what is now the UEFA Champions League. They have the fourth highest total of major honours won by an English club, having won the First Division Championship seven times (most recently in the 1980–81 season), the FA Cup seven times (last won in 1957), the Football League Cup five times (last won in 1996) and the UEFA Super Cup in 1982. The club have also produced more England national team players than any other side, currently having produced 72. They have a fierce local rivalry with Birmingham City. The Second City derby between Aston Villa and Birmingham City has been played since 1879. The club\'s traditional kit colours are claret shirts with sky blue sleeves, white shorts and sky blue socks. Their traditional badge is of a rampant gold lion on a light blue background with the club\'s motto "Prepared" underneath; a modified version of this was adopted in 2007.',
  },
  {
    stadium: 'Vitality Stadium',
    strTeam: 'Bournemouth',
    strTeamBadge: 'https://r2.thesportsdb.com/images/media/team/badge/y08nak1534071116.png/medium',
    strDescriptionEN:
      "A.F.C. Bournemouth is a football club playing in the Premier League, the highest level of English football. The club plays at Vitality Stadium in Kings Park, Boscombe, Bournemouth, Dorset and have been in existence since 1899. Nicknamed The Cherries, the team traditionally played in red shirts with white sleeves until 1971, when the strip was changed to red and black stripes, similar to that of A.C. Milan.",
  },
  {
    stadium: 'Falmer Stadium',
    strTeam: 'Brighton',
    strTeamBadge: 'https://r2.thesportsdb.com/images/media/team/badge/ywypts1448810904.png/medium',
    strDescriptionEN:
      'Brighton and Hove Albion Football Club is an English football club based in the coastal city of Brighton & Hove, East Sussex. They currently play in the Premier League, the highest level of English football. The team is nicknamed the "Seagulls" or "Albion".',
  },
  {
    stadium: 'Turf Moor',
    strTeam: 'Burnley',
    strTeamBadge: 'https://r2.thesportsdb.com/images/media/team/badge/xxquyx1421431672.png/medium',
    strDescriptionEN:
      'Burnley Football Club is a professional football club based in Burnley, Lancashire, England. Founded in 1882, the club currently plays in the Premier League, the highest level of English football.',
  },
  {
    stadium: 'Stamford Bridge',
    strTeam: 'Chelsea',
    strTeamBadge: 'https://r2.thesportsdb.com/images/media/team/badge/yvwvtu1448813215.png/medium',
    strDescriptionEN:
      "Chelsea Football Club are a professional football club based in Fulham, London, who play in the Premier League, the highest level of English football. Founded in 1905, the club have spent most of their history in the top tier of English football.",
  },
  {
    stadium: 'Selhurst Park',
    strTeam: 'Crystal Palace',
    strTeamBadge: 'https://r2.thesportsdb.com/images/media/team/badge/ia6i3m1656014992.png/medium',
    strDescriptionEN:
      'Crystal Palace Football Club is an English professional football club based in South Norwood, London. They currently play in the Premier League, the highest level in English football.',
  },
  {
    stadium: 'Goodison Park',
    strTeam: 'Everton',
    strTeamBadge: 'https://r2.thesportsdb.com/images/media/team/badge/eqayrf1523184794.png/medium',
    strDescriptionEN:
      "Everton Football Club are an English professional football club based in Liverpool, and currently playing in the Premier League. The club have competed in the top division for a record 110 seasons (missing only four seasons, in the second tier) and have won the League Championship nine times.",
  },
  {
    stadium: 'Craven Cottage',
    strTeam: 'Fulham',
    strTeamBadge: 'https://r2.thesportsdb.com/images/media/team/badge/ppqyrq1420632542.png/medium',
    strDescriptionEN:
      'Fulham Football Club is a professional football club based in Fulham, London, England. They currently play in the Premier League, the highest level of English football.',
  },
  {
    stadium: 'John Smith\'s Stadium',
    strTeam: 'Huddersfield Town',
    strTeamBadge: 'https://r2.thesportsdb.com/images/media/team/badge/2y8v8z1588946377.png/medium',
    strDescriptionEN:
      'Huddersfield Town Association Football Club is a professional football club based in Huddersfield, West Yorkshire, England. They currently play in the Premier League, the highest level of English football.',
  },
  {
    stadium: 'Kenilworth Road',
    strTeam: 'Luton Town',
    strTeamBadge: 'https://r2.thesportsdb.com/images/media/team/badge/1c2y2c1557239930.png/medium',
    strDescriptionEN:
      'Luton Town Football Club is a professional football club based in Luton, Bedfordshire, England. They currently play in the Premier League, the highest level of English football.',
  },
  {
    stadium: 'Anfield',
    strTeam: 'Liverpool',
    strTeamBadge: 'https://r2.thesportsdb.com/images/media/team/badge/kfaher1737969724.png/medium',
    strDescriptionEN:
      "Liverpool Football Club is a professional football club in Liverpool, England, that competes in the Premier League, the top tier of English football. Founded in 1892, the club has played at Anfield since its formation.",
  },
  {
    stadium: 'Etihad Stadium',
    strTeam: 'Manchester City',
    strTeamBadge: 'https://r2.thesportsdb.com/images/media/team/badge/vrtrtp1448813175.png/medium',
    strDescriptionEN:
      'Manchester City Football Club is a professional football club based in Manchester, England. They currently play in the Premier League, the highest level of English football.',
  },
  {
    stadium: 'Old Trafford',
    strTeam: 'Manchester United',
    strTeamBadge: 'https://r2.thesportsdb.com/images/media/team/badge/vwpvry1467462651.png/medium',
    strDescriptionEN:
      'Manchester United Football Club is a professional football club based in Old Trafford, Greater Manchester, England. They currently play in the Premier League, the highest level of English football.',
  },
  {
    stadium: 'St James\' Park',
    strTeam: 'Newcastle United',
    strTeamBadge: 'https://r2.thesportsdb.com/images/media/team/badge/ppqrrq1420631870.png/medium',
    strDescriptionEN:
      'Newcastle United Football Club is a professional football club based in Newcastle upon Tyne, England. They currently play in the Premier League, the highest level of English football.',
  },
  {
    stadium: 'City Ground',
    strTeam: 'Nottingham Forest',
    strTeamBadge: 'https://r2.thesportsdb.com/images/media/team/badge/ppqurr1420631872.png/medium',
    strDescriptionEN:
      'Nottingham Forest Football Club is a professional football club based in West Bridgford, Nottinghamshire, England. They currently play in the Premier League, the highest level of English football.',
  },
  {
    stadium: 'Bramall Lane',
    strTeam: 'Sheffield United',
    strTeamBadge: 'https://r2.thesportsdb.com/images/media/team/badge/ppqvtr1420632543.png/medium',
    strDescriptionEN:
      'Sheffield United Football Club is a professional football club in Sheffield, South Yorkshire, England. They currently play in the Premier League, the highest level of English football.',
  },
  {
    stadium: 'Tottenham Hotspur Stadium',
    strTeam: 'Tottenham Hotspur',
    strTeamBadge: 'https://r2.thesportsdb.com/images/media/team/badge/ppqrrw1420631872.png/medium',
    strDescriptionEN:
      'Tottenham Hotspur Football Club is a professional football club in Tottenham, London, England. They currently play in the Premier League, the highest level of English football.',
  },
  {
    stadium: 'London Stadium',
    strTeam: 'West Ham United',
    strTeamBadge: 'https://r2.thesportsdb.com/images/media/team/badge/ppqrrx1420631872.png/medium',
    strDescriptionEN:
      'West Ham United Football Club is a professional football club based in Stratford, East London, England. They currently play in the Premier League, the highest level of English football.',
  },
  {
    stadium: 'Molineux Stadium',
    strTeam: 'Wolverhampton Wanderers',
    strTeamBadge: 'https://r2.thesportsdb.com/images/media/team/badge/ppqrry1420631872.png/medium',
    strDescriptionEN:
      'Wolverhampton Wanderers Football Club is a professional football club based in Wolverhampton, West Midlands, England. They currently play in the Premier League, the highest level of English football.',
  },
  {
    stadium: 'Brentford Community Stadium',
    strTeam: 'Brentford',
    strTeamBadge: 'https://r2.thesportsdb.com/images/media/team/badge/ppqrrz1420631872.png/medium',
    strDescriptionEN:
      'Brentford Football Club is a professional football club based in Brentford, West London, England. They currently play in the Premier League, the highest level of English football.',
  },
  {
    stadium: 'Selhurst Park',
    strTeam: 'Crystal Palace',
    strTeamBadge: 'https://r2.thesportsdb.com/images/media/team/badge/ia6i3m1656014992.png/medium',
    strDescriptionEN:
      'Crystal Palace Football Club is an English professional football club based in South Norwood, London. They currently play in the Premier League, the highest level in English football.',
  },
  {
    stadium: 'Stamford Bridge',
    strTeam: 'Chelsea',
    strTeamBadge: 'https://r2.thesportsdb.com/images/media/team/badge/yvwvtu1448813215.png/medium',
    strDescriptionEN:
      "Chelsea Football Club are a professional football club based in Fulham, London, who play in the Premier League, the highest level of English football. Founded in 1905, the club have spent most of their history in the top tier of English football.",
  },
];

class Clubs {
  static getAll() {
    return clubs;
  }

  static searchClub(query) {
    return clubs.filter((club) => {
      const loweredCaseClubName = (club.strTeam || '-').toLowerCase();
      const jammedClubName = loweredCaseClubName.replace(/\s/g, '');
      const loweredCaseQuery = query.toLowerCase();
      const jammedQuery = loweredCaseQuery.replace(/\s/g, '');
      return jammedClubName.indexOf(jammedQuery) !== -1;
    });
  }
}

export default Clubs;
