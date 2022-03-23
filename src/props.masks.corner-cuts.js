export default {
  '--mask-corner-cut-circles-1': 'radial-gradient(circle 1rem,#0000 99%,#000) 10000% 10000% / 99.5% 99.5%',
  '--mask-corner-cut-circles-2': 'radial-gradient(circle 2rem,#0000 99%,#000) 10000% 10000% / 99.5% 99.5%',
  '--mask-corner-cut-circles-3': 'radial-gradient(circle 4rem,#0000 99%,#000) 10000% 10000% / 99.5% 99.5%',
  '--mask-corner-cut-squares-1': `
    conic-gradient(from -90deg at 1rem 1rem,#0000 90deg,#000 0) 
    0 0/calc(100%  - 1rem)   calc(100%  - 1rem)
  `,
  '--mask-corner-cut-squares-2': `
    conic-gradient(from -90deg at 2rem 2rem,#0000 90deg,#000 0) 
    0 0/calc(100%  - 2rem)   calc(100%  - 2rem)
  `,
  '--mask-corner-cut-squares-3': `
    conic-gradient(from -90deg at 4rem 4rem,#0000 90deg,#000 0) 
    0 0/calc(100%  - 4rem)   calc(100%  - 4rem)
  `,
  '--mask-corner-cut-angles-1': `
    conic-gradient(from -45deg at 1rem 1rem,#0000 90deg,#000 0) 
    calc(-1*1rem) 0/100% 51% repeat-x,
    conic-gradient(from 135deg at 1rem calc(100% - 1rem),#0000 90deg,#000 0) 
    calc(-1*1rem) 100%/100% 51% repeat-x
  `,
  '--mask-corner-cut-angles-2': `
    conic-gradient(from -45deg at 2rem 2rem,#0000 90deg,#000 0) 
    calc(-1*2rem) 0/100% 51% repeat-x,
    conic-gradient(from 135deg at 2rem calc(100% - 2rem),#0000 90deg,#000 0) 
    calc(-1*2rem) 100%/100% 51% repeat-x
  `,
  '--mask-corner-cut-angles-3': `
    conic-gradient(from -45deg at 4rem 4rem,#0000 90deg,#000 0) 
    calc(-1*4rem) 0/100% 51% repeat-x,
    conic-gradient(from 135deg at 4rem calc(100% - 4rem),#0000 90deg,#000 0) 
    calc(-1*4rem) 100%/100% 51% repeat-x
  `,
}