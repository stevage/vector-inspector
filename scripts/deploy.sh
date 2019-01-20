OUTDIR=docs
npm run build

rm -rf $OUTDIR/*
cp -pr dist/* $OUTDIR/
cd $OUTDIR/
git add $OUTDIR/*
git commit -am 'Update' 
git push