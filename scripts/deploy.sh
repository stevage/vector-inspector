OUTDIR=../vector-inspector-gh-pages
npm run build

rm $OUTDIR/js/*
rm $OUTDIR/css/*
cp -pr dist/* $OUTDIR/
cd $OUTDIR/
git add js/*
git add css/* 
git commit -am '.' 
git push