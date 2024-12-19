while getopts "pb:" flag; do
    case "${flag}" in
        b) DIST_DIR="$OPTARG" ;;
        *)
            echo "WTF $flag"
            exit 1;;
    esac
done


cd $DIST_DIR;
git add -A;
git commit -m "Nightly";
git branch "main"
git checkout main
git push -f origin main;