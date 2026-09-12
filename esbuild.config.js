import esbuildServe from 'esbuild-serve'
import esbuildSereve from 'esbuild-serve'

esbuildServe({
    entryPoints:['src/index.tsx'],
    bundle: true,
    minify: true,
    sourcemap:true,
    outfile:'dist/bundle.js',
    define:{
        'process.env.NODE_ENV':'"development"',
        'process.env.DEBUG':'flase'
    }
},
{
    port :3005,
    root:'.'
})