export async function useArtists() {
  const current: Artist[] = [
    {
      slug: 'iamtheagent',
      name: 'I Am The Agent',
      bio: `
        <p><strong>I Am The Agent</strong> are a mixed-genre four-piece rock band from Newcastle, Australia. Their first single <em>Melodramatic Popular Song</em> was written in 2007 and received national airplay on its release in 2008. They have since released four self-produced EPs.</p>
        <p>The band helped inspire a new wave of DIY music releases upon the release of their first EP, <em>Volume One</em> which featured print-work by artist, Vanessa Mccurry.</p>
        <p><small>Find them on <a href="https://iamtheagent.bandcamp.com/">Bandcamp &nearr;</a>, <a href="https://open.spotify.com/artist/0rZu5RvSnzivRVfO60Wn5T">Spotify &nearr;</a>, <a href="https://www.deezer.com/us/artist/1024897">Deezer &nearr;</a>, <a href="https://music.apple.com/au/artist/i-am-the-agent/1594342045">iTunes &nearr;</a> and <a href="https://music.youtube.com/playlist?list=OLAK5uy_k-hra-r7O3PBomJpx2V0SI7xIbeALf_v8">YouTube &nearr;</a></small></p>
      `,
      image: {
        src: 'banner-iamtheagent.jpg',
        alt: 'Four dishevelled blokes standing on the side of the highway',
        caption: 'I Am The Agent, roadside 2014',
        width: 1280,
        height: 630,
      },
      releases: [
        {
          title: 'Four',
          id: 'OH-005',
          type: 'EP',
          artwork: 'release-iamtheagent-4.jpg',
          artworkCredit: 'Vanessa Mccurry',
          links: [
            {
              url: 'https://iamtheagent.bandcamp.com/album/four',
              text: 'Bandcamp',
            },
            {
              url: 'https://open.spotify.com/album/7fcUO1SEYHqRaSW6Xh6G9C?si=iWSGdB5wRtOWEhWrxKrKiQ',
              text: 'Spotify',
            },
            {
              url: 'https://www.deezer.com/us/album/271715632',
              text: 'Deezer',
            },
            {
              url: 'https://music.apple.com/au/album/four-2021-remastered-version-ep/1594342044',
              text: 'iTunes',
            },
            {
              url: 'https://music.youtube.com/playlist?list=OLAK5uy_k-hra-r7O3PBomJpx2V0SI7xIbeALf_v8',
              text: 'YouTube',
            },
          ],
          date: new Date('December 31, 2015'),
        },
        {
          title: 'Volume Three',
          type: 'EP',
          id: 'OH-004',
          artwork: 'release-iamtheagent-3.jpg',
          artworkCredit: 'Vanessa Mccurry',
          links: [
            {
              url: 'https://iamtheagent.bandcamp.com/album/volume-three',
              text: 'Bandcamp',
            },
          ],
          date: new Date('January 13, 2012'),
        },
        {
          title: 'Volume Two',
          type: 'EP',
          id: 'OH-002',
          artwork: 'release-iamtheagent-2.jpg',
          artworkCredit: 'Vanessa Mccurry',
          links: [
            {
              url: 'https://iamtheagent.bandcamp.com/album/volume-two',
              text: 'Bandcamp',
            },
          ],
          date: new Date('March 30, 2011'),
        },
        {
          title: 'Volume One',
          type: 'EP',
          id: 'OH-001',
          artwork: 'release-iamtheagent-1.jpg',
          artworkCredit: 'Vanessa Mccurry',
           links: [
            {
              url: 'https://iamtheagent.bandcamp.com/album/volume-one',
              text: 'Bandcamp',
            },
            {
              url: 'https://open.spotify.com/album/3m5qEi8ThbjTkGTbGQCo3C?si=oBtBM_KkSlucqY8toj_SVg',
              text: 'Spotify',
            },
            {
              url: 'https://www.deezer.com/en/album/368578287',
              text: 'Deezer',
            },
            {
              url: 'https://music.apple.com/au/album/volume-one-2021-remastered-version-ep/1650966687',
              text: 'iTunes',
            },
            {
              url: 'https://music.youtube.com/playlist?list=OLAK5uy_nNL9jWVN2DqRYgXhHTojAQcYTLS-tnQpg',
              text: 'YouTube',
            },
          ],
          date: new Date('August 30, 2010'),
        },
      ],
    },
    {
      slug: 'whalebones',
      name: 'Whalebones',
      bio: `
        <p><strong>Whalebones</strong> is the solo project of song-writer/producer Michael Gale, who creates dark electronic and neo-grunge emo inspired tunes.</p>
        <p><small>Find them on <a href="https://whalebones.bandcamp.com/">Bandcamp &nearr;</a>, <a href="https://open.spotify.com/artist/3tuDjSTKjQ9pujIK4kz6Us">Spotify &nearr;</a>, <a href="https://www.deezer.com/us/album/267163502">Deezer &nearr;</a> and <a href="https://music.youtube.com/browse/UCTE8P3IdKdEMrMduNX2Xg_g">YouTube &nearr;</a></small></p>
      `,
      image: {
        src: 'banner-whalebones.jpg',
        alt: 'Black and white photo of a musician playing acoustic guitar',
        caption: 'Whalebones, 2021',
        width: 1280,
        height: 630,
      },
      releases: [
        {
          title: 'Return Undefined',
          type: 'SINGLE',
          artwork: 'release-whalebones-2.jpg',
          artworkCredit: 'Mitch Elliot',
          notes: `
            Words + Music / Production by Michael Gale.<br>
            Mixed + Mastered by Josh Sullivan.<br>
            Artwork by Mitch Elliot.`,
          links: [
            {
              url: 'https://whalebones.bandcamp.com/track/untitled-32-undefined',
              text: 'Bandcamp',
            },
            {
              url: 'https://open.spotify.com/track/6c29wCDfoZmeEQLVX4cFZo?si=5ba4665a18cf4b35',
              text: 'Spotify',
            },
            {
              url: 'https://music.youtube.com/playlist?list=OLAK5uy_laX4qkdz5wpLY4F_0ZT5-tDs4YU0luhUA&feature=share',
              text: 'YouTube',
            },
          ],
          date: new Date('February 2, 2018'),
          id: 'OH-012',
        },
        {
          title: '1am',
          type: 'SINGLE',
          artwork: 'release-whalebones-1.jpg',
          artworkCredit: 'M Gale',
          notes: `
            Based on a poem from 2016. It's about drunken hazes and melancholic stupors. Hugging your friends. Climbing under tables. Walking home from the pub. Weird and confused. It's kinda sad.<br>
            <br>  
            Music video (earlier mix) here:<br>
            <a href="https://youtu.be/9aUBVa0tOAw">youtu.be/9aUBVa0tOAw</a><br>
            <br>
            The original poem "1am", published October, 2016 in the book: "Herds of Rhino, and Buzzing Insects.<br>
            <br>
            Buy the book at www.whalebones.net<br>
            Written and arranged by MG.<br>
            Mixed and mastered by Joshua Sullivan<br>
          `,
          links: [
            {
              url: 'https://whalebones.bandcamp.com/album/1am',
              text: 'Bandcamp',
            },
            {
              url: 'https://open.spotify.com/album/53yiBPYw0buIkRwp5x0TVy?si=vTlFfic1QUG0-hJepYigIQ',
              text: 'Spotify',
            },
            {
              url: 'https://music.youtube.com/playlist?list=OLAK5uy_nKCOOU2toHxv0AvzB9MC3Awv3NUUkTisE',
              text: 'YouTube',
            },
          ],
          date: new Date('March 3, 2017'),
          id: 'OH-011',
        },
      ],
    },
  ];

  const alumni: Artist[] = [
    {
      slug: 'bats-and-battleships',
      name: "Bats & Battleships",
      bio: `
        <p><strong>Bats & Battleships</strong> were an Australian post-hardcore band formed in Newcastle, NSW, 2009. Band members are guitarist Jason Breen, bassist Chelsea Feneley, vocalist Nikki Fitzsummons and drummer Dylan McCrae. They self-distributed their debut record, <em>The Week That Was</em> in 2012. </p>
        <p><small>Find them on <a href="https://batsandbattleships.bandcamp.com/">Bandcamp &nearr;</a></small></p>
      `,
      image: {
        src: 'banner-bats-and-battleships.jpg',
        alt: 'Black and white photo of a band performing music',
        caption:
          'Bats & Battleships, performing live at The Great Northern Hotel, Newcastle',
        width: 1280,
        height: 630,
      },
      releases: [
        {
          id: 'OH-003',
          title: 'The Week That Was',
          artworkCredit: 'Dylan Mcrae',
          type: 'LP',
          artwork: 'release-bats-and-battleships.jpg',
          notes: `
            All Music by Bats & Battleships<br>
            Lyrics by Jason Breen<br>
            <br>
            Produced, recorded and mixed by Oh Silence.<br>
            Mastered by Michael Sale<br>
          `,
          tracks: [
            { title: 'The Annual Reminder     ', length: '01:14' },
            { title: 'A Toast                 ', length: '04:25' },
            { title: 'On The Cusp             ', length: '03:54' },
            { title: '47°                     ', length: '05:02' },
            { title: 'Introjection            ', length: '01:42' },
            { title: 'Your Jacket Pocket      ', length: '05:16' },
            { title: 'Backdating Karma        ', length: '04:26' },
            { title: 'Recreational Gaslighting', length: '03:39' },
            { title: 'Hunting The Great White ', length: '06:21' },
            { title: 'Never Touch Anything    ', length: '03:17' },
          ],
          links: [
            {
              url: 'https://batsandbattleships.bandcamp.com/',
              text: 'Bandcamp',
            },
          ],
          date: new Date('January 5, 2012'),
        },
      ],
    },
    {
      slug: 'hells',
      name: 'HELLS',
      bio: `
        <p><strong>HELLS</strong> were a blues/rock two-piece from Newcastle, Australia.</p>
        <p>Find them on <a href="https://soundcloud.com/hellstheband/sets/hells-debut-album">Soundcloud &nearr;</a></p>
      `,
      image: {
        src: 'banner-hells.jpg',
        alt: 'Black and white photo of a musicians performing in from of a painting',
        caption: 'HELLS (the band), performing live.',
        width: 1280,
        height: 630,
      },
      releases: [
        {
          title: 'Takes Me So Long',
          type: 'SINGLE',
          artwork: "",
          artworkCredit: "",
          links: [
            {
              url: 'https://soundcloud.com/hellstheband/takesmesolong',
              text: "Soundcloud",
            },
          ],
          id: "OH-006",
          date: new Date("January 6, 2013"),
        },
        {
          title: "Touch U",
          type: "SINGLE",
          artwork: "",
          artworkCredit: "",
          links: [
            {
              url: 'https://soundcloud.com/hellstheband/touch-u',
              text: "Soundcloud",
            },
          ],
          date: new Date('February 6, 2013'),
          id: 'OH-007',
        },
      ],
    },
    {
      slug: 'regresser',
      name: 'régresser',
      bio: `
        <p><strong>régresser</strong> were a chaotic hardcore sextet from Newcastle, Australia. They released two EPs and two singles before permanently disbanding in 2015.</p>
        <p><small>Find them on <a href="https://open.spotify.com/artist/7bjvN4iwio7i0ibrhqvQAg?si=cLaRsH2SR6iJE17kVTnEXw">Spotify &nearr;</a>, <a href="https://music.apple.com/us/artist/r%C3%A9gresser/819619810">Apple Music &nearr;</a>, <a href="https://music.youtube.com/channel/UCzW3ZsxgkOiQBiOZ9fAsC5Q">YouTube &nearr;</a> and <a href="https://listen.tidal.com/album/189662332">Tidal &nearr;</a></small></p>
      `,
      image: {
        src: 'banner-regresser.jpg',
        alt: 'Black and white photo of a band performing music in a half-pipe',
        caption:
          'régresser, performing in a half-pipe. Photo by Joe Andersons.',
        width: 1280,
        height: 630,
      },
      releases: [
        {
          title: 'Womb / Herds of Rhino and Buzzing Insects (.1b/.2b)',
          type: 'SINGLE',
          artwork: 'release-regresser-5.jpg',
          artworkCredit: "Michael Shepherd, Michael Gale",
          links: [
            {
              url: 'https://open.spotify.com/album/4vESalcn343e0vMF7MIAph?si=4IhYfvg6RNyD5Tb4WcQSHg',
              text: 'Spotify',
            },
          ],
          date: new Date('January 1, 2015'),
          id: 'OH-010',
        },
        {
          title: ".2",
          type: "EP",
          artwork: 'release-regresser-3.jpg',
          artworkCredit: "Michael Shepherd",
          links: [
            {
              url: 'https://open.spotify.com/album/0J1BDVmqLU6MHRrnuAX51q?si=G-9CObbRTbu7Eefe7oKhZw',
              text: 'Spotify',
            },
          ],
          date: new Date("January 1, 2015"),
          id: "OH-009",
        },
        {
          title: ".1",
          type: "EP",
          artwork: 'release-regresser-1.jpg',
          artworkCredit: "Michael Shepherd",
          links: [
            {
              url: "https://open.spotify.com/album/5pJe7Yw950UJXRW1KJxMUW?si=nd68NHKfQ_yyDUg2XEt1Bw",
              text: "Spotify",
            },
          ],
          date: new Date('January 1, 2014'),
          id: 'OH-008',
        },
      ],
    },
  ];

  /**
   * Filter list of artists to find artist matching given slug
   *
   * @param   {string}   slug  slug derived from artist name
   * @return  {object}         single artist object
   */
  const getArtistBySlug = (
    slug: string,
    list: Artist[] = [...current, ...alumni]
  ): Artist => {
    return list.find((artist) => artist.slug === slug)!;
  };

  return {
    current,
    alumni,
    all: [...current, ...alumni],
    getArtistBySlug,
  };
}
