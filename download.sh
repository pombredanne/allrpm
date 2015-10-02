#!/bin/bash

REPONAME=${1:-fedora}

dnf repograph --repoid $REPONAME | cat - | tail -n +2 > $REPONAME.dot
cd data && ln -s ../$REPONAME.dot packages && cd ../
