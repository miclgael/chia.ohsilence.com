export function useArtists() {
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
        height: 630
      },
      releases: [
        {
          title: 'Wolves',
          id: 'OH-017',
          date: new Date('October 20, 2024'),
          artwork: 'release-iamtheagent-wolves.jpg',
          artworkCredit: 'Dylan McCrae',
          type: 'SINGLE',
          links: [
            {
              url: 'https://iamtheagent.bandcamp.com/track/wolves',
              text: 'Bandcamp',
              preferred: true
            },
            {
              url: 'https://open.spotify.com/track/23rBNv33KHpJzik5fmuGeZ',
              text: 'Spotify'
            },
            {
              url: 'https://music.apple.com/au/album/wolves/1773638894',
              text: 'Apple Music'
            },
            {
              url: 'https://www.deezer.com/us/track/3044089591',
              text: 'Deezer'
            },
            {
              url: 'https://listen.tidal.com/album/392996929/track/392996930',
              text: 'Tidal'
            },
            {
              url: 'https://www.youtube.com/watch?v=2PlYhnuGDIk',
              text: 'YouTube'
            },
            {
              url: 'https://music.youtube.com/playlist?list=OLAK5uy_lQlWq9FyoNETXQ9DJEzMK4qqc_aTL5Gqo',
              text: 'YouTube Music'
            }
          ]
        },
        {
          title: 'Four',
          id: 'OH-005',
          type: 'EP',
          artwork: 'release-iamtheagent-4.jpg',
          artworkCredit: 'Vanessa Mccurry',
          links: [
            {
              url: 'https://iamtheagent.bandcamp.com/album/four',
              text: 'Bandcamp'
            },
            {
              url: 'https://open.spotify.com/album/7fcUO1SEYHqRaSW6Xh6G9C',
              text: 'Spotify'
            },
            {
              url: 'https://www.deezer.com/us/album/271715632',
              text: 'Deezer'
            },
            {
              url: 'https://music.apple.com/au/album/four-2021-remastered-version-ep/1594342044',
              text: 'iTunes'
            },
            {
              url: 'https://music.youtube.com/playlist?list=OLAK5uy_k-hra-r7O3PBomJpx2V0SI7xIbeALf_v8',
              text: 'YouTube'
            }
          ],
          date: new Date('December 31, 2015')
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
              text: 'Bandcamp'
            }
          ],
          date: new Date('January 13, 2012')
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
              text: 'Bandcamp'
            },
            {
              url: 'https://open.spotify.com/album/3jt0OkxFw35gh2rJnSiARL',
              text: 'Spotify'
            }
          ],
          date: new Date('March 30, 2011')
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
              text: 'Bandcamp'
            },
            {
              url: 'https://open.spotify.com/album/3m5qEi8ThbjTkGTbGQCo3C',
              text: 'Spotify'
            },
            {
              url: 'https://www.deezer.com/en/album/368578287',
              text: 'Deezer'
            },
            {
              url: 'https://music.apple.com/au/album/volume-one-2021-remastered-version-ep/1650966687',
              text: 'iTunes'
            },
            {
              url: 'https://music.youtube.com/playlist?list=OLAK5uy_nNL9jWVN2DqRYgXhHTojAQcYTLS-tnQpg',
              text: 'YouTube'
            }
          ],
          date: new Date('August 30, 2010')
        }
      ]
    },
    {
      slug: 'whalebones',
      name: 'Whalebones',
      bio: `
        <p><strong>Whalebones</strong> is the solo project of Australian song-writer/producer Michael Gale, who creates dark electronic and neo-grunge emo inspired tunes.</p>
        <p><small>Find them on <a href="https://whalebones.bandcamp.com/">Bandcamp &nearr;</a>, <a href="https://open.spotify.com/artist/3tuDjSTKjQ9pujIK4kz6Us">Spotify &nearr;</a>, <a href="https://www.deezer.com/us/album/267163502">Deezer &nearr;</a> and <a href="https://music.youtube.com/browse/UCTE8P3IdKdEMrMduNX2Xg_g">YouTube &nearr;</a></small></p>
      `,
      image: {
        src: 'banner-whalebones.jpg',
        alt: 'Black and white photo of a musician playing acoustic guitar',
        caption: 'Whalebones, 2021',
        width: 1280,
        height: 630
      },
      releases: [
        {
          title: 'GLAMOUR BOY',
          description: 'The second album from Whalebones, featuring 9 original tracks and a remix. This album will soon be released on floppy disk. Read more about the process on <a href="https://www.michaelgale.dev/blog/releasing-an-album-on-floppy-disk">Michael\'s blog</a>.',
          type: 'LP',
          id: 'OH-016',
          date: new Date('June 14, 2024'),
          artwork: 'release-whalebones-5.jpg',
          artworkCredit: 'Michael Gale',
          notes: `
            Words + Music / Production by Michael Gale.<br>
            Mixed + Mastered by  Michael Gale.<br>
            Artwork by Michael Gale.`,
          links: [
            {
              url: 'https://whalebones.bandcamp.com/merch/limited-floppy-disk-edition',
              text: 'Limited Floppy Disk Edition (Bandcamp)',
              preferred: true
            },
            {
              url: 'https://whalebones.bandcamp.com/album/glamour-boy',
              text: 'Bandcamp'
            },
            {
              url: 'https://mirlo.space/whalebones/release/glamour-boy',
              text: 'Mirlo'             
            },
            {
              url: 'https://music.apple.com/au/album/glamour-boy/1745108319?app=music',
              text: 'Apple Music'
            },
            {
              url: 'https://music.apple.com/au/album/glamour-boy/1745108319?app=itunes',
              text: 'iTunes'
            },
            {
              url: 'https://www.deezer.com/album/583382382',
              text: 'Deezer'
            },
            {
              url: 'https://open.spotify.com/album/0ZdMlF2rusZyb7xKF9z0Lg',
              text: 'Spotify'
            },
            {
              url: 'https://youtube.com/playlist?list=OLAK5uy_n-rzd-DydSJFyj8JHfkzspv8YaJyf4DAs',
              text: 'YouTube Music'
            },
            {
              url: 'https://listen.tidal.com/album/361823944',
              text: 'Tidal'
            },
            {
              url: 'https://music.amazon.com/albums/B0D3J4M8BK',
              text: 'Amazon'
            }
          ],
          tracks: [
            { title: 'GUMMY BEAR', length: '04:23' },
            { title: 'INSIDE', length: '03:21' },
            { title: 'I AM NOT AFRAID OF (TURBO MIX)', length: '04:16' },
            { title: 'MIND IS FAILING', length: '02:40' },
            { title: 'LOADING SCREEN', length: '00:48' },
            { title: 'NO SOUL', length: '03:08' },
            { title: 'HOPE', length: '03:27' },
            { title: 'BLOOD BROTHERS II', length: '03:34' },
            { title: '3AM (WHERE THE WILD THINGS ARE)', length: '01:24' },
            { title: '6AM (LET YOU DROWN)', length: '06:04' }
          ]
        },
        {
          title: 'NO SOUL',
          type: 'SINGLE',
          id: 'OH-015',
          date: new Date('February 11, 2024'),
          artwork: 'release-whalebones-4.jpg',
          artworkCredit: 'Michael Gale',
          notes: `
            Words + Music / Production by Michael Gale.<br>
            Mixed + Mastered by  Michael Gale.<br>
            Artwork by Michael Gale.`,
          links: [{
            url: 'https://whalebones.bandcamp.com/track/no-soul-2',
            text: 'Bandcamp'
          },
          {
            url: 'https://open.spotify.com/track/6H4XYYTTfgpeVoMTNNr5uI',
            text: 'Spotify'
          },
          {
            url: 'https://music.youtube.com/watch?v=NlGt86bw46A',
            text: 'YouTube'
          },
          {
            url: 'https://www.deezer.com/us/track/2661978312',
            text: 'Deezer'
          },
          {
            url: 'https://music.apple.com/us/album/no-soul-drink-the-bleach/1731306773?i=1731306774',
            text: 'Apple Music'
          }],
          tracks: [
            { title: 'NO SOUL', length: '03:08' }
          ]
        },
        {
          title: 'Every Alterations',
          type: 'LP',
          artwork: 'release-whalebones-3.jpg',
          artworkCredit: 'Michael Gale',
          notes: 'The debut album from <em>Whalebones</em>, featuring 14 original tracks. Take a dip in the warm waters of introspective and emotive IDM from the Australian musician.<br><br>Words, music and production by Michael Gale.',
          links: [
            {
              url: 'https://whalebones.bandcamp.com/album/every-alterations',
              text: 'Bandcamp'
            },
            {

              url: 'https://open.spotify.com/album/60PRgolOzB6xfanO6RWugr',
              text: 'Spotify'
            },
            {
              url: 'https://music.apple.com/au/artist/whalebones/279869764',
              text: 'Apple Music'
            },
            {
              url: 'https://soundcloud.com/whalebonesss/sets/every-alterations',
              text: 'Soundcloud'
            },
            {
              url: 'https://music.youtube.com/playlist?list=OLAK5uy_kiSCsu1sVhbEE-zUOs9hjv_-VyCE06wZ0',
              text: 'YouTube Music'
            },
            {
              url: 'https://www.deezer.com/album/372405187',
              text: 'Deezer'
            },
            {
              url: 'https://tidal.com/browse/album/258271612',
              text: 'Tidal'
            },
            {
              url: 'https://www.amazon.com/dp/B0BLCNTPYC/',
              text: 'Amazon Music'
            }
          ],
          date: new Date('December 1, 2022'),
          id: 'OH-013',
          tracks: [
            { title: 'Miserable', length: '01:33' },
            { title: 'It Is Dark Inside Your Body', length: '01:45' },
            { title: 'Intrusion', length: '00:31' },
            { title: 'Your Bones Are Wet', length: '00:59' },
            { title: 'See-saw', length: '04:20' },
            { title: 'Climbing Out', length: '00:48' },
            { title: 'A Mask of Rainbows Unicorn', length: '04:28' },
            { title: 'I Am Not Afraid Of', length: '04:12' },
            { title: 'Carving Name In Desk', length: '00:12' },
            { title: 'Beds', length: '03:32' },
            { title: 'MISSINGNO.', length: '01:32' },
            { title: 'Yuck', length: '02:31' },
            { title: 'Weird Séance', length: '05:24' },
            { title: 'Castle', length: '03:42' }
          ]
        },
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
              text: 'Bandcamp'
            },
            {
              url: 'https://open.spotify.com/track/6c29wCDfoZmeEQLVX4cFZo',
              text: 'Spotify'
            },
            {
              url: 'https://music.youtube.com/playlist?list=OLAK5uy_laX4qkdz5wpLY4F_0ZT5-tDs4YU0luhUA&feature=share',
              text: 'YouTube'
            }
          ],
          date: new Date('February 2, 2018'),
          id: 'OH-012',
          tracks: [
            { title: 'Untitled 32 (Undefined)', length: '03:59' }
          ]
        },
        {
          title: '1am',
          type: 'SINGLE',
          description: 'The first release from Whalebones. Featuring the original track and a live recording.',
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
              text: 'Bandcamp'
            },
            {
              url: 'https://open.spotify.com/album/53yiBPYw0buIkRwp5x0TVy',
              text: 'Spotify'
            },
            {
              url: 'https://music.youtube.com/playlist?list=OLAK5uy_nKCOOU2toHxv0AvzB9MC3Awv3NUUkTisE',
              text: 'YouTube'
            }
          ],
          date: new Date('March 3, 2017'),
          id: 'OH-011',
          tracks: [
            { title: '1am',        length: '03:59' },
            { title: '1am (live)', length: '04:37' }
          ]
        }
      ]
    }
  ];

  const alumni: Artist[] = [
    {
      slug: 'bats-and-battleships',
      name: 'Bats & Battleships',
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
        height: 630
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
            { title: 'Never Touch Anything    ', length: '03:17' }
          ],
          links: [
            {
              url: 'https://batsandbattleships.bandcamp.com/',
              text: 'Bandcamp'
            }
          ],
          date: new Date('January 5, 2012')
        }
      ]
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
        height: 630
      },
      releases: [
        {
          title: 'Takes Me So Long',
          type: 'SINGLE',
          artwork: '',
          artworkCredit: '',
          links: [
            {
              url: 'https://soundcloud.com/hellstheband/takesmesolong',
              text: 'Soundcloud'
            }
          ],
          id: 'OH-006',
          date: new Date('January 6, 2013')
        },
        {
          title: 'Touch U',
          type: 'SINGLE',
          artwork: '',
          artworkCredit: '',
          links: [
            {
              url: 'https://soundcloud.com/hellstheband/touch-u',
              text: 'Soundcloud'
            }
          ],
          date: new Date('February 6, 2013'),
          id: 'OH-007'
        }
      ]
    },
    {
      slug: 'regresser',
      name: 'régresser',
      bio: `
        <p><strong>régresser</strong> were a chaotic hardcore sextet from Newcastle, Australia. They released two EPs and two singles before permanently disbanding in 2015.</p>
        <p><small>Find them on <a href="https://open.spotify.com/artist/7bjvN4iwio7i0ibrhqvQAg">Spotify &nearr;</a>, <a href="https://music.apple.com/us/artist/r%C3%A9gresser/819619810">Apple Music &nearr;</a>, <a href="https://music.youtube.com/channel/UCzW3ZsxgkOiQBiOZ9fAsC5Q">YouTube &nearr;</a> and <a href="https://listen.tidal.com/album/189662332">Tidal &nearr;</a></small></p>
      `,
      image: {
        src: 'banner-regresser.jpg',
        alt: 'Black and white photo of a band performing music in a half-pipe',
        caption:
          'régresser, performing in a half-pipe. Photo by Joe Andersons.',
        width: 1280,
        height: 630
      },
      releases: [
        {
          title: 'Trepanning',
          type: 'LIVE',
          artwork: 'release-regresser-6.jpg',
          artworkCredit: 'Michael Shepherd',
          tracks: [
            { title: 'Preamble (Live)', length: '0:47' },
            { title: 'Herds of Rhino and Buzzing Insects (Live)', length: '3:41' },
            { title: 'A Gold Crown (Live)', length: '1:46' },
            { title: 'A Black Cloud (Live)', length: '4:04' },
            { title: 'A Knot In Your Back (Live)', length: '2:44' },
            { title: 'A Question (Live)', length: '2:31' },
            { title: 'A Statement (Live)', length: '2:14' },
            { title: 'A Forum (Live)', length: '3:21' },
            { title: 'Womb (Live)', length: '2:48' }
          ],
          links: [
            {
              url: 'https://open.spotify.com/album/0MKUvk8rA9kZDAboGrSee8',
              text: 'Spotify'
            },
            {
              url: 'https://www.deezer.com/us/album/417311887',
              text: 'Deezer'
            },
            {
              url: 'https://music.apple.com/us/album/trepanning-live/1677080041',
              text: 'Apple Music'
            },
            {
              url: 'https://music.youtube.com/playlist?list=OLAK5uy_mwKEZyNxhNCdE4unVqO3WGptkZ1kvgy08',
              text: 'YouTube'
            }
          ],
          date: new Date('Marcg 1, 2023'),
          id: 'OH-014'
        },
        {
          title: 'Womb / Herds of Rhino and Buzzing Insects (.1b/.2b)',
          type: 'SINGLE',
          artwork: 'release-regresser-5.jpg',
          artworkCredit: 'Michael Shepherd, Michael Gale',
          links: [
            {
              url: 'https://open.spotify.com/album/4vESalcn343e0vMF7MIAph',
              text: 'Spotify'
            }
          ],
          date: new Date('January 1, 2015'),
          id: 'OH-010'
        },
        {
          title: '.2',
          type: 'EP',
          artwork: 'release-regresser-2.jpg',
          artworkCredit: 'Michael Shepherd',
          links: [
            {
              url: 'https://open.spotify.com/album/0J1BDVmqLU6MHRrnuAX51q',
              text: 'Spotify'
            }
          ],
          date: new Date('January 1, 2015'),
          id: 'OH-009'
        },
        {
          title: '.1',
          type: 'EP',
          artwork: 'release-regresser-1.jpg',
          artworkCredit: 'Michael Shepherd',
          links: [
            {
              url: 'https://open.spotify.com/album/5pJe7Yw950UJXRW1KJxMUW',
              text: 'Spotify'
            }
          ],
          date: new Date('January 1, 2014'),
          id: 'OH-008'
        }
      ]
    }
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
    getArtistBySlug
  };
}
