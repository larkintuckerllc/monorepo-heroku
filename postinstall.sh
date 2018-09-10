IFS=$'\n'
npm run bootstrap
exit_status=$?
if [ $exit_status -eq 0 ]; then
  if [ -f build ]; then
    echo "POSTINSTALL: Building packages in build file"
    while read -r package; do
      if [ -d "packages/$package" ]; then
        echo "POSTINSTALL: Building $package"
        npm run lerna -- run --scope $package build-ts
        exit_status=$?
        if [ $exit_status -ne 0 ]; then
          exit $exit_status
        fi
      else
        echo "POSTINSTALL: ERROR - Package $package in build file does not exist"
        exit 1
      fi
    done < build
  else
    echo "POSTINSTALL: Building all packages"
    npm run build-ts
    exit $?
  fi
else
  exit $exit_status
fi
