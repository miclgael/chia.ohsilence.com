# Get variables from ../.env
export $(egrep -v '^#' .env | xargs)

if [ -z "$(git status --porcelain)" ]; then 
  # Working directory clean
  echo " 🤖 Bzzt: Working directory looks clean. Nice!"
else 
  # Uncommitted changes
  echo " 🤖 Bzzt: ERROR There are uncommitted changes. Clean git history and try again."
  exit 0
fi

echo
# Clear out the existing files (except .output)
read -p " 🤖 Bzzt: Remove existing files? (Live site will immediately die). (y/n)? " choice
case "$choice" in 
  y|Y ) echo "    yes";
echo
ssh -t $DEPLOY_SSH_HOST -p $DEPLOY_SSH_PORT "rm -rf $DEPLOY_WWW_DIR/{*,.*}"
  ;;

  n|N ) echo "    no";

  ;;
  * ) echo "    invalid";;
esac

echo
# Rsync to the mounted volume
read -p " 🤖 Bzzt: Deploying to $DEPLOY_SSH_HOSTNAME. Continue? (y/n)? " choice
case "$choice" in 
  y|Y ) echo "    yes";
echo
rsync -ave "ssh -p $DEPLOY_SSH_PORT" --exclude='.deployignore' --exclude-from='.deployignore' --delete . $DEPLOY_SSH_HOST:$DEPLOY_WWW_DIR
  ;;

  n|N ) echo "    no";

  ;;
  * ) echo "    invalid";;
esac

echo
# Restart the running docker container
read -p " 🤖 Bzzt: restarting $DEPLOY_SSH_CONTAINER container. Continue? (y/n)? " choice
case "$choice" in 
  y|Y ) echo "    yes";
echo
ssh -t $DEPLOY_SSH_HOST -p $DEPLOY_SSH_PORT "docker restart $DEPLOY_SSH_CONTAINER"
  ;;

  n|N ) echo "    no";

  ;;
  * ) echo "    invalid";;
esac

# End
echo
echo "🤖 Bzzt: Deployment complete! ✨"
echo "         Please await container self-build process (ETA: 5 mins)"
