#!/bin/bash

mainProject=$(git rev-parse --show-superproject-working-tree)

if [ -z "$mainProject" ]; 
then
    echo "empty"
else
    echo "not empty"
    echo "${mainProject}/."
    echo "Copying config to ${mainProject}"
    cp .eslintrc.json "${mainProject}/."
    cp .prettierrc "${mainProject}/."
    # cp package.json "${mainProject}/."
    echo "Copying done"
fi
